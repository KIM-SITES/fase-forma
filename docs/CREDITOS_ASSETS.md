# Origem e direitos dos ativos

Verificação: 22/11/2026. O site é um conceito de portfólio de empresa fictícia.

## Imagens

Os quatro originais foram criados especificamente nesta tarefa com a ferramenta integrada OpenAI `image_gen`. Nenhum arquivo de banco de imagens, Pinterest, Behance ou site de arquitetura foi incorporado à produção. Os recortes de baixa resolução da pré-produção continuam apenas no pacote documental original.

| Arquivos em `public/imagens/` | Origem | Uso |
| --- | --- | --- |
| `ambiente-{640,1024,1536}.{avif,webp}` | Geração original de interior, PNG 1536 × 1024 | Hero e cena Acolher; o mesmo arquivo é reaproveitado, sem cópia duplicada |
| `cena-concentrar-{768,1536}.{avif,webp}` | Edição de iluminação a partir do original Acolher | Mesmo cômodo, câmera e mobiliário; iluminação mais uniforme |
| `cena-desacelerar-{768,1536}.{avif,webp}` | Edição de iluminação a partir do original Acolher | Mesmo cômodo, câmera e mobiliário; luz contida |
| `infraestrutura-{480,960}.{avif,webp}` | Geração original conceitual, PNG 1536 × 1024 | Quadro de distribuição ilustrativo, sem marcas ou instruções de instalação |
| `social.jpg` | Composição própria do ambiente e da marca com Sharp, 1200 × 630 | Prévia social demonstrativa |

Todos os arquivos finais estão dentro do projeto. Os prompts completos estão em [PROMPTS_IMAGENS.md](PROMPTS_IMAGENS.md). O script `scripts/preparar-imagens.mjs` apenas redimensiona, converte e monta a imagem social; as alterações de iluminação foram feitas pela ferramenta de geração, e não por tratamento arbitrário de três fotografias diferentes.

A composição das três cenas foi comparada visualmente. São imagens geradas por IA, não fotografias de uma construção existente, nem cálculos luminotécnicos. A geração pode introduzir pequenas variações de textura. A interface informa expressamente essa natureza e não atribui Kelvin, lúmens, certificações ou resultados técnicos aos presets. O slider acrescenta uma atenuação visual suave, sem pretensão de simulação física.

**Direitos:** são outputs gerados nesta tarefa, sujeitos aos termos aplicáveis da OpenAI; não foram rotulados como CC0 ou como fotografias licenciadas por um autor humano. Os [Termos de Uso, seção Content](https://openai.com/policies/row-terms-of-use/#content) descrevem a titularidade dos outputs entre usuário e OpenAI, dentro dos limites legais, e a possibilidade de resultados semelhantes. Não se afirma exclusividade ou registro autoral. Para contas empresariais, aplicam-se os respectivos [Termos para empresas](https://openai.com/policies/business-terms/).

A largura original de 1536 pixels atende aos frames finais verificados até viewport de 1920 pixels: o hero ocupa parte da largura, e o conteúdo tem limite de 1540 pixels. Não são ativos 4K, e não se promete cobertura nativa de telas de densidade arbitrária. Há AVIF e fallback WebP, dimensões fixadas e seleção responsiva. A maior versão AVIF do hero tem aproximadamente 123 KB.

## Tipografia

| Família | Distribuição | Autoria | Licença |
| --- | --- | --- | --- |
| Sora Variable | `@fontsource-variable/sora` 5.3.0; subconjunto latin WOFF2 | The Sora Project Authors | [SIL OFL 1.1](../public/licencas/Sora-OFL.txt) |
| Instrument Sans Variable | `@fontsource-variable/instrument-sans` 5.3.0; subconjunto latin WOFF2 | The Instrument Sans Project Authors | [SIL OFL 1.1](../public/licencas/InstrumentSans-OFL.txt) |

Os textos integrais das licenças foram copiados dos pacotes efetivamente instalados e conferidos com as fontes oficiais: [Sora](https://github.com/google/fonts/blob/main/ofl/sora/OFL.txt) e [Instrument Sans](https://github.com/google/fonts/blob/main/ofl/instrumentsans/OFL.txt). As duas fontes são servidas pelo próprio site; não há chamadas ao Google Fonts na navegação.

## Vetores e marca

Wordmark tipográfico, favicon, símbolos de serviços e planta conceitual foram desenhados em HTML, CSS e SVG no projeto. Não utilizam logotipos, bibliotecas de ícones ou marcas de fabricantes. FASE / FORMA permanece nome fictício de trabalho, sem afirmação de registro ou exclusividade.
