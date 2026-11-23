# Validação da implementação

Data: **22/11/2026**. Ensaios locais em Windows, Node.js 24.19.0, site estático servido por `astro preview` em `http://127.0.0.1:4321/`. Este relatório se refere ao website implementado, não apenas ao protótipo.

## Resultado

Site construído e navegado localmente, com imagens e fontes carregadas, cenas interativas e briefing funcionando. `npm.cmd run build` passou, e `npm.cmd run check` terminou com **0 erros, 0 avisos e 0 hints**.

`npm.cmd test` executou a suíte nos motores Chromium 159, Firefox 159 e WebKit 27.2 do Playwright 1.65.1: **53 testes aprovados e 1 ignorado explicitamente**, sem falhas na rodada final. Duração aproximada: 1,1 minuto, com um worker.

## Cobertura real

| Ensaio | Resultado |
| --- | --- |
| Larguras 320, 360, 375, 390, 430, 768, 1024, 1280, 1440 e 1920 em cada motor | Sem overflow horizontal, headings/controles cortados ou imagens quebradas |
| Header, menu, Enter, Tab, Escape, retorno de foco, âncoras e skip link | Aprovados nos três motores |
| Três cenas, imagem ativa, descrição, `aria-pressed`, slider com teclado, valor acessível e reinício | Aprovados nos três motores |
| Rotinas da planta e descrição de automação | Aprovadas nos três motores |
| Campos obrigatórios, erros contextuais e foco no primeiro erro | Aprovados nos três motores |
| Resumo, texto literal semelhante a HTML, edição, reinício, ausência de POST e de armazenamento | Aprovados nos três motores |
| Limpeza de respostas no reload | Aprovada nos três motores, inclusive Firefox |
| Cópia e fallback selecionável com sucesso/falha simulados | Aprovados nos três motores |
| Clipboard API real, escrita e releitura no Chromium | Aprovado; conteúdo idêntico após normalizar CRLF do Windows |
| Redução de movimento e funcionamento sem JavaScript | Aprovados nos três motores; sem JS, descrições e navegação acessíveis, briefing desabilitado |
| Interação touch em contexto emulado | Aprovada nos três motores |
| Imagens bloqueadas e atraso de imagens de 900ms | Conteúdo e controles preservados; geometria do hero estável |
| Fontes carregadas, âncoras existentes, título e `noindex` | Aprovados nos três motores |
| Erros de execução JavaScript | Nenhum detectado nas verificações de carregamento normal |
| `npm audit --omit=dev` | 0 vulnerabilidades informadas |

Também foram abertos o HTML do protótipo e a referência PNG antes da revisão visual. Capturas temporárias do website incluíram desktop 1440, mobile 390, largura mínima 320, tablet 768, estúdio, formulário mobile e página completa. Foram inspecionadas sem conservar imagens ou relatórios volumosos no projeto.

## Acessibilidade

Axe 4.14 foi executado com as tags `wcag2a`, `wcag2aa`, `wcag21aa` e `wcag22aa`. **Zero violações detectadas nos 14 estados auditados:** página, menu, cena, erros de formulário e resumo em Chromium e WebKit; os mesmos estados, exceto resumo, em Firefox. Nenhuma regra foi desativada.

**Limite observado:** executar Axe no resumo encerra o processo do Firefox 159 neste ambiente. A falha se repetiu isoladamente, com novo contexto, viewport desktop e modo `axe.run`. O teste específico está marcado como ignorado com justificativa explícita. O fluxo funcional do resumo passou no Firefox, e o estado completo passou na auditoria Axe nos outros dois motores. Isso não é apresentado como certificação WCAG nem como auditoria completa no Firefox.

Foram corrigidos durante a validação: perda de contraste em entradas com opacidade, restauração automática de campos no Firefox e fechamento tardio do menu durante mudança de breakpoint no WebKit. O foco volta ao botão antes de ocultar a navegação.

Não houve ensaio em Safari físico, iPhone/Android reais, NVDA, VoiceOver ou com pessoas usuárias. WebKit e touch emulado não substituem esses testes.

## Desempenho de laboratório

Lighthouse **13.6.0**, Chrome headless **158**, execução CLI contra o build estático local. As medições finais abaixo ocorreram sequencialmente, após o término dos testes funcionais.

| Medida | Mobile | Desktop |
| --- | ---: | ---: |
| Performance | **99** | **100** |
| Acessibilidade automatizada | 100 | 100 |
| Boas práticas | 100 | 100 |
| SEO | 63 | 63 |
| First Contentful Paint | 0,8 s | 0,3 s |
| Largest Contentful Paint | **2,0 s** | **0,5 s** |
| Total Blocking Time | 100 ms | 0 ms |
| Cumulative Layout Shift | **0** | **0,001** |
| Speed Index | 1,1 s | 0,4 s |

Mobile: viewport 412 × 823, DPR 1,75, CPU simulada 4× mais lenta, RTT 150ms e vazão de referência 1638,4 Kbps. Desktop: 1350 × 940, DPR 1, CPU 1×, RTT 40ms e 10240 Kbps. Não houve avisos de execução no Lighthouse. Uma rodada mobile preliminar, durante outros trabalhos de validação, marcou 98; não se selecionaram dezenas de execuções para obter uma nota.

A nota SEO é reduzida pela decisão intencional de impedir indexação desta demonstração (`noindex, follow`). Não foi removida a transparência do projeto para melhorar a nota. Sem domínio de publicação, canonical e Open Graph absoluto ficam para uma publicação futura autorizada.

O JavaScript final tem **7692 bytes**, aproximadamente **2932 bytes gzip**. São carregados dois WOFF2 locais (aproximadamente 30 e 34 KB); o hero AVIF varia de 22 a 123 KB. O build contém uma página e ativos estáticos, sem runtime de React ou bibliotecas de animação.

**Não existem dados de campo.** Estes números não medem percentis de usuários reais, INP de produção ou desempenho em redes/dispositivos físicos. TBT não é INP. O servidor local também não representa a latência de hospedagem. Não se promete cumprimento de Core Web Vitals em produção.

## Reproduzir

```powershell
npm.cmd ci
npm.cmd run check
npm.cmd run build
npx.cmd playwright install chromium firefox webkit
npm.cmd test
```

Os testes iniciam o preview quando necessário e gravam resultados em `%TEMP%\fase-forma-testes\resultados`. As ferramentas podem precisar da permissão de execução de subprocessos que o sandbox original negava ao Firefox; o projeto não desativa proteções do navegador.

Para Lighthouse, iniciar `npm.cmd run preview` e, em outro terminal, apontar `CHROME_PATH` para a instalação local do Chrome e executar:

```powershell
$env:CHROME_PATH = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
npx.cmd lighthouse http://127.0.0.1:4321/ --chrome-flags="--headless=new" --only-categories=performance,accessibility,best-practices,seo
```

Adicionar `--preset=desktop` para o perfil desktop. Os resultados variam com o equipamento e a carga local.

## Entrega e limites

O material de pré-produção foi preservado. Não havia AGENTS.md aplicável ou repositório Git inicializado na pasta. Não foram criados commit, push, PR, deploy, rotas de estudo ou integrações externas.

`dist/`, `.astro/`, `node_modules/` e artefatos de teste estão ignorados para futuro versionamento. Os ativos finais, fontes com suas licenças, prompts e código necessários estão no projeto. Os renders são conceituais e não representam obra executada ou simulação física de iluminação. Origens e direitos estão em [CREDITOS_ASSETS.md](CREDITOS_ASSETS.md).
