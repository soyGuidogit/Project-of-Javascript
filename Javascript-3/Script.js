const questions = [
    {
        question: "which is the largest animal in the world?",
        answers: [
            {text:"Shark", correct: false},
            {text:"Blue whale", correct: true},
            {text:"Elephant", correct: false},
            {text:"Ant", correct: false}
        ]
    },
    {
        question: "Which is the fastest land animal in the world?",
        answers: [
            {text: "Cheetah", correct: true},
            {text: "Lion", correct: false},
            {text: "Horse", correct: false},
            {text: "Greyhound", correct: false}
        ]
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        answers: [
            {text: "Venus", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Saturn", correct: false}
        ]
    },
    {
        question: "Who painted the 'Mona Lisa'?",
        answers: [
            {text: "Vincent van Gogh", correct: false},
            {text: "Pablo Picasso", correct: false},
            {text: "Leonardo da Vinci", correct: true},
            {text: "Michelangelo", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            {text: "Atlantic Ocean", correct: false},
            {text: "Indian Ocean", correct: false},
            {text: "Pacific Ocean", correct: true},
            {text: "Arctic Ocean", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button"); // Cambiado a plural para consistencia
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button); // Corregido appendChild
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none"; // Corregido display
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true
    });
    nextButton.style.display = "block"; 
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {  // Cambié el nombre a camelCase por convención
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (nextButton.innerHTML === "Play Again") {
        startQuiz();  // Reinicia el quiz si el botón dice "Play Again"
    } else {
        handleNextButton();  // Avanza a la siguiente pregunta
    }
});

startQuiz();






