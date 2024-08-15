const quizData = [
  {
    question: "Qual sistema é responsável pela circulação do sangue?",
    options: ["Sistema Respiratório", "Sistema Digestório", "Sistema Cardiovascular", "Sistema Nervoso"],
    correct: "Sistema Cardiovascular"
  },
  {
    question: "Qual órgão faz parte do Sistema Respiratório?",
    options: ["Coração", "Pulmões", "Fígado", "Cérebro"],
    correct: "Pulmões"
  },
  // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  document.querySelector('.quiz-start').style.display = 'none';
  document.querySelector('.quiz-question-container').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  document.getElementById('question-text').textContent = currentQuestion.question;

  const quizForm = document.getElementById('quiz-form');
  quizForm.innerHTML = '';

  currentQuestion.options.forEach(option => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'quiz-option';
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    quizForm.appendChild(label);
    quizForm.appendChild(document.createElement('br'));
  });
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="quiz-option"]:checked');

  if (selectedOption) {
    if (selectedOption.value === quizData[currentQuestionIndex].correct) {
      score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResults();
    }
  } else {
    alert("Por favor, selecione uma resposta!");
  }
}

function showResults() {
  const quizContainer = document.querySelector('.quiz-question-container');
  quizContainer.innerHTML = `<h3>Você acertou ${score} de ${quizData.length} perguntas!</h3>`;
}