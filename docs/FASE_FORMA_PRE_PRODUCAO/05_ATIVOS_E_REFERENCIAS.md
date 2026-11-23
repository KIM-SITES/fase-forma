# 05 — Ativos, licenças, referências e pendências reais

## 1. Referência visual própria

`referencias/mockup-direcao-criativa.png`: mockup de conceito gerado especificamente para esta pré-produção. Mostra tipografia, hierarquia, estilo editorial creme/âmbar, iluminação arquitetônica e uma adaptação mobile. **Não é código, não substitui uma página acessível e não constitui fotografia de trabalho realizado.** Não usar como screenshot falsa de site em produção.

## 2. Fotografias de produção

O site precisa de:

1. **Hero:** sala contemporânea com iluminação indireta em madeira/pedra, luz âmbar, foco fotográfico à direita; composição deve permitir sobreposição editorial do título no lado esquerdo apenas se tiver contraste garantido.
2. **Serviços:** um detalhe de quadro elétrico/instalação bem executada, sem marca aparente; fotos não devem retratar obras desta empresa fictícia.
3. **Estúdio de cenas:** o mesmo cômodo/câmera em três estados de iluminação coerentes. Preferível gerar renders próprios para manter consistência. Se não houver três imagens confiáveis, usar uma imagem e uma demonstração ilustrativa explicitamente marcada, sem prometer transformação fotorrealista.
4. **Automação:** close arquitetônico de painel de comando neutro, sem falsificar compatibilidade com marca ou produto específico.

### Origem e licença

- Banco de imagens sugerido: **Unsplash**, licença oficial: https://unsplash.com/license.
- O Unsplash permite uso comercial das imagens gratuitas sob suas condições: https://help.unsplash.com/en/articles/2612315-can-i-use-unsplash-images-for-personal-or-commercial-projects.
- Referências editoriais verificadas (a seleção final deve confirmar imagem, licença e metadados):
  - https://unsplash.com/photos/modern-living-room-with-stylish-furniture-and-ambient-lighting-O085J-xsM70
  - https://unsplash.com/photos/cozy-living-room-with-modern-furniture-and-warm-lighting-FF34Xzvb3oc
  - https://unsplash.com/photos/electrician-testing-electrical-panel-with-multimeter-PkHf7BUWbtk
  - https://unsplash.com/photos/interior-construction-with-exposed-pipes-and-wiring-DTeDlHOcTY4
- O protótipo HTML usa imagens demonstrativas externas com fallback CSS. **Codex deve obter e otimizar ativos de produção, confirmar a origem de cada arquivo e documentar em `docs/CREDITOS_ASSETS.md`.** Não hotlinkar automaticamente imagens de terceiros sem revisar os termos.
- Fotos de terceiros não representam portfólio de obras próprias; manter o texto 'ambiente ilustrativo'.
- Não usar fotos do Behance, sites de arquitetos ou Google Imagens como assets sem licença apropriada; esses sites servem apenas como referências.

## 3. Tipografia e direitos

- Sora: https://github.com/google/fonts/blob/main/ofl/sora/OFL.txt
- Instrument Sans: https://github.com/google/fonts/tree/main/ofl/instrumentsans
- Se hospedar fontes no próprio site, incluir licença OFL e atribuições necessárias, sem distribuir o arquivo de fonte isoladamente ao usuário por este pacote.

## 4. Referências de tecnologia e UX

- Astro Islands: https://docs.astro.build/en/concepts/islands/
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Reduced motion: https://www.w3.org/WAI/WCAG22/Techniques/css/C39
- Core Web Vitals: https://web.dev/articles/vitals/
- Registro de marcas INPI: https://www.gov.br/inpi/pt-br/servicos/marcas/guia-basico/guia-basico

## 5. Due diligence do nome

**Descartei 'Vértice Luz' como nome de trabalho:** já existem empresas no setor como Vértice Iluminação (https://www.verticeiluminacao.com.br/) e Vértice Energia (https://grupoverticeenergia.com.br/). Também há referência a uma pessoa jurídica com nome Vértice Elétrica, Tecnologia e Automação. A coincidência de segmento e termo principal é suficientemente forte para prejudicar originalidade e causar confusão.

**'FASE / FORMA' é apenas nome de trabalho.** Uma busca pública exploratória por correspondência exata não substitui a consulta oficial à base do INPI, domínio ou assessoria jurídica. Para qualquer uso comercial real, repetir a pesquisa de distintividade e classes adequadas.

## 6. O que deliberadamente não temos

- Logotipo vetorial final revisado por designer (apenas direção do símbolo e referências).
- Imagens finais de três cenas idênticas em composição.
- Página em produção, screenshots de testes reais, auditoria em Safari real.
- CNPJ, nome/telefone de responsável, localização da empresa, preço, depoimentos, portfólio de obras.

Esses itens NÃO devem ser inventados para 'completar' o site. O Codex deve resolver os ativos visuais permitidos, codificar e testar; manter a ficção explícita.
