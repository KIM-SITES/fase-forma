# 03 — Motion, UX, interação e responsividade

## 0. Princípio

**Motion tem que comunicar a luz, não demonstrar quantas bibliotecas sabemos usar.** A interação de assinatura é o **Estúdio de cenas**; qualquer animação adicional deve ajudar navegação, hierarquia ou atmosfera. Repetir uma sequência de efeitos em todas as seções diminui impacto.

## 1. Narrativa e ritmos

| Bloco | Entrada | Scroll | Interação | Redução de movimento |
|---|---|---|---|---|
| Header | estático | fixo discreto, fundo quando necessário | âncoras, menu | sem transição |
| Hero | heading/CTA em fade/translateY 12–20px, stagger curto | parallax NÃO é obrigatório | CTA | conteúdo visível sem JS |
| Editorial | fade discreto | sem pin | nenhum | entrada instantânea |
| Serviços | linhas revelam progressivamente (se for fluido) | sem scroll-lock | links internos/focus | estático |
| Estúdio de cenas | cena começa com imagem visível | sem scrubbing forçado | três presets + intensidade | substituição imediata/fade mínimo |
| Automação | revelação da planta editorial | sem scroll-jacking | nenhum dispositivo real | estático |
| Método | passos ganham destaque leve | scroll normal | nenhum | estático |
| Briefing | campos sempre acessíveis | scroll normal | form local, resumo | estados sem movimento |
| Footer | entrada discreta | scroll normal | âncoras | estático |

## 2. Interação de assinatura: Estúdio de cenas

### Contrato funcional

**Estado:** `activeScene: 'acolher' | 'concentrar' | 'desacelerar'`, `intensity: number (20..100)`.

- Se o usuário não interage, a cena padrão é **Acolher**, mas os três estados e descrições devem estar disponíveis semanticamente.
- Três botões (`type=button`) com `aria-pressed` refletindo o estado; não usar tabs sem implementar contrato ARIA completo. Botão ativo possui diferenciação por borda/texto/ícone além da cor.
- Slider nativo `input[type=range]` para intensidade 20–100, incremento 5, label visível e valor acessível. O slider deve alterar luminosidade de forma **plausível**; se a composição não ficar convincente, optar por três fotos de iluminação distintas sem slider em vez de um filtro grosseiro.
- Mudança de cena: imagem pré-carregada quando apropriado, crossfade 350–550ms, sem flash e sem dimension shift. Texto da descrição muda imediatamente, com aria-live polite apenas para descrição curta (não anunciar valor do slider em excesso).
- Com `prefers-reduced-motion: reduce`, substituir sem fade/transforms.
- A foto pode ser uma composição estática em layers, mas as camadas devem representar o **mesmo ambiente e câmera**. Não alternar entre fotos de salas diferentes sob a alegação de transformação da luz.
- Se os três assets coerentes não estiverem disponíveis, apresentar uma demonstração conceitual ilustrada e rotulada. Não inventar efeito de iluminação fotorealista com saturação/brightness aleatórios.
- Uso de CSS `filter` leve para simulação é permitido somente se apresentação não for enganosa; importante não atribuir Kelvin ou lúmens técnicos fictícios às imagens.
- Prefers reduced motion e sem JS: imagem padrão e três descrições visíveis.

### Progressão visual sugerida

- **Acolher:** indireta quente, contraste controlado, cena 75%.
- **Concentrar:** luz funcional mais uniforme, cena 90%.
- **Desacelerar:** iluminação pontual baixa, cena 45%.

Não usar autoplay ou mudança periódica de cena; o visitante controla.

## 3. Especificações de animação

- Hero: `duration 0.7–1.0s`, `stagger 0.08s`, `ease power2.out` ou curva CSS equivalente; a duração não é obrigação, validar percepção.
- Section reveal: `duration <=0.65s`, `translateY <=16px`; interseção de viewport 15–25%. Nenhum conteúdo essencial deve ficar invisível caso a animação falhe.
- Hover/focus: 120–220ms, mudanças sutis em cor/fundo/borda, sem escala exagerada.
- Crossfade cenas: 350–550ms, sem aguardar carregamento para atualizar texto.
- Não usar smooth scroll customizado que capture wheel/touch; `scroll-behavior: smooth` somente se não-reduced-motion, e offset via `scroll-margin-top`.
- Não usar scroll horizontal forçado, pinning longo, menus movimentando conteúdo, animação infinita nem partículas.
- Não incluir áudio.

## 4. Requisitos UX de produção

- Sem menu invisível; usuário encontra Soluções e Briefing em <2 cliques.
- Skip link, navegação via teclado, tab order, foco visível de pelo menos 2px e contraste correto.
- Indicadores de estado não podem depender só do âmbar.
- A experiência deve funcionar em touch sem hover.
- Textos de disclaimer acessíveis em tamanho >=12px e contraste suficiente; não ocultar por decoração.
- Formulário sem e-mail, telefone, nome ou geolocalização; os dados ficam na memória da página, são usados para exibir resumo e não são enviados. Não gravar em localStorage sem propósito; se optar por memória, limpam no reload.
- Validar campos obrigatórios com mensagem contextual e foco no primeiro erro.
- Botão 'Copiar resumo' usa clipboard API apenas em resposta a clique e fallback selecionável; nunca declarar sucesso antes de confirmar a operação.
- Acessibilidade do menu via `aria-expanded`, `aria-controls`, `Escape`, foco e fechamento; evitar scroll da página travado depois que fecha.

## 5. Responsividade

### Breakpoints funcionais orientativos

- >=1280px: editorial de duas colunas, hero grande, imagens amplas, controles do estúdio em painel lateral.
- 769–1279px: composições com menos respiro; evitar cortar palavras do H1.
- 481–768px: hero empilhado, serviços em linhas, imagem e seletores com espaçamento.
- 320–480px: mobile de verdade; menu acessível, controle de cena com botões de 44px, headline quebra intencional, CTA ocupa largura quando necessário.

Os breakpoints devem derivar da composição, não ser adotados cegamente. Testar 320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1920px. Não admitir overflow horizontal.

## 6. Performance e fallback

- Não carregar biblioteca gráfica 3D para simular uma troca de foto.
- Conteúdo do hero entregue como HTML, visível durante a ausência de CSS/JS.
- Imagens com width/height ou aspect-ratio para impedir CLS, srcset/sizes corretos e fetchpriority apenas para imagem LCP quando aplicável.
- Carregar imagens do estúdio quando próximas da viewport; em mobile otimizar proporções.
- Se image fails, fallback com cor, texto e borda, sem área vazia inacessível.
- Animação deve ser opcional, não pré-requisito de navegação.

## 7. Medidas de sucesso observáveis

- O usuário entende o negócio em 5 segundos (teste heurístico com pessoas, não medição inventada).
- Cenários têm estados distintos, navegação teclado e touch.
- A seção interativa demonstra *como pensar luz* e não um controle funcional real.
- A simulação de briefing completa sem pedir dados pessoais e gera resumo consistente.
- Nenhuma das experiências depende de mouse, GPU potente, autoplay, som ou rolagem capturada.
