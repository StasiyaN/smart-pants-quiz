// Массив с вопросами
const questions = [
    {
        type: 'multiple',
        question: 'Какая планета самая большая в нашей солнечной системе?',
        options: ['Марс', 'Юпитер', 'Сатурн', 'Земля'],
        correct: 1
    },
    {
        type: 'input',
        question: 'В каком году была основана Москва?',
        correct: '1147',
        acceptableAnswers: ['1147', '1147 год', '1147г']
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
        correct: 'испарение',
        acceptableAnswers: ['испарение', 'парообразование', 'выпаривание']
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
        correct: '7',
        acceptableAnswers: ['7', 'семь', 'VII']
    }
];

// let currentQuestionIndex = 0;
//
//
// const startQuiz = document.getElementById('start');
// const quizContainer = document.querySelector('.quizContainer');
// startQuiz.addEventListener('click', (event) => {
//     startQuiz.style.display = 'none';
//     showQuestions();
//
// });

// function showQuestions() {
//
// }