const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const newGameBtn = document.getElementById('new-game-btn');
const roll = document.getElementById('roll');
const rollBtn = document.getElementById('roll-btn');
const holdBtn = document.getElementById('hold');

roll.style.display = 'none';

// Varables
let currScoreNum = 0;
let active = 1;
let score = [0, 0];
let gameOver = true;

// Switch Player
function switchPlayer() {
	currScoreNum = 0;
	document.getElementById(`curr-score${active}`).textContent = currScoreNum;
	active = active == 1 ? 2 : 1;
	document.getElementById('box1').classList.toggle('active');
	document.getElementById('box2').classList.toggle('active');
}

// Set Roll
rollBtn.addEventListener('click', () => {
	if (gameOver) {
		let randomNum = Math.trunc(Math.random() * 6) + 1;
		roll.style.display = 'block';
		roll.textContent = randomNum;

		if (randomNum != 1) {
			currScoreNum += randomNum;
			document.getElementById(`curr-score${active}`).textContent = currScoreNum;
		} else {
			switchPlayer();
		}
	}
});

// Set Hold
holdBtn.addEventListener('click', () => {
	if (gameOver) {
		score[active - 1] += currScoreNum;
		document.getElementById(`score${active}`).textContent = score[active - 1];
		if (score[active - 1] >= 100) {
			document.getElementById(`box${active}`).classList.add('winner');
			gameOver = false;
		} else {
			switchPlayer();
		}
	}
});

// Set New Game
newGameBtn.addEventListener('click', () => {
	currScoreNum = 0;
	active = 1;
	score = [0, 0];
	gameOver = true;

	roll.style.display = 'none';

	document.getElementById(`curr-score1`).textContent = currScoreNum;
	document.getElementById(`curr-score2`).textContent = currScoreNum;
	document.getElementById(`score1`).textContent = score[active - 1];
	document.getElementById(`score2`).textContent = score[active - 1];
	document.getElementById('box1').classList.add('active');
	document.getElementById('box2').classList.remove('active');
	document.getElementById('box1').classList.remove('winner');
	document.getElementById('box2').classList.remove('winner');
});
