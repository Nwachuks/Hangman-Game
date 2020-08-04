const wordElement = document.getElementById('word');
const wrongLettersElement = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

// const correctLetters = ['w', 'i', 'z', 'a', 'r', 'd'];
const correctLetters = [];
const wrongLetters = [];

// Show hidden word
function displayWord() {
    wordElement.innerHTML = `${selectedWord.split('').map(letter => 
        `<span class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </span>`).join('')}`;

    const innerWord = wordElement.innerText.replace(/\n/g, '');
    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!';
        popup.style.display = 'flex';
    }
}

displayWord();
