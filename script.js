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
    `;
}

// Функция выбора варианта
function selectOption(index) {
    answers[currentQuestion] = index;
    alert(index === questions[currentQuestion].correct ? 'Правильно!' : 'Неправильно!');
}


