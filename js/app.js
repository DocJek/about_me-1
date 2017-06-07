// Aeone Singson - Code 201 - About Me

'use strict';
// design guessing game

var userPoints = 0;
var answer;

// get user name
var user = prompt('What is your name?');
alert('Hello, ' + user + '. Welcome!');
alert('This is a guessing game to determine if you\'re my friend. You will answer five questions and if you answer enough of them correctly, I will share a secret with you. If not, I will feed you to a dragon.');
alert('Let\'s begin!');

// array of questions to ask
var questions = ['Is my favorite color green? '];
questions.push('Am I tall? ');
questions.push('Do I like bananas? ');
questions.push('Do I drink coffee? ');
questions.push('Do I like to draw? ');

// ask five questions
for(var i = 0; i < 5; i++){
  // capture answer to questions in a variable
  answer = askQuestion(questions[i]).toLowerCase();
  // print to console
  console.log(questions[i] + ': ' + answer);
  // get points
  userPoints = getPoints(i, answer);
}

// asks question
function askQuestion(question){
  answer = prompt(question);
  return answer;
}

// assign points based on responses
// account for responses: y/yes, n/no, neither
function getPoints(i, answer){
  if(i === 0 || i === 3 || i === 4){
    if(answer === 'y' || answer === 'yes'){
      alert('Correct!');
      alert('You have ' + userPoints + ' total points.');
      userPoints++;
    } else {
      alert('Wrong.');
      alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.')
    }
  } else if (i === 1 || i === 2){
    if(answer === 'n' || answer === 'no'){
      alert('Correct!');
      alert('You have ' + userPoints + ' total points.');
      userPoints++;
    } else {
      alert('Wrong.');
      alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.')
    }
  }
  return userPoints;
}

// present score
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
