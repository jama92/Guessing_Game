
var questions = [

	"Yes or No: did I grow up in Seattle?",
	"Yes or No: did I attend UW",
	"Yes or No: is baseball my favorite sport?",
	"Yes or No: is football my favorite sport?",
	"What is 20 + 3?"

];

var answers = ["yes", "y", "no", "n", "23"];

var numberCorrect = 0;


function askQuestionOne() {

	var questionOne = prompt(questions[0]);
	questionOne = questionOne.toLowerCase();

	var answerOne = document.getElementById('questionOne');

	if (questionOne === answers[0] || questionOne === answers[1]) {

		numberCorrect ++;
		// alert("Correct!");

		answerOne.innerHTML += ' Correct!';
		answerOne.style.color = 'green';

		document.getElementById("image1").src = "http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png";

	}

	else {

		// alert("Incorrect!");

		answerOne.innerHTML += ' Incorrect!';
		answerOne.style.color = 'red';

		document.getElementById("image1").src = "http://www.iconsdb.com/icons/preview/soylent-red/x-mark-xxl.png";

	}

	

}

function askQuestionTwo() {	

	var questionTwo = prompt(questions[1]);
	questionTwo = questionTwo.toLowerCase();

	var answerTwo = document.getElementById('questionTwo');

	if (questionTwo === answers[0] || questionTwo === answers[1]) {

		numberCorrect ++;
		// alert("Correct!");

		answerTwo.innerHTML += ' Correct!';
		answerTwo.style.color = 'green';

		document.getElementById("image2").src = "http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png";


	}

	else {

		// alert("Incorrect!");

		answerTwo.innerHTML += ' Incorrect!';
		answerTwo.style.color = 'red';

		document.getElementById("image2").src = "http://www.iconsdb.com/icons/preview/soylent-red/x-mark-xxl.png";
	}

}

function askQuestionThree() {

	var questionThree = prompt(questions[2]);
	questionThree = questionThree.toLowerCase();

	var answerThree = document.getElementById('questionThree');

	if (questionThree === answers[2] || questionThree === answers[3]) {

		numberCorrect ++;
		// alert("Correct!");

		answerThree.innerHTML += ' Correct!';
		answerThree.style.color = 'green';

		document.getElementById("image3").src = "http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png";

	}

	else {

		// alert("Incorrect!");

		answerThree.innerHTML += ' Incorrect!';
		answerThree.style.color = 'red';

		document.getElementById("image3").src = "http://www.iconsdb.com/icons/preview/soylent-red/x-mark-xxl.png";

	}

}

function askQuestionFour() {

	var questionFour = prompt(questions[3]);
	questionFour = questionFour.toLowerCase();

	var answerFour = document.getElementById('questionFour');

	if (questionFour === answers[0] || questionFour === answers[1]) {

		numberCorrect ++;
		// alert("Correct!");

		answerFour.innerHTML += ' Correct!';
		answerFour.style.color = 'green';

		document.getElementById("image4").src = "http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png";

	}

	else {

		// alert("Incorrect!");

		answerFour.innerHTML += ' Incorrect!';
		answerFour.style.color = 'red';

		document.getElementById("image4").src = "http://www.iconsdb.com/icons/preview/soylent-red/x-mark-xxl.png";

	}

}

function askQuestionFive() {

	var questionFive = prompt(questions[4]);

	var answerFive = document.getElementById('questionFive');

	if (questionFive === answers[4]) {

		numberCorrect ++;
		// alert("Correct!");

		answerFive.innerHTML += ' Correct!';
		answerFive.style.color = 'green';

		document.getElementById("image5").src = "http://www.iconsdb.com/icons/preview/guacamole-green/checkmark-xxl.png";

	}

	else {

		// alert("Incorrect!");

		answerFive.innerHTML += ' Incorrect!';
		answerFive.style.color = 'red';

		document.getElementById("image5").src = "http://www.iconsdb.com/icons/preview/soylent-red/x-mark-xxl.png";

	}

	document.getElementById('numberCorrect').innerHTML = "You got " + numberCorrect + " correct!";

}

askQuestionOne();
askQuestionTwo();
askQuestionThree();
askQuestionFour();
askQuestionFive();










