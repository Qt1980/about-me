'use strict';

var score = 0;

//write 5 questions, must except yes/no or y/n.
//examples: yes, YES, Yes, y or Y

//introduction
var userName = prompt('Hello What is your name?');
//console.log(userName);
alert('What as wonderful name! ' + userName + ', It\'s such a pleasure to meet you! ');

//first question
var homeCity = prompt('So, Let\'s get to know each other! Am I from the planet Earth?').toLowerCase();

//console.log(homeCity);

if(homeCity === 'yes' || homeCity === 'y') {
  alert('Yes! Yes you are correct! I am on of the originals...Nevermind!');
  score++;
} else if (homeCity === 'no' || homeCity === 'n') {

  alert('So you think I\'m and alien eh?. I\'ve been called worse by better people!');
}

//second question

var stayingAlive = prompt('Do I enjoy meditating?').toLowerCase();

//console.log(stayingAlive);

if(stayingAlive === 'yes' || stayingAlive === 'y') {
  alert('Very Good Padawan! Meditation leads to great strength in the force!');
  score++;
}else if (stayingAlive === 'no' || stayingAlive === 'n') {
  alert('Hmm, I probably would\'ve been a sith a long time ago if it weren\'nt for meditation!');
}

// third question

var angryAntics = prompt('Do I like to be angry?').toLowerCase();
//console.log(angryAntics);

if(angryAntics === 'yes' || angryAntics === 'y'){
  alert('The darkside of the force calls to you. You must learn to quell your emotions. I did. You can too!');
}else if (angryAntics === 'no' || angryAntics === 'n') {
  alert('Very Good! This is the true path of the Jedi!')
  score++;
}

//fourth question

var lightSaber = prompt('Do I possess a lightsaber?').toLowerCase();

if(lightSaber === 'yes' || lightSaber === 'y') {
  //console.log(lightSaber);
  alert('Wonderful! A saber is a Jedi\'s weapon and it is connected to you through the force.');
  score++;
}else if (lightSaber === 'no' || lightSaber === 'n') {
  alert('Hmph! Then you must be a child of darkness!');
}

//Fifth question

var oneForce = prompt('Am I one with the force?').toLowerCase();

//console.log(oneForce);

if(oneForce === 'yes' || oneForce === 'y'){
  alert('This is good ' + userName + ', The force is strong with you!');
  score++;
}else if (oneForce === 'no' || oneForce === 'n') {
  alert(userName +' you are a Sith Lord. Prepare to do battle!');
}

for (var i = 0; i < 4; i++) {
  var guessmyAge = +prompt('How old do you think I am? You get 4 guesses!');
  //console.log(typeof(guessmyAge));
  var age = 40;
  if (guessmyAge === age) {
    alert('Bingo! You guessed it!');
    score++;
    break;
  } else if (i < 3 && guessmyAge < age) {
    alert('Nice try but you need to go a bit higher.');
  } else if (i < 3 && guessmyAge > age) {
    alert('Ah not that old! Lower please!');
  } else if (i === 3) {
    alert('Sorry your out of guesses. I am 40.');
  }
}


var answerCorrectly = false;
var myfavoriteAnimals = ['House cat', 'Golden Eagle', 'Bat', 'Dog', 'Octopus', 'Snake', 'Scorpion'];
//console.log(myfavoriteAnimals);
for (var j = 0; j < 6; j++) {
  var guessMyfavorites = prompt('What are my favorite animals? You get 6 guesses!');
  for (var k = 0; k < myfavoriteAnimals.length; k++) {
    if (guessMyfavorites === myfavoriteAnimals[k]) {
      alert('Correct');
      answerCorrectly = true;
      score++;
    }
  }
  if (answerCorrectly) {
    break;
  }
}
alert('My favorite animals are House cat, Golden Eagle, Bat, Dog, Octopus, Snake and Scorpion');
console.log(score);
alert( 'Good job' + userName + ', You scored well')
