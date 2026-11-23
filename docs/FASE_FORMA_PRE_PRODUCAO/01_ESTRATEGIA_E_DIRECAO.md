# 01 — Estratégia, identidade e direção de arte

## 1. Contexto e posicionamento

**Marca fictícia:** FASE / FORMA  
**Categoria:** instalações elétricas, iluminação arquitetônica, automação residencial e manutenção.  
**Promessa de comunicação (não garantia técnica):** a infraestrutura elétrica bem planejada permite espaços confortáveis, funcionais e expressivos.

### Problema do cliente

Durante uma reforma, clientes costumam tratar elétrica, luminárias e automação como decisões separadas. O site deve mostrar que essas disciplinas se complementam, mas manter linguagem prática: clareza de serviços, planejamento e contato fácil.

### Proposta de valor

**'Infraestrutura, luz e controle pensados como uma solução.'** A FASE / FORMA une a dimensão técnica à experiência cotidiana dos ambientes.

### Público

- Proprietário residencial em reforma ou modernização: quer saber se há atendimento ao seu tipo de demanda, o que será avaliado e como começar.
- Pequeno comerciante/escritório: quer instalações organizadas, iluminação funcional e previsibilidade de escopo.
- Arquiteto ou designer: procura interlocução técnica e integração da iluminação à linguagem arquitetônica.

### Posicionamento a evitar

- Não se apresentar como escritório de arquitetura sem profissionais comprovadamente habilitados.
- Não assumir escopo industrial, emergência 24h, alta tensão, grandes obras ou integração corporativa.
- Não transformar serviços elétricos em mero pretexto para um site de decoração.

## 2. Plataforma criativa

**Ideia-mãe:** O invisível sustenta. A luz transforma.

A comunicação cruza duas linguagens visuais:

1. **O invisível:** linhas finas, esquemas de alinhamento, repetições precisas, conteúdo técnico e informações concretas.
2. **O visível:** fotografia de interiores, fachos luminosos, mudanças de ambiente e materiais com relevo.

**Assinatura secundária:** A técnica que acende o espaço.

**Tom de voz:** frases curtas, substantivas, confiáveis, sem clichês de 'revolucionar', 'transformar sonhos', 'experiência premium' ou superlativos vazios. Português brasileiro natural.

## 3. Marca gráfica

Wordmark: `FASE / FORMA` em caixa alta com tracking moderado. A barra diagonal `/` deve funcionar como elemento recorrente: feixe/luz/interseção entre infraestrutura e estética.

- Assinatura completa: `FASE / FORMA`.
- Nome em texto corrido: `Fase / Forma`.
- Descriptor pequeno: `ELÉTRICA · ILUMINAÇÃO · AUTOMAÇÃO`.
- Ícone/favicon: duas linhas perpendiculares com um corte oblíquo âmbar, preferencialmente em SVG próprio. NÃO utilizar raio ou lâmpada clichê.
- Logo sempre legível em claro e escuro; a barra diagonal pode receber a cor âmbar.

## 4. Sistema visual

### Cor

| Token | Valor | Uso |
|---|---|---|
| `paper` | `#F6F3EE` | fundo majoritário / leitura |
| `ink` | `#101114` | títulos e áreas escuras |
| `blueprint` | `#213247` | CTA escuro, detalhes técnicos |
| `stone` | `#D9D6D1` | linhas, separadores e superfícies |
| `amber` | `#F2B544` | luz, marca, seleção, CTA com texto escuro |
| `light` | `#FFFDF8` | áreas claras e texto sobre fundo escuro |
| `muted` | `#575C63` | texto secundário sobre `paper` |

**Atenção acessibilidade:** âmbar sobre marfim tem contraste aproximado **1,65:1** e NUNCA deve servir como texto pequeno. Títulos/texto principal em ink ou blueprint. Ink sobre amber apresenta ~10,3:1. Os valores são cálculos de projeto, verificar no produto.

### Tipografia

- Display: **Sora** 600–700, títulos entre `clamp(3.5rem, 7.2vw, 8.25rem)` desktop (ajustar a quebra e o contexto), mobile `clamp(2.6rem, 11vw, 4.4rem)`.
- Corpo: **Instrument Sans** 400–600, base 16–18px / line-height 1.5–1.7.
- Etiquetas: Instrument Sans 600, 10–12px, letter-spacing 0.12–0.18em, uppercase pontual.
- Não introduzir terceira família por decoração.
- Evitar linhas de título com muitas palavras; máximo de 8–10 palavras por frase de destaque.

### Composição

- Grade desktop 12 colunas, máximo 1440px, gutters `clamp(20px, 4vw, 76px)`; respiro horizontal generoso.
- Tablet: grid adaptativo de 8 colunas; mobile: uma coluna com exceções claras.
- Preferir linhas horizontais e assimetria moderada a cards em grade 3x3.
- Grandes blocos fotográficos com bordas retas ou raio discreto (0–12px); sem cards borbulhantes, sombras genéricas, glassmorphism.
- Ritmo: paper → imagem escura → paper → experiência de cenas escura → paper → final escuro.
- Variação de escalas: macro tipografia no hero; detalhes pequenos e precisos em serviços; fotografia imersiva no estúdio de cenas; linguagem utilitária clara no briefing.

### Fotografia

- Materiais: madeira natural, reboco mineral, pedra, vidro, metal fosco, tons quentes.
- Luz: linear difusa, rasante, indireta; evitar neon, exagero de amarelo, efeitos artificiais.
- Enquadramento: espaço negativo intencional à esquerda ou à direita; profundidade arquitetônica e percepção da fonte luminosa.
- Serviço elétrico: uma fotografia editorial detalhada de quadro/instalação organizada e segura, sem sugerir atuação irregular ou uso incorreto de equipamentos.
- Nada de funcionários posando com alicate, raios, lâmpadas isoladas, thumbnails de IA com texto ilegível.

## 5. Wireframe descritivo: desktop

**Header** (64–80px, papel claro): wordmark à esquerda; navegação `[Soluções] [Ambientes] [Automação] [Método]`; CTA discreto `[Montar briefing]`; ancoragem com offset. Header acompanha o scroll sem esconder excessivamente conteúdo.

**Hero** (100–115svh no desktop, conteúdo legível sem depender da animação): foto de arquitetura ocupa de 55 a 65% da largura, zona esquerda em paper com transição por gradiente editorial suave. Eyebrow acima, H1 em 3 linhas `O invisível / sustenta. / A luz transforma.`. CTA primário 'Explorar soluções' e texto secundário 'Ver o estúdio de cenas'. Metadado '01 / 06' somente se não distrair.

**Abertura editorial**: uma frase curta em fonte grande e linha horizontal que atravessa a página: `Um projeto de luz começa com decisões que ninguém vê.` Dar a entender vínculo entre técnica e atmosfera; sem inventar avaliações.

**Serviços**: à esquerda título e descrição; à direita quatro linhas numeradas, ícone abstrato mínimo desenhado em CSS/SVG e hover/focus com indicador; última linha inclui manutenção. Nada de quatro cards idênticos. Uma pequena imagem de detalhe técnico, não transformada em portfólio real.

**Experiência / Estúdio de cenas**: seção principal com grande imagem do MESMO ambiente em três condições de luz (se assets permitirem), título `Um espaço. Três maneiras de sentir.`; controle com botões `Acolher`, `Concentrar`, `Desacelerar`; slider de intensidade se a troca visual permanecer convincente. Legenda transparente `Simulação visual de atmosferas. Os resultados dependem do ambiente e do projeto.`

**Automação**: seção de contraste com duas colunas: título à esquerda e pequeno painel de três cenários ilustrativos à direita. Evitar dashboard de SaaS. Botões reagem localmente e atualizam descrição; sem dizer que conectam dispositivos reais.

**Método**: quatro etapas conectadas por linha horizontal no desktop, empilhadas no mobile. Cada etapa tem nome, verbo e detalhe; sem promessa de prazo nem garantia.

**Briefing / orçamento**: grande superfície paper ou stone, título claro e formulário de seleção por etapas curtas. CTA `Gerar resumo`. Após envio: resumo legível, botão `Copiar briefing` e botão `Editar`. Não precisa orçamento numérico; incluir aviso `Este formulário é demonstrativo e não envia informações.`

**Encerramento**: fundo profundo com uma faixa de luz âmbar, título `A luz certa começa com uma boa conversa.`; CTA de retorno ao briefing e footer com navegação e aviso de portfólio fictício.

## 6. Wireframe descritivo: mobile

- Header compacto com wordmark (reduzir tamanho, não cortar) e menu botão rotulado 'Abrir menu'; menu como painel acessível, fecha via botão, Escape e escolha de link.
- Hero: H1 no primeiro viewport, imagem não deve impedir o título. Layout visual pode empilhar a imagem abaixo do texto; nunca esconder H1 atrás de fotografia. CTA imediatamente acessível.
- Serviços: quatro linhas verticais, labels de 2 linhas no máximo, imagens/captions separadas; nenhuma coluna apertada.
- Estúdio de cenas: manter a mesma câmera, imagem `aspect-ratio` 4:5 ou 3:4, controles abaixo (não por cima da área de interesse). Botões com alvos >=44px; slider se legível.
- Automação: alternador horizontal ou botões empilhados, painel simples.
- Método: sequência vertical com separadores, não carrossel obrigatório.
- Formulário: campos de largura total, teclado correto, estados de foco e erros.
- Rodapé: não repetir duas colunas minúsculas; priorizar clareza.

## 7. Critérios criativos de aprovação

Aprovado quando: (a) identifica segmento em <5 segundos; (b) composição possui identidade sem depender de animação; (c) o estúdio de cenas acrescenta entendimento real; (d) interação e texto são acessíveis e funcionais; (e) desktop e mobile parecem uma mesma marca; (f) há caminho óbvio para pedir briefing.

Reprovar quando: (a) o site parece catálogo de móveis sem menção clara a serviços elétricos; (b) imagem ocupa tudo e torna CTA ilegível; (c) só funciona com scroll/hover; (d) parece repetição da Lâmina/Entrear; (e) 3D e animação não agregam compreensão.
