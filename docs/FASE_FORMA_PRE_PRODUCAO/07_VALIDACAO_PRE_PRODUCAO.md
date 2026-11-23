# 07 — Relatório honesto de validação da pré-produção

**Data:** 22/11/2026.  
**Escopo:** material criativo, documentos, imagens conceituais e um protótipo HTML de laboratório. **Não** é auditoria de website de produção.

## Verificações concluídas

- JSON `design-tokens.json`: analisado com `json.loads` — válido.
- Código JavaScript incorporado no HTML: analisado com `node --check` — sintaxe válida.
- HTML analisado estruturalmente com BeautifulSoup: sem IDs duplicados e sem âncoras locais apontando para IDs inexistentes.
- Todas as imagens presentes em tags `<img>` do HTML possuem `alt` e arquivos locais existentes no pacote.
- Campos textuais com IDs no formulário possuem labels correspondentes. Os radio buttons usam labels envolventes e fieldset/legend.
- Imagens conceituais de cenas: base derivada da mesma composição da sala, com modificações visuais demonstrativas; não representam cálculo luminotécnico real.
- Cores comparadas via fórmula WCAG: âmbar sobre marfim ~1,65:1 (proibido para texto pequeno); tinta escura sobre âmbar ~10,3:1 (adequado).

## Verificações NÃO concluídas

- Navegação real e screenshots no Chromium/Firefox/WebKit: o ambiente de execução impediu que o navegador automatizado navegasse até os arquivos ou servidor local (`ERR_BLOCKED_BY_ADMINISTRATOR`). A tentativa de conteúdo injetado também expirou. Não há capturas de aprovação.
- Nenhum teste em dispositivo físico, Safari real, VoiceOver/NVDA, Lighthouse ou Axe executado.
- Não foram validados detalhes de responsividade em navegador renderizado; os breakpoints do protótipo são hipóteses que o Codex deve testar e refinar.
- Não houve verificação completa de registro de marca do nome FASE / FORMA nem de disponibilidade de domínio.
- Não foi produzido backend ou site final. O formulário do HTML é demonstrativo e não envia dados.

## Próximos testes que o Codex deve realizar

1. Abrir o protótipo e a implementação em navegador com acesso real.
2. Verificar cortes e quebras em todos os breakpoints indicados.
3. Exercitar menu, presets, intensidade, formulário, edição e clipboard.
4. Conferir fontes e imagens no build estático.
5. Validar acessibilidade e performance com medidas, incluindo reduced motion.
6. Validar publicação Vercel somente depois de autorização do usuário.
