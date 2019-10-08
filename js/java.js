'use strict';

var user = prompt(" Can You Please Tell Us Your Name ")
alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")


var counter = 0;
/////////////////////////////////////////The 5 Questions//////////////////////////////////////////


var questions
    = [

        ["My name is an Arabian name means when the night become calm and dark before the dorn..Did you know it?",
            " Great Job.. Yes my name is Saja",
            " It's OK.. Actually my name is Saja",
            "Try to know my name"
        ],
        [
            "I should work with medical instroments in hospitals or with artificial organs.. Did you know what is my major?",
            " Great Job.. Yes I am a biomedical enginner",
            " I'm sure you were about to know it ... My major is biomedical engineering",
            "Try to know my major"

        ],
        [
            "I started school in 2013 and graduated after 5 years.. Did you Know what year I've graduated?",
            " Great Job.. Yes I've graduated in 2018",
            " You are bad in math.. I've graduated in 2018 ",
            "Try to know my graduation year"

        ],
        [
            " I've read a lot of books and my faviort auther is Dan brown.. Did you guess what is my hobby?",
            " Great Job.. my hobby is reading",
            " Really! My hobby is reading .. It's so easy",
            "Try to know my hobby"

        ],
        [
            "My faviort color is the color of the sky and the sea.. Did you Know it?",
            " Great Job.. Yes my faviort color is blue",
            " You don't Know the color of the sky! My faviort color is blue",
            "Try to know my faviort color"

        ]

    ]


for (var i = 0; i < 5; i++) {
    var exactArray = questions[i];
    var promptQuestion = exactArray[0];
    var posetiveReply = exactArray[1];
    var negativeReply = exactArray[2];
    var defultReply = exactArray[3];
    var name = prompt(promptQuestion);
    name = name.toLowerCase();
    switch (name) {
        case "yes":
        case "y":
            alert(posetiveReply);
            counter = counter + 1;
            console.log(name);

            break;


        case "no":
        case "n":
            alert(negativeReply);
            console.log(name);
            break;


        default:
            alert(defultReply);
            console.log(name);
            break;

    }
}



////////////////////////////////////////////the first question////////////////////////////////////////



for (var age = 0; age < 4; age++) {

    var old = prompt("Guess how old am I... You have 4 trials")
    if (old == 24) {
        alert("Yes exactly!");
        counter = counter + 1;
        console.log(old);
        break;
    } else if (old > 24) {
        alert("too high");
        console.log(old);
    } else if (old < 24) {
        alert(" too low");
        console.log(old);
    }
}

alert("I am 24 years old");



//////////////////////////////////////////the second question//////////////////////////////////////////




var game = ['cat', 'dog', 'hours', 'eagle', 'eleghant', 'dolphin'];

for (var times = 0; times < 5; times++) {
    var play = prompt("I love 6 different animals.. Can you guess one of them?");
    switch (play) {
        case game[0]:
        case game[1]:
        case game[2]:
        case game[3]:
        case game[4]:
        case game[5]:

            alert(" You are right.. My fav animals are: Cat, Dog, Hours, Eagle, Eleghant, Dolphin");
            counter = counter + 1;
            console.log(play);
            times = 5;
            break;

        default:

            alert("You are wrong .. Try it again ")
            console.log(play);
            break;
    }
}
alert(" My fav animals are: Cat, Dog, Hours, Eagle, Eleghant, Dolphin ");




alert("You got " + counter + " points after completing the quiz");

alert("Thanks for being here " + user);