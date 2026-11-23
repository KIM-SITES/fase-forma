import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

async function completeBriefing(page: Page, goal = 'Luz indireta para receber e ler.') {
  await page.getByLabel('Iluminação', { exact: true }).check();
  await page.getByLabel('Qual é o ambiente?').selectOption('Apartamento');
  await page.getByLabel('Qual a prioridade principal?').selectOption('Criar atmosfera');
  await page.getByLabel('Descreva seu objetivo').fill(goal);
  await page.getByLabel('Sua etapa atual').selectOption('Planejando');
  await page.getByRole('button', { name: 'Gerar resumo' }).click();
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#servico-0')).toBeEnabled();
});

test('estrutura, âncoras, fontes e console', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.reload();
  await page.evaluate(() => document.fonts.ready);
  await expect(page).toHaveTitle(/Projeto demonstrativo/);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('main > section')).toHaveCount(7);
  expect(await page.locator('a[href^="#"]').evaluateAll(links => links.every(link => document.getElementById((link as HTMLAnchorElement).hash.slice(1))))).toBe(true);
  expect(await page.evaluate(() => document.fonts.check('600 24px "Sora Variable"') && document.fonts.check('400 16px "Instrument Sans Variable"'))).toBe(true);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, follow');
  expect(errors).toEqual([]);
});

test('dez larguras, sem overflow, imagens carregadas e CTAs íntegros', async ({ page }) => {
  for (const width of [320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
    await page.evaluate(() => document.fonts.ready);
    for (const id of ['solucoes', 'ambientes', 'automacao', 'metodo', 'briefing']) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    }
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const overflow = await page.locator('h1, h2, h3, .button, .scene-button, select, textarea').evaluateAll(elements => elements.filter(el => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && (rect.left < -1 || rect.right > window.innerWidth + 1 || el.scrollWidth > el.clientWidth + 2);
    }).map(el => el.textContent?.trim()));
    expect(overflow, `Largura ${width}`).toEqual([]);
    await expect.poll(() => page.locator('.media-fallback img').evaluateAll(images => images.every(img => (img as HTMLImageElement).complete && (img as HTMLImageElement).naturalWidth > 0))).toBe(true);
  }
});

test('cenas, intensidade nativa, teclado e reinício', async ({ page }) => {
  await page.getByRole('button', { name: 'Concentrar', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Concentrar', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#descricao-cena')).toHaveText('Distribuição mais uniforme para tarefas e foco.');
  await expect(page.locator('#intensidade')).toHaveValue('90');
  await expect(page.locator('[data-scene-image="concentrar"]')).toHaveClass(/is-active/);
  await page.locator('#intensidade').focus();
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('#intensidade')).toHaveValue('85');
  await expect(page.locator('#intensidade')).toHaveAttribute('aria-valuetext', '85%');
  await expect(page.locator('#intensidade-valor')).toHaveText('85%');
  await page.getByRole('button', { name: 'Desacelerar', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#intensidade')).toHaveValue('45');
  await expect(page.locator('#descricao-cena')).toHaveText('Pontos de luz mais contidos para o fim do dia.');
  await page.getByRole('button', { name: 'Reiniciar cena' }).click();
  await expect(page.locator('#intensidade')).toHaveValue('75');
  await expect(page.getByRole('button', { name: 'Acolher', exact: true })).toHaveAttribute('aria-pressed', 'true');
});

test('menu mobile, Escape, foco e âncoras', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const toggle = page.getByRole('button', { name: 'Abrir menu' });
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#navegacao')).toBeVisible();
  await page.keyboard.press('Tab');
  await expect(page.locator('#navegacao a').first()).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(page.locator('#navegacao')).toBeHidden();
  await toggle.click();
  await page.locator('#navegacao').getByRole('link', { name: 'Ambientes', exact: true }).click();
  await expect(page.locator('#navegacao')).toBeHidden();
  await expect(page.locator('#ambientes')).toBeFocused();
  await expect(page).toHaveURL(/#ambientes/);
  await page.setViewportSize({ width: 1280, height: 900 });
  await expect(page.locator('#navegacao')).toBeVisible();
});

test('skip link pelo teclado', async ({ page }) => {
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Pular para o conteúdo' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#conteudo')).toBeFocused();
});

test('rotinas alteram o esquema e a descrição', async ({ page }) => {
  await page.getByRole('button', { name: 'Leitura', exact: true }).click();
  await expect(page.locator('#planta-rotina')).toHaveAttribute('data-active-routine', 'leitura');
  await expect(page.locator('#rotina-descricao')).toHaveText('Luz direcionada para a atividade, sem iluminar tudo da mesma forma.');
  await page.getByRole('button', { name: 'Noite', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Noite', exact: true })).toHaveAttribute('aria-pressed', 'true');
});

test('validação contextual e resumo seguro, sem envio ou persistência', async ({ page }) => {
  const requests: string[] = [];
  page.on('request', request => { if (request.method() !== 'GET') requests.push(request.url()); });
  await page.getByRole('button', { name: 'Gerar resumo' }).click();
  await expect(page.locator('#servico-0')).toBeFocused();
  await expect(page.locator('#servico-error')).toBeVisible();
  await expect(page.locator('#ambiente-error')).toBeVisible();
  const goal = '<img src=x onerror=alert(1)> Quero iluminação para ler.';
  await completeBriefing(page, goal);
  await expect(page.locator('#resumo-titulo')).toBeFocused();
  await expect(page.locator('#resumo-texto')).toContainText(goal);
  await expect(page.locator('#resumo-texto img')).toHaveCount(0);
  await expect(page.locator('#resumo-texto')).toContainText('Ambiente: Apartamento');
  expect(requests).toEqual([]);
  expect(await page.evaluate(() => ({ local: localStorage.length, session: sessionStorage.length, cookie: document.cookie }))).toEqual({ local: 0, session: 0, cookie: '' });
  await page.getByRole('button', { name: 'Editar respostas' }).click();
  await expect(page.locator('#objetivo')).toHaveValue(goal);
  await page.getByRole('button', { name: 'Gerar resumo' }).click();
  await page.getByRole('button', { name: 'Começar novamente' }).click();
  await expect(page.locator('#objetivo')).toHaveValue('');
  await expect(page.locator('input[name="servico"]:checked')).toHaveCount(0);
  await completeBriefing(page);
  await page.reload();
  await expect(page.locator('#objetivo')).toHaveValue('');
});

test('cópia confirmada e fallback selecionável', async ({ page }) => {
  // Mock the OS boundary to verify both outcomes deterministically in all engines.
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (text: string) => { (window as Window & { copiedBriefing?: string }).copiedBriefing = text; } } }));
  await completeBriefing(page);
  await page.getByRole('button', { name: 'Copiar resumo' }).click();
  await expect(page.locator('#briefing-status')).toHaveText('Briefing copiado para a área de transferência.');
  expect(await page.evaluate(() => (window as Window & { copiedBriefing?: string }).copiedBriefing)).toContain('Solução: Iluminação');
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async () => { throw new Error('Permissão negada'); } } }));
  await page.getByRole('button', { name: 'Copiar resumo' }).click();
  await expect(page.locator('#briefing-status')).toContainText('A cópia automática não foi possível.');
  expect(await page.evaluate(() => window.getSelection()?.toString())).toContain('Solução: Iluminação');
});

for (const state of ['página', 'menu', 'cena', 'erros', 'resumo']) {
  test(`Axe: ${state}`, async ({ page, browserName }) => {
    test.skip(browserName === 'firefox' && state === 'resumo', 'Axe 4.14 encerra o Firefox 159 ao analisar o resumo neste ambiente. O fluxo funcional é testado no Firefox e a auditoria deste estado roda integralmente nos outros dois motores.');
    if (state !== 'página') await page.setViewportSize({ width: 390, height: 844 });
    if (state === 'menu') await page.getByRole('button', { name: 'Abrir menu' }).click();
    if (state === 'cena') await page.getByRole('button', { name: 'Desacelerar', exact: true }).click();
    if (state === 'erros') await page.getByRole('button', { name: 'Gerar resumo' }).click();
    if (state === 'resumo') await completeBriefing(page);
    const audit = new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']);
    const results = await audit.analyze();
    expect(results.violations).toEqual([]);
  });
}

test('reduced motion elimina transições e mantém interações', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.reload();
  await page.getByRole('button', { name: 'Concentrar', exact: true }).click();
  expect(await page.locator('[data-scene-image="concentrar"]').evaluate(el => getComputedStyle(el).transitionDuration)).toBe('0s');
  expect(await page.evaluate(() => document.getAnimations().filter(animation => animation.playState === 'running').length)).toBe(0);
  await completeBriefing(page);
  await expect(page.locator('#briefing-resultado')).toBeVisible();
});

test('sem JavaScript, conteúdo e descrições continuam acessíveis', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto('/');
  await expect(page.locator('h1')).toBeVisible();
  await expect(page.locator('#navegacao')).toBeVisible();
  await expect(page.locator('#ambientes noscript .nojs-note')).toBeVisible();
  await expect(page.locator('#ambientes noscript .nojs-note')).toContainText('Distribuição mais uniforme para tarefas e foco.');
  await expect(page.locator('#briefing-fields')).toHaveAttribute('disabled', '');
  await expect(page.getByRole('button', { name: 'Gerar resumo' })).toBeDisabled();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await context.close();
});

test('imagens indisponíveis preservam textos e controles', async ({ page }) => {
  await page.route('**/imagens/**', route => route.abort());
  await page.reload();
  await expect(page.locator('.hero-art .image-error')).toBeVisible();
  await page.locator('#ambientes').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Concentrar', exact: true }).click();
  await expect(page.locator('.scene-stage .image-error')).toBeVisible();
  await expect(page.locator('#descricao-cena')).toContainText('Distribuição mais uniforme');
  await completeBriefing(page);
  await expect(page.locator('#briefing-resultado')).toBeVisible();
});

test('carregamento lento preserva geometria e conteúdo essencial', async ({ page }) => {
  await page.route('**/imagens/**', async route => { await new Promise(resolve => setTimeout(resolve, 900)); await route.continue(); });
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('h1')).toBeVisible();
  const before = await page.locator('.hero').boundingBox();
  await page.waitForLoadState('networkidle');
  const after = await page.locator('.hero').boundingBox();
  expect(after?.height).toBe(before?.height);
  await expect(page.getByRole('link', { name: 'Explorar soluções' })).toBeVisible();
});

test('toque em emulação mobile', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true });
  const page = await context.newPage();
  await page.goto('/');
  await page.getByRole('button', { name: 'Abrir menu' }).tap();
  await page.locator('#navegacao').getByRole('link', { name: 'Ambientes', exact: true }).tap();
  await page.getByRole('button', { name: 'Desacelerar', exact: true }).tap();
  await expect(page.getByRole('button', { name: 'Desacelerar', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await context.close();
});
