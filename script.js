// Найти кнопку и контейнер
const startBtn = document.getElementById('start-btn');
const quizContent = document.querySelector('.quiz-content');


// Массив с вопросами
const questions = [
    {
        type: 'multiple',
        question: 'Какая планета самая большая в нашей солнечной системе?',
        options: ['Марс', 'Юпитер', 'Сатурн', 'Земля'],
        correct: 1
    },
    {
        type: 'multiple',
        question: 'Что является основным компонентом воздуха?',
        options: ['Кислород', 'Углекислый газ', 'Азот', 'Водород'],
        correct: 2
    },
    {
        type: 'input',
        question: 'Как называется процесс превращения воды в пар?',
        correct: ['испарение', 'парообразование', 'выпаривание']
    },
    {
        type: 'multiple',
        question: 'Кто написал роман "Война и мир"?',
        options: ['Достоевский', 'Пушкин', 'Толстой', 'Гоголь'],
        correct: 2
    },
    {
        type: 'input',
        question: 'Сколько континентов на Земле?',
        correct: ['7', 'семь', 'VII']
    }
];


let currentQuestion = 0;
let answers = {};

// Нажатие на кнопку "Начать"
startBtn.addEventListener('click', () => {
    showQuestion();
});

// Функция показа вопроса
function showQuestion() {
    const q = questions[currentQuestion];

    let html = `
        <div class="question-block">
            <h2>${q.question}</h2>
    `;

    if (q.type === 'multiple') {
        html += `
            <div class="options">
                ${q.options.map((option, index) => `
                    <button class="btn option-btn" onclick="selectOption(${index})">${option}</button>
                `).join('')}
            </div>
        `;
    } else if (q.type === 'input') {
        html += `
            <div class="input-block">
                <input type="text" id="text-answer" class="answer-input" placeholder="Введите ответ">
                <button class="btn submit" onclick="submitTextAnswer()">Подтвердить</button>
            </div>        
        `;
    }

    html += `
        <div id="feedback" class="feedback"></div>
        `;

    html += `
        </div>
        <div class="navigation">
            <button class="btn" onclick="nextQuestion()" id="next-btn" disabled>
                ${currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее'}
            </button>
        </div>
    `;

    quizContent.innerHTML = html;
}

// Сохраним выбор и включим кнопку "Далее":

function selectOption(index) {
    answers[currentQuestion] = index;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const feedback = document.getElementById('feedback');
    const isCorrect = index === questions[currentQuestion].correct;

    feedback.textContent = isCorrect ? '✅ Правильно!' : '❌ Неправильно!';
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');

    document.getElementById('next-btn').disabled = false;
}

//Обработка "Далее":
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

//show results function
function showResults() {
    let score = 0;
    questions.forEach((q, i) => {
        if (answers[i] === q.correct) score ++;
    });

    quizContent.innerHTML = `
        <div class="result">
            <h2>Тест завершён!</h2>
            <p>Вы набрали ${score} из ${questions.length} (${Math.round(score / questions.length * 100)}%)</p>
            <button class="btn" onclick="location.reload()">Пройти снова</button>
        </div>
    `;
}

//submitTextAnswer function to show
function submitTextAnswer() {
    const input = document.getElementById('text-answer');
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswers = questions[currentQuestion].correct.map(ans => ans.toLowerCase());

    answers[currentQuestion] = userAnswer;

    const isCorrect = correctAnswers.includes(userAnswer);
    const feedback = document.getElementById('feedback');

    feedback.textContent = isCorrect ? '✅ Правильно!' : '❌ Неправильно!';
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');

    input.disabled = true;
    document.getElementById('next-btn').disabled = false;
}

