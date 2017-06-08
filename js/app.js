// Aeone Singson - Code 201 - About Me
// Lab 4 Pair Programming

'use strict';
// design guessing game

// var init
var questions = [];
var userPoints = 0;
var answer;
var user;

getUserName();
buildQuestions();
simpleQuestions();
presentScore();

// get user name
function getUserName() {
  user = prompt('What is your name?');
  alert('Hello, ' + user + '. Welcome!');
  alert('This is a guessing game to determine if you\'re my friend. You will answer five questions and if you answer enough of them correctly, I will share a secret with you. If not, I will feed you to a dragon.');
  alert('Let\'s begin!');
}

// array of questions to ask
function buildQuestions() {
  questions.push('Is my favorite color green? ');
  questions.push('Am I tall? ');
  questions.push('Do I like bananas? ');
  questions.push('Do I drink coffee? ');
  questions.push('Do I like to draw? ');
  // questions.push('Guess a number between 0-9: ');
  // questions.push('What other cities have I lived in? ');
}
// take all yes/no questions and put into own function
// take question 6 and 7 into own seperate function

function askQuestion (question) {
  answer = prompt(question);
  return answer;
}
// ask five questions
function simpleQuestions() {
  for(var i = 0; i < questions.length; i++){
    answer = askQuestion(questions[i]).toLowerCase();
    console.log(questions[i] + ': ' + answer);
    userPoints = getPoints(i, answer);
  }
}
 // else if (i === 5){
//     // TODO: finish
//     // guess a number
//     if(answer != 8){
//       for(var j = 0; j < 4; j++){
//         answer = prompt('Guess again: ');
//         if(answer == 8){
//           break;
//         }
//       }
//     } else {
//       alert('Correct!');
//       userPoints++;
//       alert('You have ' + userPoints + ' total points.');
//     }
//   } else if (i === 6){
//     // TODO: finish
//     // guess a city
//   }
// }

function correct() {
  alert('Correct! You have a score of ' + userPoints);
}

function incorrect() {
  alert('Sorry that was the wrong answer. You have a score of ' + userPoints);
}

function getPoints(i, answer) {
  if (i === 0 || i === 3 || i === 4) {
    if (answer === 'y' || answer === 'yes') {
      userPoints++;
      correct();
    } else {
      incorrect();
    }
  } else if (i === 1 || i === 2) {
    if (answer === 'n' || answer === 'no') {
      userPoints++;
      correct();
    } else {
      incorrect();
    }
  } else {
    incorrect();
  } return userPoints;
}
// present score
function presentScore() {
  alert('Your total score is ' + userPoints + '.');
  if(userPoints >= 3){
    alert('Congratulations. You have earned a secret!');
    alert('Here is my secret...');
    alert('Once, I had a friend who I left in a room with a hungry dragon.');
  }else{
    alert('Congratulations! You have lost!');
    alert('You have earned the wonderful honor of helping sustain a beautiful creature. Please wait here and my dragon will be with you shortly.');
  }
  alert('Goodbye!');
}
