const quizQuestion = [
  {
    question:
      "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
    a: "1840s",
    b: "1880s",
    c: "1930s",
    d: "1950s",
    correct: "d",
  },
  {
    question:
      "What is part of a database that holds only one type of information?",
    a: "Report",
    b: "Field",
    c: "Record",
    d: "File",
    correct: "b",
  },
  {
    question: "'OS' computer abbreviation usually means ?",
    a: "Order of Significance",
    b: "Open Software",
    c: "Operating System",
    d: "Optical Sensor",
    correct: "a",
  },
  {
    question:
      "In which decade with the first transatlantic radio broadcast occur?",
    a: "1850s",
    b: "1860s",
    c: "1870s",
    d: "1900s",
    correct: "b",
  },
];

let currentQuiz = 0;
let score = 0;

const quizContainer = document.getElementById("quizContainer");
const lottie = document.getElementById("lottie");
const answersElm = document.getElementsByName("answer");
const questionText = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submit_btn = document.getElementById("btn");

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  let currentQuizData = quizQuestion[currentQuiz];
  questionText.innerText = currentQuizData.question;
  lottie.style.display = "none";

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let optionSelected = undefined;

  answersElm.forEach((answerEl) => {
    if (answerEl.checked) {
      optionSelected = answerEl.id;
    }
  });
  return optionSelected;
}

function deselectAnswers() {
  answersElm.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submit_btn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizQuestion[currentQuiz].correct) {
        console.log(`answer ${currentQuiz}`);
      score++;
      window.alert("Good Job, Let's move to next question");
    } else {
      window.alert(
        "Sorry, You have selected the wrong option, Better luck next time"
      );
    }

    currentQuiz++;

    if (currentQuiz < quizQuestion.length) {
      loadQuiz();
    } else {
      quizContainer.innerHTML = `<h2>Your result ${score} / ${quizQuestion.length}</h2><button onclick="location.reload()">Redo</button> `;
      lottie.style.display = "block";
    }
  } else {
    window.alert("You have not select the answer. Kindly select to continue");
  }
});
