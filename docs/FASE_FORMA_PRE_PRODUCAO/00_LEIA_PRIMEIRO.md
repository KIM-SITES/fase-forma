# FASE / FORMA — pacote de pré-produção

**Versão:** 1.0 — 22/11/2026  
**Status:** direção criativa e especificação editorial prontas para implementação. O site final AINDA NÃO foi escrito nem validado em navegadores reais.  
**Natureza:** empresa **fictícia**, exclusivamente demonstrativa para o portfólio do desenvolvedor.

## Por que FASE / FORMA?

A proposta anterior, **Vértice Luz**, foi descartada por alta proximidade com negócios reais do mesmo setor, como Vértice Iluminação e Vértice Energia. O nome de trabalho passa a ser **FASE / FORMA**: fase remete à infraestrutura elétrica; forma, ao ambiente e à percepção estética. Busca exploratória em mecanismos públicos não identificou correspondência exata óbvia de 'FASE / FORMA' em instalações elétricas, mas **isso NÃO prova disponibilidade de marca ou domínio**. Antes de um uso comercial efetivo, consultar INPI, Junta Comercial e domínio. Para demo fictícia o projeto pode ser apresentado como conceito sem afirmar exclusividade da marca.

## Decisões fechadas

- Setor: instalações e modernização elétrica, iluminação arquitetônica, automação residencial leve e manutenção programada.
- Posição: pequena empresa/estúdio técnico de perfil premium acessível, não luxo aspiracional inatingível.
- Público: proprietários em reforma, clientes residenciais, pequenos escritórios/comércios, parceiros arquitetos.
- Ideia central: **'O invisível sustenta. A luz transforma.'**
- Assinatura secundária: **'A técnica que acende o espaço.'**
- Personalidade: precisão, humanidade, clareza e atmosfera.
- Direção visual: **editorial clara/mineral (B) com momentos fotográficos escuros e luminosos (A)**. Não transformar em mais uma landing page preta.
- Cor predominante: marfim. Azul de grafite para texto, âmbar apenas como luz/acento.
- Fonte: Sora para títulos, Instrument Sans para interface e corpo; fallback sans-serif.
- Site final: single-page institucional responsivo, com menu de âncoras, experiência de cenas de iluminação, apresentação de serviços, processo, briefing local de orçamento e rodapé honesto.
- Stack inicial recomendada: Astro + TypeScript + CSS moderno, GSAP somente nas animações que exigirem coordenação. JavaScript nativo para interações simples. Não usar React, Three.js, OGL ou Lenis sem justificativa demonstrada.
- CTA final: montar briefing local, exibir resumo e opcionalmente copiar para área de transferência. **Sem envio real, WhatsApp fictício, preços inventados ou banco de dados.**

## Leia nesta ordem

1. `01_ESTRATEGIA_E_DIRECAO.md` — negócio, tom, direção de arte e layouts.
2. `02_CONTEUDO_FINAL.md` — copy pronta de toda a página, estados de interface e formulário.
3. `03_MOTION_UX.md` — especificação funcional das interações, responsividade, acessibilidade.
4. `04_ARQUITETURA_E_QUALIDADE.md` — estrutura técnica, arquitetura de arquivos e testes.
5. `05_ATIVOS_E_REFERENCIAS.md` — imagens, licenças, fontes e notas de verificação.
6. `design-tokens.json` — tokens iniciais de design e motion.
7. `prototipo-interativo.html` — laboratório visual navegável, NÃO código de produção.
8. `referencias/mockup-direcao-criativa.png` — uma referência de direção artística desktop/mobile, NÃO screenshot de site pronto.
9. `06_PROMPT_CODEX.md` — instrução operacional final para colar no Codex.

## O que é real e o que é demonstrativo

- O site, a empresa, o catálogo e o orçamento são **fictícios**.
- Fotos de ambientes são **editoriais/ilustrativas**, nunca 'obras realizadas'.
- Não afirmar anos de experiência, equipe, CNPJ, ART, CREA, certificação, avaliações, endereço, garantias ou marcas parceiras sem prova.
- Não oferecer recomendações de segurança elétrica ou instruções de serviço perigoso. O site só descreve categorias de serviço.
- O protótipo contém carregamento de imagens externas de demonstração; na implementação final, substituí-las por arquivos autorizados, otimizados e documentados.

## Como transferir ao Codex

Entregue a pasta toda como `docs/pre-producao/` dentro do NOVO repositório, ou disponibilize os arquivos para o agente na pasta de trabalho. Abra `06_PROMPT_CODEX.md` e use seu conteúdo como comando. **Não** pedir ao Codex para decidir novamente nome/paleta/estrutura sem motivo concreto.

**Limite da aprovação:** este material é uma especificação autoral. Sua qualidade técnica foi revisada textualmente. O protótipo e a produção ainda exigem auditoria real em desktop, telefone, Safari e leitores de tela. Não interpretar o pacote como site já construído.
