'use strict';
//game of guessing number

//the logic
// 1-first enter a number to input field
// 2-decrease the tries if the user failed to guess the number
// 3-descrease the high score
// 4-show message indicating that the number entred is low or high
// 5-change background if the user guessed the number successfully and store the high score and display a message indicating sucess

let again = document.querySelector(".again"),
	secretNumber = document.querySelector(".number"),
	guessNumber = document.querySelector(".guess"),
	check = document.querySelector(".check"),
	message = document.querySelector(".message"),
	score = document.querySelector(".score"),
	result = document.querySelector(".final-msg"),
	body = document.querySelector("body"),
	highscore = document.querySelector(".highscore");

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = score.textContent;

function checkNumber()
{
	let inputValue = guessNumber.value;

	if (scoreValue <= 0)
	{
		score.textContent = 0;
		result.textContent = "Game Over, Please Try Again !!";
		body.style.background = "red"
		message.textContent = "You Looose"
		guessNumber.disabled = true;
		return ;
	}
	if (inputValue == 0)
		message.textContent = "Please Enter a valid number"
	else if (inputValue != randomNumber)
	{
		message.textContent = inputValue < randomNumber ? "Number is Lower" : "Number is Higher";
		scoreValue--;
	}
	if (inputValue == randomNumber)
	{
		result.textContent = "You Win, Congratulations !!";
		message.textContent = "You Win !!";
		secretNumber.textContent = randomNumber;
		body.style.background = "green";
		guessNumber.disabled = true;
		
		if (parseInt(highscore.textContent) < scoreValue)
			highscore.textContent = scoreValue;
		return ;
	}
	if (scoreValue > 0)
		score.textContent = scoreValue;
}

function resetTheGame()
{
	guessNumber.value = 0;
	randomNumber = Math.trunc(Math.random() * 20) + 1;
	body.style.background = "#222";
	message.textContent = "Start guessing ...";
	scoreValue = 20;
	score.textContent = scoreValue;
	secretNumber.textContent = "?";
	result.textContent = "Guess My Number!";
	guessNumber.disabled = false;
}

again.addEventListener('click', resetTheGame);
check.addEventListener('click', checkNumber);




