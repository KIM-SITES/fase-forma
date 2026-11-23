# 04 — Arquitetura técnica, implementação e garantia de qualidade

## 1. Stack preferencial

**Astro + TypeScript + CSS moderno, site estático com pouca hidratação.** Para site institucional único, Astro permite HTML estático leve e JavaScript isolado nos controles necessários. Referência: https://docs.astro.build/en/concepts/islands/.

- `astro` (versão estável disponível no momento da implementação, instalar via CLI oficial).
- TypeScript `strict: true` se compatível com Astro.
- CSS global de tokens, layout e tipografia; arquivos locais por componente se necessário.
- Vanilla TS para menu/estúdio/form local; sem React por hábito.
- **GSAP somente se a direção aprovada exigir uma timeline complexa**; se CSS/IntersectionObserver resolverem, preferi-los. Nada de GSAP só por ser um projeto de showcase.
- Sem WebGL, OGL, Three.js, shaders ou renderização 3D por padrão.
- Vercel com adapter estático padrão (sem backend).
- Priorizar HTML semântico e progressive enhancement.

## 2. Estrutura sugerida, adaptável pelo Codex

```text
/
├── AGENTS.md
├── README.md
├── package.json
├── astro.config.mjs
├── tsconfig.json
├── docs/
│   ├── pre-producao/        # somente especificações efetivamente úteis
│   └── CREDITOS_ASSETS.md
├── public/
│   ├── favicon.svg
│   ├── imagens/             # avif/webp/jpg com direitos documentados
│   └── fontes/              # se hospedagem própria adotada; manter OFL
├── src/
│   ├── pages/index.astro
│   ├── layouts/BaseLayout.astro
│   ├── components/
│   │   ├── Cabecalho.astro
│   │   ├── Hero.astro
│   │   ├── Introducao.astro
│   │   ├── Servicos.astro
│   │   ├── EstudioCenas.astro
│   │   ├── Automacao.astro
│   │   ├── Metodo.astro
│   │   ├── Briefing.astro
│   │   └── Rodape.astro
│   ├── styles/tokens.css
│   ├── styles/global.css
│   ├── scripts/cenas.ts
│   ├── scripts/briefing.ts
│   ├── scripts/menu.ts
│   └── data/conteudo.ts
└── tests/
    ├── e2e.spec.ts        # se Playwright instalado/necessário
    └── unit...             # só testes valiosos
```

Nomes em português são uma preferência editorial, não obrigação de organizar artificialmente mais arquivos. Evitar concentrar todo o código em `index.astro`. Evitar 40 componentes inúteis.

## 3. Modelo de dados e estados

`Scene = 'acolher' | 'concentrar' | 'desacelerar'`. Definir conteúdo, imagens e descrição no mesmo objeto imutável. Renderizar botões por mapeamento, com labels acessíveis.

`Briefing = { servico, ambiente, prioridade, descricao?, etapa? }`. Validar categorias apenas do conjunto previsto, limitar comprimento de descrição, gerar resumo com strings escapadas / `textContent`, não concatenar HTML com entrada de usuário. Estado somente no cliente.

Não há conta, senha, API, envio de formulário, email, WhatsApp, Analytics ou CMS. Fase / Forma é demo e não pode receber leads. Não usar serviço externo de formulário.

## 4. Critérios de aceitação

### Visual

- H1, CTA e segmento visíveis no primeiro viewport mobile e desktop; sem texto dentro de imagens.
- Imagens e máscaras não cobrem conteúdo ou controles.
- Palavra `FASE / FORMA` consistente em todo conteúdo; não reaproveitar `Vértice Luz`.
- 5–7 seções com ritmo distinto, nenhuma parede de cards repetidos.
- Serviço elétrico claramente representado; não parecer site exclusivamente de decoração.
- A referência PNG serve de inspiração; reprodução pixel a pixel NÃO é exigida quando atrapalhar UX.

### Funcional

- Todas as âncoras navegam para IDs existentes.
- Menu mobile abre, fecha, tecla Escape e foco funcionam.
- Os três presets de iluminação alternam texto, atributo acessível e imagem/camada coerente.
- O slider funciona e exibe intensidade; caso não seja visualmente convincente, remover slider com justificativa sem perder três cenas.
- Form valida, apresenta resumo local, edita, recomeça e copia corretamente (quando permissão disponível).
- `prefers-reduced-motion` respeitado em qualquer caminho.
- Sem informações falsas: nada de preço, avaliações, obras realizadas, CREA, empresas parceiras ou telefones fictícios.

### Testes mínimos

1. `npm run build` — limpo, sem warnings relevantes.
2. `npm run check`/`astro check` ou equivalente — TypeScript limpo.
3. Screens 320/375/390/430/768/1024/1280/1440/1920 — overflow zero.
4. Testes de teclado: skip link, menu, presets, slider, formulário, resumo, copiar.
5. `prefers-reduced-motion: reduce` e JS desabilitado — conteúdo crítico legível.
6. Playwright: Chromium e Firefox; WebKit quando disponível. Teste mobile emulação; depois usuário valida no celular real.
7. Axe em home, menu e resumo, 0 violações detectadas no escopo testado (não equivale a acessibilidade total).
8. Network throttling e fallback de imagem; sem erro crítico de console.
9. Lighthouse mobile e desktop com anotação de condições de ensaio; não reportar nota não medida.
10. Publicação após autorização expressa: verificar Vercel em HTTPS e rotas estáticas, imagens e fontes.

## 5. Orçamento de desempenho

Metas operacionais, não promessas de medição:

- LCP até **2,5 s**, INP até **200 ms**, CLS até **0,1** no percentil 75 das visitas reais quando houver dados de campo. Fonte: https://web.dev/articles/vitals/.
- Projeto demonstrativo sem tráfego real: medir laboratório repetido, declarar limitações.
- Alvo interno: JS inicial abaixo de ~120 KB gzip se viável, sem bibliotecas gráficas supérfluas; considerar custo do GSAP se instalado.
- Imagem LCP mobile preferencialmente <250 KB quando permitir qualidade satisfatória, não degradar fotos sem necessidade; outras imagens lazy, formatos modernos e sizes.
- Contraste de texto WCAG AA 4,5:1 para texto normal, 3:1 para texto grande; foco evidente, elementos >=24px pela WCAG 2.2 AA e preferir 44px em controles móveis.
- Sem animações automáticas prolongadas impossíveis de pausar; reduced motion.

## 6. Segurança e privacidade

- Não enviar os dados do briefing para nenhum endpoint; Clipboard API somente após clique.
- Não armazenar IP, cookies, trackers ou dados pessoais.
- Nunca expor telefone/endereço inventado como contato real.
- Usar imagens sem marcas registradas visíveis ou publicidade implícita de fabricantes.
- Não dar instruções práticas de instalações elétricas que possam ser executadas por leigos.
- Não publicar tokens, chaves ou secrets em .env, pois não há API.

## 7. Higiene de repositório e processo

- Gerar apenas arquivos necessários ao site e documentação de origem das imagens.
- Capturas, vídeos de testes, frames e relatórios **fora do repositório** (`/tmp/fase-forma-testes/` ou similar) e remover após revisão.
- No máximo 10–15 capturas representativas por ciclo de validação, não centenas.
- Evitar múltiplas rotas de estudos, backups com sufixo `-v2-final`, duplicações de imagem.
- Registrar bibliotecas e licenças reais, não dependências aspiracionais.
- Não criar commits, branches remotas, push, deploy ou repositório GitHub automaticamente. O usuário executará/versionará manualmente.
- Ao encerrar: informar arquivos criados, alterações, testes executados com resultados verificáveis e problemas pendentes. Não declarar testes que não rodaram.

## 8. Git — sugestões de commits manuais

1. `chore: inicia estrutura do projeto Fase Forma`
2. `feat: cria hero e sistema visual`
3. `feat: adiciona servicos e narrativa editorial`
4. `feat: implementa estudio de cenas acessivel`
5. `feat: adiciona automacao e metodo`
6. `feat: cria briefing demonstrativo local`
7. `test: valida responsividade e acessibilidade`
8. `refactor: otimiza imagens e prepara publicacao`

São sugestões, não comandos automáticos. O usuário pode escolher menos/mais conforme alterações realmente feitas.
