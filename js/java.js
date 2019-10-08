'use strict';

var user = prompt(" Can You Please Tell Us Your Name ")
alert("Welcome You Here " + user + " I wish You Enjoy Knowing Me..")

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


for (var i=0; i<5; i++){
    var exactArray = questions[i];
    var promptQuestion = exactArray[0];
    var posetiveReply = exactArray[1];
    var negativeReply = exactArray[2];
    var defultReply = exactArray[3];
var name = prompt(promptQuestion);
    promptQuestion = promptQuestion.toLowerCase();
switch (name) {
    case "yes":
    case "y":
        alert(posetiveReply);
        break;


    case "no":
    case "n":
        alert(negativeReply);
        break;


    default:
        alert(defultReply);
        break;

}

}
alert("Thanks for being here " + user);