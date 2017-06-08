// Aeone Singson - Code 201 - About Me
// Lab 2 Resubmit

'use strict';
// design guessing game

// var init
var userPoints = 0;
var answer;
var question;

// get user name
var user = prompt('What is your name?');
alert('Hello, ' + user + '. Welcome!');
alert('This is a guessing game to determine if you\'re my friend. You will answer five questions and if you answer enough of them correctly, I will share a secret with you. If not, I will feed you to a dragon.');
alert('Let\'s begin!');

// question 1
question = 'Is my favorite color green? ';
// auto lower-case at prompt for easy comparison
answer = prompt(question).toLowerCase();
// correct answer condition and response
if (answer === 'y' || answer === 'yes') {
  alert('Correct!');
  // log points
  userPoints++;
  alert('You have ' + userPoints + ' total points.');
// incorrect answer response
} else {
  alert('Wrong.');
  alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.');
}
// log question and answer to console
console.log(question + ': ' + answer);

// question 2
question = 'Am I tall? ';
answer = prompt(question).toLowerCase();
if (answer === 'n' || answer === 'no') {
  alert('Correct!');
  userPoints++;
  alert('You have ' + userPoints + ' total points.');
} else {
  alert('Wrong.');
  alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.');
}
console.log(question + ': ' + answer);

// question 3
question = 'Do I like bananas? ';
answer = prompt(question).toLowerCase();
if (answer === 'n' || answer === 'no') {
  alert('Correct!');
  userPoints++;
  alert('You have ' + userPoints + ' total points.');
} else {
  alert('Wrong.');
  alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.');
}
console.log(question + ': ' + answer);

// question 4
question = 'Do I drink coffee? ';
answer = prompt(question).toLowerCase().toLowerCase();
if (answer === 'y' || answer === 'yes') {
  alert('Correct!');
  userPoints++;
  alert('You have ' + userPoints + ' total points.');
} else {
  alert('Wrong.');
  alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.');
}
console.log(question + ': ' + answer);

// question 5
question = 'Do I like to draw? ';
answer = prompt(question).toLowerCase();
if (answer === 'y' || answer === 'yes') {
  alert('Correct!');
  userPoints++;
  alert('You have ' + userPoints + ' total points.');
} else {
  alert('Wrong.');
  alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.');
}
console.log(question + ': ' + answer);

// present score
alert('Your total score is ' + userPoints + '.');
// winning and losing
if (userPoints >= 3) {
  alert('Congratulations. You have earned a secret!');
  alert('Here is my secret...');
  alert('Once, I had a friend who I left in a room with a hungry dragon.');
} else {
  alert('Congratulations! You have lost!');
  alert('You have earned the wonderful honor of helping sustain a beautiful creature. Please wait here and my dragon will be with you shortly.');
}

alert('Goodbye!');
