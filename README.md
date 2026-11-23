# FASE / FORMA

Site estático demonstrativo de uma empresa **fictícia** de elétrica, iluminação e automação. Implementado com Astro, TypeScript e CSS, conforme os documentos preservados em `docs/FASE_FORMA_PRE_PRODUCAO/`.

Não oferece serviços reais. O briefing organiza respostas localmente, não calcula valores, não envia informações e não coleta dados pessoais. Não há backend, analytics, cookies ou armazenamento de respostas.

## Executar

Requisitos: Node.js **22.23.4 ou superior**, em versão par suportada pelo Astro, e npm. Ambiente validado: Windows, Node 24.19.0.

```powershell
npm.cmd ci
npm.cmd run dev
```

Abra o endereço exibido pelo Astro, normalmente **http://127.0.0.1:4321/**. No Windows com scripts PowerShell bloqueados, use `npm.cmd` e `npx.cmd`, como nos exemplos. Em outros shells, `npm` e `npx` funcionam normalmente.

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run preview
```

O build gera apenas a página `/` e ativos estáticos em `dist/`. Nenhum adaptador de servidor é necessário. Não foi configurado deploy ou integração com GitHub.

## O que foi implementado

- Header com navegação por âncoras, menu mobile, Escape, foco e skip link.
- Hero editorial, abertura, quatro serviços em linhas, método e encerramento com transparência sobre a ficção.
- Estúdio com três renders do mesmo ambiente, botões com `aria-pressed`, descrição acessível, crossfade e intensidade nativa de 20 a 100%.
- Planta de automação ilustrativa com três exemplos locais, sem controle de dispositivos.
- Briefing com seleção de solução, ambiente, prioridade, objetivo opcional e etapa; validação contextual, resumo seguro, edição, reinício e cópia com fallback selecionável.
- Fontes locais, imagens AVIF/WebP responsivas, fallback de imagem, suporte sem JS para conteúdo essencial e redução de movimento.

## Arquivos principais

| Caminho | Responsabilidade |
| --- | --- |
| `src/pages/index.astro` | Composição da única página |
| `src/layouts/BaseLayout.astro` | HTML, fontes, metadados e carregamento dos scripts |
| `src/components/` | Componentes editoriais e funcionais |
| `src/data/conteudo.ts` | Serviços, cenas, rotinas, etapas e categorias permitidas |
| `src/styles/` | Tokens e estilos responsivos |
| `src/scripts/` | Menu, cenas/rotinas, briefing e motion nativos |
| `public/imagens/` | Imagens finais otimizadas e composição social |
| `public/favicon.svg` | Marca gráfica própria |
| `tests/site.spec.ts` | Testes funcionais, responsivos e Axe |
| `docs/CREDITOS_ASSETS.md` | Origens, direitos, fontes e limites das imagens |
| `docs/PROMPTS_IMAGENS.md` | Prompts usados na ferramenta de imagens |
| `docs/VALIDACAO.md` | Ensaios executados e resultados |

## Dependências

Produção: Astro 7.4.13, Sora Variable 5.3.0 e Instrument Sans Variable 5.3.0. Desenvolvimento/validação: TypeScript, `@astrojs/check`, Playwright, `@axe-core/playwright`, Lighthouse e Sharp. As versões efetivamente resolvidas estão em `package-lock.json`.

Não foram adicionados React, Tailwind, GSAP, frameworks de animação ou bibliotecas gráficas. O JavaScript da página usa APIs nativas. As ferramentas de teste e otimização não são enviadas ao navegador.

## Testes

Após o build:

```powershell
npx.cmd playwright install chromium firefox webkit
npm.cmd test -- --workers=1
```

O Playwright inicia `astro preview` quando necessário. Em Windows, o Firefox pode exigir execução fora de um sandbox que bloqueie seus subprocessos; não é necessário desativar o sandbox do navegador no projeto. O WebKit do Playwright é um motor de teste e não substitui Safari em dispositivo físico.

Na validação final, 53 casos passaram e um foi ignorado explicitamente: a análise Axe do resumo encerra o Firefox 159 neste ambiente. O resumo foi testado funcionalmente nesse motor e auditado com Axe em Chromium e WebKit. Nenhuma regra Axe foi desativada nos estados efetivamente auditados.

Os resultados temporários ficam em `%TEMP%\fase-forma-testes\resultados`, fora do projeto. Screenshots, vídeos e traces não são produzidos automaticamente. O projeto ignora `node_modules`, `dist`, `.astro` e relatórios de ferramentas.

## Decisões de implementação

- A especificação do usuário prevaleceu sobre recomendações genéricas das skills: copy e paleta aprovadas, legendas transparentes, ordem das seções, alturas guiadas por conteúdo e experiência de cenas foram mantidas. Não foi copiado o HTML do protótipo nem um kit de interface.
- Motion prioriza refinamento e resposta rápida: entrada de 16px, revelações de 12px e crossfade de 500ms. O texto mantém contraste durante as entradas; teclado e `prefers-reduced-motion` evitam transições. Não há animações contínuas ou scroll capturado.
- `method="dialog"`, campos inicialmente desabilitados e `preventDefault` impedem um caminho de envio do briefing. Apenas os valores das categorias previstas são aceitos; a descrição tem limite de 500 caracteres e é exibida com `textContent`.
- Respostas ficam em memória. O formulário desativa autocomplete e é limpo em `pageshow`, inclusive quando o navegador tenta restaurar campos após reload ou histórico.
- O menu é um disclosure de navegação, não uma janela modal: Tab segue a ordem da página, Escape restaura o foco, e a escolha de âncora foca a seção correspondente.
- Links têm `tabindex="0"` explícito para inclusão na sequência de teclado também no WebKit de Windows, cuja configuração padrão ignora links sem esse atributo.
- O conteúdo essencial é HTML estático. Sem JavaScript, o menu e todas as descrições de cenas permanecem acessíveis; o briefing informa a necessidade de JS e não pode enviar dados.
- `noindex, follow` é intencional nesta demonstração; reduz a nota de SEO do Lighthouse. Não há schema LocalBusiness, avaliações ou dados de contato inventados. Antes de uma eventual publicação autorizada, definir domínio, canonical e URL absoluta da imagem Open Graph. A imagem social local já foi produzida.

## Commits sugeridos, para executar manualmente

```text
feat: implementa site demonstrativo Fase Forma em Astro
feat: adiciona cenas de iluminação e briefing local acessível
test: valida responsividade e acessibilidade nos três motores
docs: registra ativos, licenças e resultados de validação
```

Nenhum repositório Git, commit, push, PR ou deploy é criado por estes scripts.
