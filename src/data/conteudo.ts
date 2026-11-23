export const servicos = [
  { titulo: 'Instalações elétricas', descricao: 'Organização de pontos, circuitos e infraestrutura para construções, reformas e adequações de espaços.', detalhe: 'Planejamento de necessidades, distribuição e atualização de instalações.' },
  { titulo: 'Iluminação arquitetônica', descricao: 'Soluções de luz para destacar volumes, orientar atividades e criar atmosferas com intenção.', detalhe: 'Luz geral, pontual, indireta e cenários de uso.' },
  { titulo: 'Automação residencial', descricao: 'Controles e rotinas que tornam a iluminação mais prática, adaptável e integrada ao cotidiano.', detalhe: 'Cenas, comandos e programação conforme compatibilidade dos dispositivos.' },
  { titulo: 'Manutenção e modernização', descricao: 'Avaliação de necessidades de atualização, reparos e melhorias no funcionamento dos pontos existentes.', detalhe: 'Escopo a confirmar após avaliação técnica.' },
] as const;

export const cenas = [
  { id: 'acolher', nome: 'Acolher', descricao: 'Luz suave e quente para desacelerar e receber.', imagem: 'acolher', intensidade: 75 },
  { id: 'concentrar', nome: 'Concentrar', descricao: 'Distribuição mais uniforme para tarefas e foco.', imagem: 'concentrar', intensidade: 90 },
  { id: 'desacelerar', nome: 'Desacelerar', descricao: 'Pontos de luz mais contidos para o fim do dia.', imagem: 'desacelerar', intensidade: 45 },
] as const;
export type Cena = typeof cenas[number]['id'];

export const rotinas = [
  { id: 'chegada', nome: 'Chegada', descricao: 'Uma cena de boas-vindas com iluminação equilibrada nas áreas de passagem.' },
  { id: 'leitura', nome: 'Leitura', descricao: 'Luz direcionada para a atividade, sem iluminar tudo da mesma forma.' },
  { id: 'noite', nome: 'Noite', descricao: 'Ambientes com intensidade reduzida e pontos de apoio.' },
] as const;

export const etapas = [
  { nome: 'Entender', texto: 'Ouvir necessidades, usos e limitações do ambiente.' },
  { nome: 'Planejar', texto: 'Definir possibilidades, materiais e o escopo da intervenção.' },
  { nome: 'Executar', texto: 'Organizar a implantação conforme o projeto e as condições verificadas.' },
  { nome: 'Ajustar', texto: 'Conferir funcionamento e adequar a experiência ao uso previsto.' },
] as const;

export const opcoes = {
  servico: ['Instalação elétrica', 'Iluminação', 'Automação', 'Manutenção / modernização', 'Ainda não sei'],
  ambiente: ['Casa', 'Apartamento', 'Escritório', 'Comércio', 'Outro'],
  prioridade: ['Melhorar funcionalidade', 'Criar atmosfera', 'Atualizar infraestrutura', 'Integrar controles'],
  etapa: ['Planejando', 'Em reforma', 'Espaço pronto'],
} as const;
