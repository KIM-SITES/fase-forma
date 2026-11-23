# 06 — COMANDO FINAL PARA O CODEX (colar integralmente)

Você está no repositório de um NOVO site demonstrativo. Sua tarefa é implementar a versão definitiva do site fictício **FASE / FORMA**, com rigor de um creative developer e engenheiro front-end experiente. O projeto é uma demonstração de portfólio, **não uma empresa operante**.

## Fonte de verdade

Antes de alterar arquivos, leia nesta ordem os documentos localizados em `docs/pre-producao/` (ou no diretório equivalente em que foram adicionados):

1. `00_LEIA_PRIMEIRO.md`
2. `01_ESTRATEGIA_E_DIRECAO.md`
3. `02_CONTEUDO_FINAL.md`
4. `03_MOTION_UX.md`
5. `04_ARQUITETURA_E_QUALIDADE.md`
6. `05_ATIVOS_E_REFERENCIAS.md`
7. `design-tokens.json`

Examine também `referencias/mockup-direcao-criativa.png` e abra `prototipo-interativo.html` como laboratório visual/funcional. A imagem é referência, e o HTML é um protótipo, não deve ser simplesmente copiado como código final. Leia `AGENTS.md` e Skills instaladas, escolhendo só as realmente relevantes; se houver conflito, explique antes de seguir. Não tratar o mockup como fotografia de obra nem resultado real.

## Objetivo do produto

Criar um site single-page excepcional em português brasileiro, com aparência editorial autoral, grande qualidade de tipografia, fotografia atmosférica, clareza de serviço, experiência interativa de cenas de iluminação e briefing local. Deve parecer uma peça de portfólio de estúdio de alto nível, MAS continuar crível para uma empresa de instalações elétricas. Não criar clone da Entrear ou da Lâmina.

O conceito é **'O invisível sustenta. A luz transforma.'**. Marca **FASE / FORMA**; assinatura secundária **'A técnica que acende o espaço.'**. Predominância marfim com grafite/azul mineral, âmbar como luz/acento (nunca texto pequeno sobre marfim). Tipografia **Sora + Instrument Sans**. A marca é provisória/fictícia, sem afirmação de registro ou exclusividade.

## Stack e limites

- Astro + TypeScript + CSS moderno com layout semântico e geração estática. Utilize JS nativo para cenas, menu e briefing.
- GSAP apenas se motion complexo realmente justificar; preferir CSS e IntersectionObserver em movimentos simples.
- NÃO adicionar React, Next.js, Tailwind, Lenis, OGL, Three.js, WebGL, UI kits ou bibliotecas de ícones sem necessidade concreta.
- Sem backend, banco de dados, analytics, formulário externo, cookies desnecessários ou integrações.
- Não incluir telefone, e-mail, WhatsApp, endereço, CNPJ, avaliações, portfólio de clientes, certificações ou preços fictícios. Aviso visível: empresa fictícia/demonstração.
- Manter textos conforme documento `02_CONTEUDO_FINAL.md` e ajustar apenas por problemas reais de leitura.
- Conteúdo SEO descritivo e transparente, nunca LocalBusiness/avaliações falsas. Considerar robots noindex para demonstração, documentando decisão.

## Estrutura obrigatória

Implementar as seções exatamente nesta sequência, sem adicionar 'diferenciais' genéricos:

1. Header com marca, âncoras e CTA `Montar briefing`.
2. Hero editorial/arquitetônico com H1 `O invisível sustenta. A luz transforma.`, subtítulo e CTAs.
3. Abertura editorial curta que liga técnica e experiência.
4. Soluções: quatro serviços em composição editorial, sem quatro cards genéricos idênticos.
5. Estúdio de cenas: **mesmo ambiente** com três atmosferas (`Acolher`, `Concentrar`, `Desacelerar`), botões acessíveis e intensidade se visualmente convincente. Estado/descrição/semântica corretos; sem autoplay.
6. Automação: linguagem gráfica de precisão/arquitetura, exemplos claros, **sem interface de controle falso de dispositivos reais**.
7. Método: quatro etapas com narrativa contínua e hierarquia clara.
8. Briefing de orçamento demonstrativo: campos locais, validação, resumo e copiar/editar; **sem preço**, envio, API ou coleta de dados pessoais.
9. Encerramento de impacto, CTA para briefing e footer com aviso explícito de empresa fictícia.

## Fotografia e ativos

O pacote inclui imagens de conceito extraídas do próprio mockup gerado para orientar a prototipagem. Podem ser usadas na etapa inicial, mas são de resolução limitada e **não bastam automaticamente para uma versão final em 1920px**. Busque/produza imagens adequadas, com direitos verificáveis, otimize formatos responsivos e registre as origens e licenças. A seção de cenas deve usar renders da MESMA câmera/cômodo em iluminação distinta; se não puder garantir isso, preserve o conceito de demonstração explicitamente ilustrativa e não apresente como fotografia realista. Nunca usar três ambientes diferentes como se fossem transformação do mesmo espaço.

Não importar imagens de Pinterest, Behance, sites de arquitetos ou buscadores sem autorização explícita. Não criar portfólio de obras realizado pela empresa. Não usar logo de marcas reais.

## Direção criativa

- Layout editorial com composição assimétrica, escalas fortes e linhas estruturais; evitar templates prontos.
- Hero com tipografia forte e fotografia realista do lado oposto, sem mascarar legibilidade.
- Alternância de áreas claras minerais com uma seção imersiva de fotografia escura; não fazer a página inteira preta.
- Animações com propósito: entrada inicial contida, revelações por seções, crossfade no estúdio de cenas e microinterações. Sem partículas, paralaxe aleatório, hover borrado, scroll-jacking ou animações por puro efeito.
- Deve funcionar visualmente sem animação; respeitar `prefers-reduced-motion` em todos os caminhos.
- Fotografia deve ter unidade de direção de arte, não um apanhado de stock conflitante.

## Método de execução

Trabalhe nesta mesma tarefa em fases internas, sem pedir aprovação entre cada arquivo quando não houver bloqueio real:

A. Inspecione o repositório e o pacote. Apresente resumidamente as decisões técnicas antes de codificar. Se o repo estiver vazio, inicialize Astro.
B. Implemente estrutura, tokens, fontes, componentes e páginas.
C. Implemente cenas, navegação, briefing local, acessibilidade e fallback.
D. Integre imagens otimizadas e confira os direitos de origem. Não fabricar informações.
E. Rode build, checagem de TypeScript, testes automatizados pertinentes, screenshots temporárias mínimas e revisão desktop/mobile.
F. Corrija bugs reais, remova arquivos temporários, encerre com relatório objetivo.

Quando o visual ainda não estiver convincente, corrija composição, tipografia e imagens ANTES de adicionar mais efeitos técnicos. Se houver incompatibilidade entre briefing e viabilidade, adote a alternativa menos complexa que preserve a intenção e registre a decisão.

## Testes e critérios de aceite

- Responsive em 320, 360, 375, 390, 430, 768, 1024, 1280, 1440 e 1920px; sem overflow horizontal, truncamento de hero ou botões quebrados.
- Testar teclado, menu, Escape, foco, skip link, anchors, botões de cena, slider, validação, resumo, copiar e editar.
- Verificar `prefers-reduced-motion`, interação touch, ausência de JS (conteúdo essencial visível), falhas de imagens e carregamento lento.
- WCAG 2.2 AA como meta, contraste e alvos de toque apropriados; Axe em estados interativos quando disponível.
- Medir performance em laboratório de forma honesta; otimizar hero e JS. Alvos orientativos LCP <=2,5s, INP <=200ms, CLS <=0,1 quando houver dados reais de campo, e reportar medições locais separadamente.
- Preservar semântica de `button`, `form`, `label`, `fieldset`, `nav`, `main` e headings.
- Não usar texto com imagem se texto HTML real pode ser aplicado.
- Sem erros de console e sem dependências duplicadas.

## Repositório e evidências

- Não fazer `git commit`, `git push`, GitHub, deploy ou abrir PR automaticamente. Eu quero controlar os commits em português manualmente.
- Não gerar 100 capturas, vídeos e relatórios. Use temporários fora da raiz/repositório e conserve no máximo evidências essenciais se necessário.
- Não manter builds/caches/frames no Git. Não adicionar rotas alternativas e experimentos descartados ao projeto final.
- Preserve Skills e `AGENTS.md` se já existirem; não sobrescrever instruções do usuário.
- Ao concluir, apresente: alterações relevantes, arquivos criados, dependências, testes realmente rodados e respectivos resultados, limitações, orientações de execução local e sugestões de mensagens de commit. Não declare que testou Safari físico ou dispositivos reais se não testou.

## Regra de conclusão

Só considerar implementado quando o website real estiver navegável localmente, com layout responsivo, imagens carregadas, estúdio de cenas interativo, formulário demonstrativo funcionando e build sem erros. O pacote de pré-produção não substitui essa validação.
