'use strict';

var userName = prompt('What\'s your name?');

alert('Hi ' + userName + '! Please answer the following questions about me with Y or N');

var answerOne = prompt('Am I over 30?');
console.log('over 30', answerOne);

if (answerOne.toUpperCase() === 'Y') {
  alert('That\'s right! I\'m 32.');
} else if (answerOne.toUpperCase() === 'N') {
  alert('No, I\'m definitely over 30.');
} else {
  alert('Please enter either Y or N');
}

var answerTwo = prompt('Do I live in Seattle?');
console.log('live in Seattle', answerTwo);

if (answerTwo.toUpperCase() === 'Y') {
  alert('No, I live in Bothell.');
} else if (answerTwo.toUpperCase() === 'N') {
  alert('That\'s correct. I live in Bothell.');
} else {
  alert('Please enter either Y or N');
}

var answerThree = prompt('Do I have any cats?');
console.log('have cats', answerThree);

if (answerThree.toUpperCase() === 'Y') {
  alert('No, I have 2 dogs.');
} else if (answerThree.toUpperCase() === 'N') {
  alert('That\'s correct. I only have dogs.');
} else {
  alert('Please enter either Y or N');
}

var answerFour = prompt('Was I ever a veterinary technician?');
console.log('veterinary technician', answerFour);

if (answerFour.toUpperCase() === 'Y') {
  alert('That\'s correct.');
} else if (answerFour.toUpperCase() === 'N') {
  alert('Wrong, I definitely was a veterinary technician.');
} else {
  alert('Please enter either Y or N');
}

var answerFive = prompt('Have I ever been bit by a cat?');
console.log('bit by a cat', answerFive);

if (answerFive.toUpperCase() === 'Y') {
  alert('No, I\'ve only been bit by dogs, ferrets, rabbits, and birds.');
} else if (answerFive.toUpperCase() === 'N') {
  alert('Correct. I\'ve only been bit by dogs, ferrets, rabbits, and birds');
} else {
  alert('Please enter either Y or N');
}
