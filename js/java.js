'use strict';

var user = prompt(" Can You Please Tell Us Your Name ")
alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")

var name = prompt("My name is an Arabian name means when the nigh become calm and dark before the dorn..Did you know it?")
name = name.toLowerCase();
switch (name ) { 
    case "yes" :
        alert(" Great Job.. Yes my name is Saja");
        //console.log ("Great Job.. you guessed my name");
        alert("Great Job.. you guessed my name");
        break;
    case "y" :
         alert(" Great Job.. Yes my name is Saja");
         //console.log ("Great Job.. you guessed my name");
        alert("Great Job.. you guessed my name");
         break;  
    case "no" :
        alert(" It\'s OK.. Actually my name is Saja");
       // console.log ("You could not guess my name");
        alert ("You could not guess my name");
        break;
    case "n" :
        alert(" It\'s OK.. Actually my name is Saja");
        //console.log ("You could not guess my name");
        alert ("You could not guess my name");
        break; 
        default:
        alert(" You don't want to Know my name?");
        //console.log ("Try to know my name");
        alert("Try to know my name");
        break;
        
}


var major = prompt("I should work with medical instroments in hospitals or with artificial organs.. Did you know what is my major?")
major = major.toLowerCase();
switch (major ) { 
    case "yes" :
        alert(" Great Job.. Yes I am a biomedical enginner");
        //console.log ("Great Job.. you guessed my major");
        alert("Great Job.. you guessed my major");
        break;
    case "y" :
         alert(" Great Job.. Yes I am a biomedical enginner");
         //console.log ("Great Job.. you guessed my major");
        alert("Great Job.. you guessed my major");
         break;  
    case "no" :
        alert(" I'm sure you were about to know it ... My major is biomedical engineering");
        //console.log ("You could not guess my major");
        alert("You could not guess my major");
        break;
    case "n" :
        alert(" I'm sure you were about to know it ... My major is biomedical engineering");
        //console.log ("You could not guess my major");
        alert("You could not guess my major");
        break; 
    default:
        alert(" You don't want to Know my major? my major is biomedical engineering");
        //console.log ("Try to know my major");
        alert("Try to know my major");
         break;
}

var year = prompt("I started school in 2013 and graduated after 5 years.. Did you Know what year I've graduated?")
year = year.toLowerCase();
switch (year ) { 
    case "yes" :
        alert(" Great Job.. Yes I've graduated in 2018");
        //console.log ("Great Job.. you guessed my graduation year");
        alert("Great Job.. you guessed my graduation year");
        break;
    case "y" :
         alert(" Great Job.. Yes I've graduated in 2018");
         //console.log ("Great Job.. you guessed my graduation year");
        alert("Great Job.. you guessed my graduation year");
         break;  
    case "no" :
        alert(" You are bad in math.. I've graduated in 2018 ");
        //console.log ("You could not guess my graduation year");
        alert("You could not guess my graduation year");
        break;
    case "n" :
        alert(" You are bad in math.. I've graduated in 2018");
        //console.log ("You could not guess my graduation year");
        alert("You could not guess my graduation year");
        break; 
    default:
        alert(" You don't want to Know my graduation year? ");
        //console.log ("Try to know my graduation year");
        alert("Try to know my graduation year");
        break;
}

var hobby = prompt(" I've read a lot of books and my faviort auther is Dan brown.. Did you guess what is my hobby?")
hobby = hobby.toLowerCase();
switch (hobby ) { 
    case "yes" :
        alert(" Great Job.. my hobby is reading");
        //console.log ("Great Job.. you guessed my hobby");
        alert("Great Job.. you guessed my hobby");
        break;
    case "y" :
         alert(" Great Job.. my hobby is reading");
         //console.log ("Great Job.. you guessed my hobby");
        alert("Great Job.. you guessed my hobby");
         break;  
    case "no" :
        alert(" Really! My hobby is reading .. It's so easy");
        //console.log ("You could not guess my hobby");
        alert("You could not guess my hobby");
        break;
    case "n" :
        alert(" Really! My hobby is reading .. It's so easy");
        //console.log ("You could not guess my hobby");
        alert("You could not guess my hobby");
        break;
        default:
                alert(" You don't want to Know my hobby? ");
                //console.log ("Try to know my hobby");
        alert("Try to know my hobby");
                break; 
}

var color = prompt("My faviort color is the color of the sky and the sea.. Did you Know it?")
color = color.toLowerCase();
switch (color ) { 
    case "yes" :
        alert(" Great Job.. Yes my faviort color is blue");
       // console.log ("Great Job.. you guessed my faviort color");
        alert("Great Job.. you guessed my faviort color");
        break;
    case "y" :
         alert(" Great Job.. Yes my faviort color is blue");
         //console.log ("Great Job.. you guessed my faviort color");
        alert("Great Job.. you guessed my faviort color");
         break;  
    case "no" :
        alert(" You don't Know the color of the sky! My faviort color is blue");
        //console.log ("You could not guess my faviort color");
        alert ("You could not guess my faviort color");
        break;
    case "n" :
        alert(" You don't Know the color of the sky! My faviort color is blue");
        //console.log ("You could not guess my faviort color");
        alert ("You could not guess my faviort color");
        break; 
        default:
                alert(" You don't want to Know my faviort color? ");
              //  console.log ("Try to know my faviort color");
        alert("Try to know my faviort color");
                break;
}

alert("Thanks for being here " + user);



