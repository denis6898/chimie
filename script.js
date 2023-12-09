let scoreAlcani = 0;
let scoreAlchene = 0;
let scoreAlchine = 0;
let currentQuestion = 0;
let currentGame = '';
let currentQuestions = [];

const scoreContainer = document.getElementById('score-container');
const content = document.getElementById('content');
const buttonsContainer = document.querySelector('.buttons');
const infoButtonsContainer = document.getElementById('infoButtons');
const gamesButtonsContainer = document.getElementById('gamesButtons');

const questionsAlcani = [
    { title: 'Alcani', question: 'Ce este un alcan?', answers: ['A. Hidrocarbură saturată', 'B. Hidrocarbură nesaturată', 'C. Halogen', 'D. Metal alcalin'], correctAnswer: 'A' },
    { title: 'Alcani', question: 'Care este formula moleculară a metanului?', answers: ['A. CH3', 'B. C2H6', 'C. CH4', 'D. C2H4'], correctAnswer: 'C' },
    { title: 'Alcani', question: 'Ce este un izomer de catenă?', answers: ['A. Molecule cu aceeași formulă moleculară, dar aranjate diferit', 'B. Molecule cu structură similară', 'C. Molecule cu același număr de atomi de carbon', 'D. Molecule cu aceeași formulă moleculară și aceeași structură'], correctAnswer: 'A' },
    { title: 'Alcani', question: 'Care este primul alcan în seria alcanilor?', answers: ['A. Metan', 'B. Etan', 'C. Propan', 'D. Butan'], correctAnswer: 'A' },
    { title: 'Alcani', question: 'Care este formula structurală a butanului?', answers: ['A. CH4', 'B. CH3-CH3', 'C. CH3-CH2-CH3', 'D. CH3-CH2-CH2-CH3'], correctAnswer: 'D' },
];

const questionsAlchene = [
    { title: 'Alchene', question: 'Care este structura generală a unei alchene?', answers: ['A. CnH2n+2', 'B. CnH2n', 'C. CnH2n-2', 'D. CnHn'], correctAnswer: 'B' },
    { title: 'Alchene', question: 'Ce este adiția în lanț deschis?', answers: ['A. Reacție în care se adaugă o moleculă de apă', 'B. Reacție în care se adaugă două molecule identice', 'C. Reacție în care se adaugă două molecule diferite', 'D. Reacție în care se adaugă la legătura dublă'], correctAnswer: 'D' },
    { title: 'Alchene', question: 'Care este cea mai simplă alchenă?', answers: ['A. Etena', 'B. Propena', 'C. Butena', 'D. Metina'], correctAnswer: 'A' },
    { title: 'Alchene', question: 'Ce se obține prin hidratarea etenei?', answers: ['A. Etanol', 'B. Etenol', 'C. Etilen', 'D. Eter'], correctAnswer: 'A' },
    { title: 'Alchene', question: 'Care este formula structurală a propilenei?', answers: ['A. CH3-CH3', 'B. CH3-CH2-CH3', 'C. CH2=CH2', 'D. CH3-CH2-CH2-CH3'], correctAnswer: 'C' },
];

const questionsAlchine = [
    { title: 'Alchine', question: 'Care este cea mai simplă alchină?', answers: ['A. Etina', 'B. Propina', 'C. Butina', 'D. Metina'], correctAnswer: 'A' },
    { title: 'Alchine', question: 'Ce caracterizează legăturile triple din alchine?', answers: ['A. Două legături sigma și o legătură pi', 'B. O legătură sigma și două legături pi', 'C. Trei legături sigma', 'D. Trei legături pi'], correctAnswer: 'B' },
    { title: 'Alchine', question: 'Care este formula structurală a butadienei?', answers: ['A. CH2=CH2', 'B. CH3-CH3', 'C. CH2=CH-CH=CH2', 'D. CH3-CH2-CH2-CH3'], correctAnswer: 'C' },
    { title: 'Alchine', question: 'Ce se obține prin hidratarea acetilenei?', answers: ['A. Etanol', 'B. Etenol', 'C. Etilen', 'D. Eter'], correctAnswer: 'A' },
    { title: 'Alchine', question: 'Care este cea mai simplă diină?', answers: ['A. Butadiena', 'B. Propadiena', 'C. Etina', 'D. Metina'], correctAnswer: 'B' },
];

function startGame(gameType) {
    currentGame = gameType;
    currentQuestion = 0;
    scoreAlcani = 0;
    scoreAlchene = 0;
    scoreAlchine = 0;

    if (gameType === 'alcani') {
        currentQuestions = [...questionsAlcani];
    } else if (gameType === 'alchene') {
        currentQuestions = [...questionsAlchene];
    } else if (gameType === 'alchine') {
        currentQuestions = [...questionsAlchine];
    }

    displayQuestion();
    updateScore();
    scoreContainer.style.display = 'none';
}

function showInfoButtons() {
    buttonsContainer.style.display = 'none';
    infoButtonsContainer.style.display = 'block';
    gamesButtonsContainer.style.display = 'none'; // Ascunde butoanele de jocuri
    content.innerHTML = '<h2>Bine ați venit!</h2><p>Alegeți un tip de informații.</p>';
}

function showInfo(infoType) {
    if (infoType === 'alcani') {
        content.innerHTML = '<h2>Informații Alcani</h2><p>Adăugați informații despre alcani aici.</p>';
    } else if (infoType === 'alchene') {
        content.innerHTML = '<h2>Informații Alchene</h2><p>Adăugați informații despre alchene aici.</p>';
    } else if (infoType === 'alchine') {
        content.innerHTML = '<h2>Informații Alchine</h2><p>Adăugați informații despre alchine aici.</p>';
    }
}

function showGamesButtons() {
    buttonsContainer.style.display = 'none';
    infoButtonsContainer.style.display = 'none'; // Ascunde butoanele de informatii
    gamesButtonsContainer.style.display = 'block';
    content.innerHTML = '<h2>Bine ați venit!</h2><p>Alegeți un joc.</p>';
}

function resetPage() {
    buttonsContainer.style.display = 'block';
    infoButtonsContainer.style.display = 'none';
    document.getElementById('gamesButtons').style.display = 'none'; // Adăugat pentru ascunderea butoanelor de jocuri
    currentGame = '';
    content.innerHTML = '<h2>Bine ați venit!</h2><p>Alegeți un joc sau accesați informațiile.</p>';
}

function displayQuestion() {
    const question = currentQuestions[currentQuestion];

    if (!question) {
        // Dacă nu mai există întrebări, afișează mesajul și scorul
        content.innerHTML = `
            <h2>Joc terminat!</h2>
            <p>Mulțumim pentru participare!</p>
            <p>Scorul tău:</p>
            <p>Scor Alcani: ${scoreAlcani}</p>
            <p>Scor Alchene: ${scoreAlchene}</p>
            <p>Scor Alchine: ${scoreAlchine}</p>
        `;
        return;
    }

    // Afișează întrebarea curentă
    content.innerHTML = `
        <h2>${question.title}</h2>
        <div class="question-container">
            <div class="question">${question.question}</div>
            <div class="answers-container">
                ${question.answers.map((answer, index) => `<button class="answer-button" onclick="checkAnswer('${question.correctAnswer}', ${index})">${answer}</button>`).join('')}
            </div>
            <div id="feedback"></div>
        </div>
    `;
}


function checkAnswer(correctAnswer, userAnswerIndex) {
    const userAnswer = userAnswerIndex + 65;
    const feedbackContainer = document.getElementById('feedback');
    const correctSound = new Audio('sunete/corect.wav');
    const incorrectSound = new Audio('sunete/gresit.wav');

    const answerButtons = content.getElementsByClassName('answer-button');
    
    if (userAnswer === correctAnswer.charCodeAt()) {
        feedbackContainer.innerHTML = `<div class="correct-answer">Corect! Ai câștigat un punct.</div>`;
        answerButtons[userAnswerIndex].classList.add('correct-answer-button');
        correctSound.play();
        if (currentGame === 'alcani') {
            scoreAlcani++;
        } else if (currentGame === 'alchene') {
            scoreAlchene++;
        } else if (currentGame === 'alchine') {
            scoreAlchine++;
        }
    } else {
        feedbackContainer.innerHTML = `<div class="incorrect-answer">Ai răspuns greșit! ${String.fromCharCode(correctAnswer)}</div>`;
        answerButtons[userAnswerIndex].classList.add('incorrect-answer-button');
        answerButtons[correctAnswer.charCodeAt() - 65].classList.add('correct-answer-button');
        incorrectSound.play();
    }

    currentQuestion++;
    setTimeout(() => {
        if (currentQuestion < currentQuestions.length) {
            displayQuestion();
            feedbackContainer.innerHTML = '';
            resetButtonColors();
            updateScore();
        } else {
            displayScore();
        }
    }, 1500);
}



function resetButtonColors() {
    const answerButtons = document.getElementsByClassName('answer-button');
    for (const button of answerButtons) {
        button.classList.remove('correct-answer', 'incorrect-answer');
    }
}

function displayScore() {
    updateScore();
}

function goHome() {
    resetPage();
    content.innerHTML = '<h2>Bine ați venit!</h2><p>Alegeți un joc sau accesați informațiile.</p>';
}

function showAlcaniInfo() {
    showInfo('alcani');
}

function showAlcheneInfo() {
    showInfo('alchene');
}

function showAlchineInfo() {
    showInfo('alchine');
}

function showGames() {
    showGamesButtons();
}