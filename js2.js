'use strict'

function askName(){
    var userName = prompt('Howdy! Whats your name?');
    return userName;
}

function askDogs(userName){
    var askDogs = prompt(userName + ', do you like dogs?') .toLowerCase();
    while((askDogs != 'yes') || (askDogs == 'no')){
        askDogs = prompt(userName + ', one more time, do you like dogs?')
    }
    // while loop, checks condition of yes or no
    // if true, exit
    // false asks them again
    return askDogs;
}

function likeDogs(askDogs){
    if (askDogsFromFunction === 'yes'){
        alert ('BELLY RUBS & TREATS FOR ALL THE DOGGOS!!!!!');    
    } else if (askDogsFromFunction === 'no'){
        alert ('I HOPE YOU BURN IN HELL       ....just kidding!!!');

    }
    
}

var userNameFromFunction = askName();
var askDogsFromFunction = askDogs(userNameFromFunction);
likeDogs(askDogsFromFunction)

var today = new Date();
    var hourNow = today.getHours(); 
    var salutation;
  
    if (hourNow > 18) {
      salutation = 'Good evening ';
    }   else if (hourNow > 12) {
      salutation = 'Good afternoon ';
    }   else if (hourNow >= 0) {
      salutation = 'Good morning ';
    }   else {
      salutation = 'Welcome!';
    }
  
    document.write('<h3>' + salutation + userNameFromFunction + '!' + '</h3>');


