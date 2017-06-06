'use strict';

var userPoints = 0;

console.log('hello world');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi ' + user + ' I am so glad you decided to come to my site');

var answer = prompt('Is Stephanie\'s favorite food popcorn?', 'Type yes or no').toLowerCase();
console.log(answer);

// check if the user's answer is correct
// what is correct?
// check what's the answer? list cases
  // yes
  // no
  // neither
if(answer === 'yes' || answer === 'y'){
  // if correct + pt
  userPoints++;
} else {
  // if !correct, try again
  alert('Wrong. Try again')
}

alert('You have ' + userPoints + ' points.');
