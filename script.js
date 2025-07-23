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
        type: 'multiple',
        question: 'Кто написал роман "Война и мир"?',
        options: ['Достоевский', 'Пушкин', 'Толстой', 'Гоголь'],
        correct: 2
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
    quizContent.innerHTML = `
        <div class="question-block">
            <h2>${q.question}</h2>
            <div class="options">
                ${q.options.map((option, index) => `
                    <button class="option-btn" onclick="selectOption(${index})">${option}</button>
                `).join('')}
            </div>
        </div>
        <div class="navigation">
          <button class="btn" onclick="nextQuestion()" id="next-btn" disabled>
                ${currentQuestion === questions.length - 1 ? 'Завершить' : 'Далее'}
            </button>
        </div>
    `;
}

// Функция выбора варианта
function selectOption(index) {
    answers[currentQuestion] = index;
    alert(index === questions[currentQuestion].correct ? 'Правильно!' : 'Неправильно!');
}

// Сохраним выбор и включим кнопку "Далее":

function selectOption(index) {
    answers[currentQuestion] = index;

    // Подсветка выбранной кнопки
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true); // отключаем все

    buttons[index].style.backgroundColor = index === questions[currentQuestion].correct ? 'green' : 'red';
    document.getElementById('next-btn').disabled = false;
}

//Обработка "Далее":
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length>) {
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


