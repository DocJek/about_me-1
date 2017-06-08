// Aeone Singson - Code 201 - About Me
// Lab 3

'use strict';
// design guessing game

// var init
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
questions.push('Guess a number between 0-9: ');
questions.push('What other cities have I lived in? ');

// ask five questions
for(var i = 0; i < questions.length; i++){
  answer = prompt(questions[i]).toLowerCase();
  if(i === 0 || i === 3 || i === 4){
    if(answer === 'y' || answer === 'yes'){
      alert('Correct!');
      userPoints++;
      alert('You have ' + userPoints + ' total points.');
    } else {
      alert('Wrong.');
      alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.');
    }
  } else if (i === 1 || i === 2){
    if(answer === 'n' || answer === 'no'){
      alert('Correct!');
      userPoints++;
      alert('You have ' + userPoints + ' total points.');
    } else {
      alert('Wrong.');
      alert('You have ' + userPoints + ' total points. The dragon is giddy with anticipation.');
    }
  } else if (i === 5){
    // guess a number
    if(answer != 8){
      for(var j = 0; j < 4; j++){
        answer = prompt('Guess again: ');
        if(answer == 8){
          break;
        }
      }
    } else {
      alert('Correct!');
      userPoints++;
      alert('You have ' + userPoints + ' total points.');
    }
  } else if (i === 6){
    // guess a city
  }
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
