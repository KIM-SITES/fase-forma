import { opcoes } from '../data/conteudo';

const form = document.querySelector<HTMLFormElement>('#briefing-form');
const fields = document.querySelector<HTMLFieldSetElement>('#briefing-fields');
const result = document.querySelector<HTMLElement>('#briefing-resultado');
const summary = document.querySelector<HTMLElement>('#resumo-texto');
const title = document.querySelector<HTMLElement>('#resumo-titulo');
const status = document.querySelector<HTMLElement>('#briefing-status');
const objective = document.querySelector<HTMLTextAreaElement>('#objetivo');
const counter = document.querySelector<HTMLElement>('#caracteres');

if (form && fields && result && summary && title && status && objective) {
  const required = ['servico', 'ambiente', 'prioridade'] as const;
  const setError = (name: typeof required[number], invalid: boolean) => {
    const message = document.getElementById(`${name}-error`);
    if (message) message.hidden = !invalid;
    form.querySelectorAll<HTMLInputElement | HTMLSelectElement>(`[name="${name}"]`).forEach(input => {
      if (invalid) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid');
    });
  };
  const isAllowed = (name: keyof typeof opcoes, value: string) => (opcoes[name] as readonly string[]).includes(value);
  form.noValidate = true;
  fields.disabled = false;
  // Firefox can restore field values on reload independently of application storage.
  window.addEventListener('pageshow', () => {
    form.reset();
    required.forEach(name => setError(name, false));
    if (counter) counter.textContent = '0 / 500';
    summary.textContent = '';
    status.textContent = '';
    form.hidden = false;
    result.hidden = true;
  });
  objective.addEventListener('input', () => { if (counter) counter.textContent = `${objective.value.length} / 500`; });
  required.forEach(name => {
    form.querySelectorAll(`[name="${name}"]`).forEach(control => control.addEventListener('change', () => setError(name, false)));
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let firstError: string | undefined;
    required.forEach(name => {
      const invalid = !isAllowed(name, String(data.get(name) ?? ''));
      setError(name, invalid);
      if (invalid && !firstError) firstError = name;
    });
    if (firstError) {
      form.querySelector<HTMLElement>(`[name="${firstError}"]`)?.focus();
      status.textContent = 'Revise os campos obrigatórios indicados.';
      return;
    }
    const lines = ['FASE / FORMA — Briefing demonstrativo', '', `Solução: ${data.get('servico')}`, `Ambiente: ${data.get('ambiente')}`, `Prioridade: ${data.get('prioridade')}`];
    const goal = objective.value.trim().slice(0, 500);
    const step = String(data.get('etapa') ?? '');
    if (goal) lines.push(`Objetivo: ${goal}`);
    if (isAllowed('etapa', step)) lines.push(`Etapa atual: ${step}`);
    lines.push('', 'Demonstração local. Não representa orçamento, diagnóstico ou proposta comercial. Nenhuma informação foi enviada.');
    summary.textContent = lines.join('\n');
    status.textContent = '';
    form.hidden = true;
    result.hidden = false;
    title.focus();
  });
  document.getElementById('editar-respostas')?.addEventListener('click', () => {
    form.hidden = false;
    result.hidden = true;
    status.textContent = '';
    form.querySelector<HTMLElement>('input:checked, input[name="servico"]')?.focus();
  });
  document.getElementById('recomecar')?.addEventListener('click', () => {
    form.reset();
    required.forEach(name => setError(name, false));
    if (counter) counter.textContent = '0 / 500';
    summary.textContent = '';
    status.textContent = '';
    form.hidden = false;
    result.hidden = true;
    form.querySelector<HTMLElement>('input')?.focus();
  });
  document.getElementById('copiar-resumo')?.addEventListener('click', async () => {
    status.textContent = '';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard indisponível');
      await navigator.clipboard.writeText(summary.textContent ?? '');
      status.textContent = 'Briefing copiado para a área de transferência.';
    } catch {
      status.textContent = 'A cópia automática não foi possível. Selecione o texto do resumo para copiar.';
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(summary);
      selection?.removeAllRanges();
      selection?.addRange(range);
      summary.focus({ preventScroll: true });
    }
  });
}
