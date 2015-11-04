


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


alert("You got " + numberCorrect + " correct!");








