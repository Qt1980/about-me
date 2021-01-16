'use strict'

//write 5 questions, must except yes/no or y/n.
//examples: yes, YES, Yes, y or Y

//introduction
var userName = prompt('Hello What is your name?');
//console.log(userName);
alert('What as wonderful name! ' + userName + ', It\'s such a pleasure to meet you! ');

//first question
var homeCity = prompt('So, Let\'s get to know each other! Are you from the planet Earth?').toLowerCase();

//console.log(homeCity);

if(homeCity === 'yes' || homeCity === 'y') {
  alert('Yes! Yes you are otherwise I would call...Nevermind!');
} else if (homeCity === 'no' || homeCity === 'n') {

  alert('Ah well that\'s ok too. Most Jedi are familiar with various Alien species.');
}

//second question

var stayingAlive = prompt('Do you enjoy meditating?').toLowerCase();

//console.log(stayingAlive);

if(stayingAlive === 'yes' || stayingAlive === 'y') {
  alert('Very Good Padawan! Meditation leads to strength in he force!');
}else if (stayingAlive === 'no' || stayingAlive === 'n') {
  alert('Hmm, If you do not then to the dark side you will go!');
}

// third question

var angryAntics = prompt('Do you like to be angry?').toLowerCase();
 //console.log(angryAntics);

if(angryAntics === 'yes' || angryAntics === 'y'){
  alert('The darkside of the force calls to you. You must learn to quell your emotions.');
}else if (angryAntics === 'no' || angryAntics === 'n') {
  alert('Very Good! This is the true path of the Jedi!');
}

//fourth question

var lightSaber = prompt('Do you possess a lightsaber?').toLowerCase();

if(lightSaber === 'yes' || lightSaber === 'y'){
  //console.log(lightSaber);
  alert('Wonderful! A saber is a Jedi\'s weapon and it is connected to you through the force.');
}else if (lightSaber === 'no' || lightSaber === 'n') {
  alert('Hmph! Then you must be a child of darkness!');
}

//Fifth question

var oneForce = prompt('Are you one with the force?').toLowerCase();

//console.log(oneForce);

if(oneForce === 'yes' || oneForce === 'y'){
  alert('This is good ' + userName + ', The force is strong with you!');
}else if (oneForce === 'no' || oneForce === 'n') {
  alert(userName +' you are a Sith Lord. Prepare to do battle!');
}
