const questions = [
  {
    id: 1,
    question: "Para que serve um seguro?",
    answers: [
      { text: "Proteger contra riscos financeiros", correct: true },
      { text: "Ganhar dinheiro rápido", correct: false },
      { text: "Investir em ações", correct: false },
      { text: "Comprar bens de luxo", correct: false },
    ],
  },
  {
    id: 2,
    question: "O que é uma Apólice de seguro?",
    answers: [
      { text: "Um contrato entre o segurado e a seguradora que detalha os termos e condições do seguro", correct: true },
      { text: "Um documento de identidade", correct: false },
      { text: "Uma forma de pagamento de prêmio", correct: false },
      { text: "Uma declaração de sinistro", correct: false },
    ],
  },
  {
    id: 3,
    question: "O que é um prémio de seguro?",
    answers: [
      { text: "O custo do seguro", correct: true },
      { text: "O prêmio em dinheiro que você ganha", correct: false },
      { text: "Um benefício de saúde", correct: false },
      { text: "Um desconto para novos clientes", correct: false },
    ],
  },
  {
    id: 4,
    question: "O que é um sinistro?",
    answers: [
      { text: "Um evento ou situação que aciona a cobertura do seguro", correct: true },
      { text: "Uma pessoa que trabalha para uma seguradora", correct: false },
      { text: "Um desconto para clientes fiéis", correct: false },
      { text: "Uma regra que os segurados devem seguir", correct: false },
    ],
  },
  {
    id: 5,
    question: "Em que ano foi fundada a NOSSA?",
    answers: [
      { text: "2002", correct: false },
      { text: "2004", correct: true },
      { text: "2005", correct: false },
    ],
  },
  {
    id: 6,
    question: "Em que províncias se encontra a NOSSA?",
    answers: [
      { text: "Todas", correct: true },
      { text: "Em 10", correct: false },
      { text: "Em 16", correct: false },
    ],
  },
  {
    id: 7,
    question: "Onde posso subscrever um seguro da NOSSA?",
    answers: [
      { text: "Na App", correct: false },
      { text: "Só em Agências", correct: false },
      { text: "Só em parceiros", correct: false },
      { text: "No Contact Center", correct: false },
      { text: "Em todos os pontos acima", correct: true },
    ],
  },
  {
    id: 8,
    question: "Como posso aderir a um seguro de Saúde da NOSSA?",
    answers: [
      { text: "Na App", correct: false },
      { text: "Só em Agências", correct: false },
      { text: "No Contact Center", correct: false },
      { text: "Em todos os pontos acima", correct: true },
    ],
  },
  {
    id: 9,
    question: "Quantos clientes tem a NOSSA?",
    answers: [
      { text: "90 000", correct: false },
      { text: "120 000", correct: false },
      { text: "170 000", correct: true },
    ],
  },
  {
    id: 10,
    question: "Qual a missão da NOSSA?",
    answers: [
      { text: "Promove a inclusão", correct: false },
      { text: "Promove a inovação e a qualidade dos serviços", correct: true },
      { text: "Contribui para o desenvolvimento do mercado", correct: false },
    ],
  },
];

// Função para randomizar um array usando o algoritmo de Fisher-Yates
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Randomizar as perguntas
const shuffledQuestions = shuffleArray([...questions]);

// Randomizar as respostas de cada pergunta
shuffledQuestions.forEach(question => {
  question.answers = shuffleArray([...question.answers]);
});

console.log(shuffledQuestions);

export { shuffledQuestions };