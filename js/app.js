'use strict';

var userName;

function qUserName() {
  userName = prompt('What\'s your name?');
  alert('Hi ' + userName + '! Please answer the following 5 questions about me with either a Y or an N.');
}
qUserName();

var correctCount = 0;

function q1() {
  var answerOne = prompt('Am I over 30?').toUpperCase();
  console.log('over 30', answerOne);

  if (answerOne === 'Y') {
    alert('That\'s right! I\'m 32.');
    correctCount++;
  } else if (answerOne === 'N') {
    alert('No, I\'m definitely over 30.');
  } else {
    alert('Please enter either Y or N');
  }
}
q1();

function q2() {
  var answerTwo = prompt('Do I live in Seattle?').toUpperCase();
  console.log('live in Seattle', answerTwo);

  if (answerTwo === 'Y') {
    alert('No, I live in Bothell.');
  } else if (answerTwo === 'N') {
    alert('That\'s correct. I live in Bothell.');
    correctCount++;
  } else {
    alert('Please enter either Y or N');
  }
}
q2();

function q3() {
  var answerThree = prompt('Do I have any cats?').toUpperCase();
  console.log('have cats', answerThree);

  if (answerThree === 'Y') {
    alert('No, I have 2 dogs.');
  } else if (answerThree === 'N') {
    alert('That\'s correct. I only have dogs.');
    correctCount++;
  } else {
    alert('Please enter either Y or N');
  }
}
q3();

function q4() {
  var answerFour = prompt('Was I ever a veterinary technician?').toUpperCase();
  console.log('veterinary technician', answerFour);

  if (answerFour === 'Y') {
    alert('That\'s correct.');
    correctCount++;
  } else if (answerFour === 'N') {
    alert('Wrong, I definitely was a veterinary technician.');
  } else {
    alert('Please enter either Y or N');
  }
}
q4();

function q5() {
  var answerFive = prompt('Have I ever been bit by a cat?').toUpperCase();
  console.log('bit by a cat', answerFive);

  if (answerFive === 'Y') {
    alert('No, I\'ve only been bit by dogs, ferrets, rabbits, and birds.');
  } else if (answerFive === 'N') {
    alert('Correct. I\'ve only been bit by dogs, ferrets, rabbits, and birds');
    correctCount++;
  } else {
    alert('Please enter either Y or N');
  }
}
q5();

function q6() {
  var guessesLeftFor6 = 4;
  var answerSix = prompt('What is my favorite number? You have ' + guessesLeftFor6 + ' guesses.');

  while (guessesLeftFor6 > 0) {
    console.log('favorite number', answerSix);
    if (parseInt(answerSix) === 28) {
      correctCount++;
      alert('You guessed my favorite number! Good job!');
      guessesLeftFor6 = 0;
    } else if (isNaN(parseInt(answerSix))) {
      answerSix = prompt('That didn\'t count because that wasn\'t a number. Try guessing a number.');
    } else if (answerSix > 28 && guessesLeftFor6 > 2) {
      guessesLeftFor6--;
      answerSix = prompt('That\'s too high. You have ' + guessesLeftFor6 + ' guesses left. Please try again.');
    } else if (answerSix < 28 && guessesLeftFor6 > 2) {
      guessesLeftFor6--;
      answerSix = prompt('That\'s too low. You have ' + guessesLeftFor6 + ' guesses left. Please try again.');
    } else if (answerSix > 28 && guessesLeftFor6 > 1) {
      guessesLeftFor6--;
      answerSix = prompt('That\'s too high. You only have ' + guessesLeftFor6 + ' guess left.');
    } else if (answerSix < 28 && guessesLeftFor6 > 1) {
      guessesLeftFor6--;
      answerSix = prompt('That\'s too low. You only have ' + guessesLeftFor6 + ' guess left.');
    } else if (parseInt(answerSix) !== 28 && guessesLeftFor6 === 1) {
      guessesLeftFor6--;
      alert('Sorry, you\'re out of guesses. My favorite number is 28.');
    }
  }
}
q6();

function q7() {
  var guessesLeftFor7 = 6;
  var statesLived = ['California', 'Nevada', 'Kansas', 'Mississippi'];

  var answerSeven = prompt('Can you guess a state I have lived in other than Washington? Don\'t use abbreviations. You have ' + guessesLeftFor7 + ' guesses.');

  while (guessesLeftFor7 > 0) {
    console.log('state lived', answerSeven);
    for (var i = 0; i < statesLived.length; i++) {
      if (answerSeven.toUpperCase() === statesLived[i].toUpperCase()) {
        correctCount++;
        alert('I did used to live in ' + answerSeven + '!');
        guessesLeftFor7 = 0;
      }
    }

    if (guessesLeftFor7 > 1) {
      guessesLeftFor7--;
      answerSeven = prompt('No, I\'ve never lived in ' + answerSeven + ' before. You have ' + guessesLeftFor7 + ' guesses left.');
    } else if (guessesLeftFor7 === 1) {
      guessesLeftFor7--;
      alert('Sorry, you\'re out of guesses.');
    }
  }

  alert('I have lived in ' + statesLived.join(', ') + '.');

  if (correctCount > 4) {
    alert('Wow ' + userName + '! You scored ' + correctCount + ' out of 7! We must be good friends!');
  } else if (correctCount > 2) {
    alert(userName + ', you scored ' + correctCount + ' out of 7. That\'s pretty good.');
  } else {
    alert('You only scored ' + correctCount + ' out of 7. You don\'t know me very well at all, ' + userName + '.');
  }
}
q7();