"use strict";

alert('Please answer the following questions with Y or N');

var answerOne = prompt('Do you like to code?');
console.log('answerOne', answerOne);

if (answerOne.toUpperCase() === 'Y') {
    alert('That\'s great!');
} else if (answerOne.toUpperCase() === 'N') {
    alert('That\'s too bad!');
} else {
    alert('Please enter either Y or N');
}

