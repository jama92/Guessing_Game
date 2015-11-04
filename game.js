


var questionOne = prompt("Yes or No: did I grow up in Seattle?");
questionOne = questionOne.toLowerCase();

var numberCorrect = 0;

if (questionOne === "yes" || questionOne === "y") {

	numberCorrect ++;
	alert("Correct!");
}

else {

	alert("Incorrect!");
}

var questionTwo = prompt("Yes or No: did I attend UW");
questionTwo = questionTwo.toLowerCase();

if (questionTwo === "yes" || questionTwo === "y") {

	numberCorrect ++;
	alert("Correct!");
}

else {

	alert("Incorrect!");
}


var questionThree = prompt("Yes or No: is baseball my favorite sport?");
questionThree = questionThree.toLowerCase();

if (questionThree === "no" || questionThree === "n") {

	numberCorrect ++;
	alert("Correct!");
}

else {

	alert("Incorrect!");
}


var questionFour = prompt("Yes or No: is football my favorite sport?");
questionFour = questionFour.toLowerCase();

if (questionFour === "yes" || questionFour === "y") {

	numberCorrect ++;
	alert("Correct!");
}

else {

	alert("Incorrect!");
}

var questionFive = prompt("What is 20 + 3?");

if (questionFive === "23") {

	numberCorrect ++;
	alert("Correct!");
}

else {

	alert("Incorrect!");
}


alert("You got " + numberCorrect + " correct!");








