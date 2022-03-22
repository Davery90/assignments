/*1- We will ask the user “What operation would you like to perform?"
2- The user should enters one of these options: /, *, -, +
3- If the user enters an invalid character print, “That is not a valid operation” and then restart the program
4- After the user enters a valid operation, ask the user, “Please enter the first number”
5- The user then enters any group of numbers. If the user enters something that is not a number, print “This is not a number” and then re-ask the question
6- After a valid number is entered, ask the user, “Please enter the second number”. Perform the same error handling as before
7- Then perform the proper math operation and print the result as, “The result is: X” where is is the actual result.var readlineSync = require('readline-sync');*/

// console.log("hello world!")
// import { question } from 'readline-sync';
// var name = question("what is your name? ")
// console.log(name)


var readline = require('readline-sync');
/*add user name*/
var userName = readline.question("May I have your name?\n");
console.log("Hi " + userName + "!");
/*declare variable*/
var operations = ['add', 'subtract', 'multiply', 'divide'];
var operator = null;
var firstNumber = 0;
var secondNumber = 0;
let gameOver = false;

// /* function definition*/
// function operationQuestion() {
//     operator = readline.question("What operation would you like to perform?\n "
//         + "\nOptions:"
//         + "\nSum (" + operations[0] + ")"
//         + "\nSubtraction (" + operations[1] + ")"
//         + "\nMultiplication (" + operations[2] + ")"
//         + "\nDivision (" + operations[3] + ")\n"
//         + "Press the desired operator and press Enter!\n"
//     );

    while(gameOver){

    // if (!operations.includes(operator)) {
    //     console.log("That is not a valid operation\n");
    //     operationQuestion();
    // }
    // firstNumber = readline.questionInt("Type the first number:");
    // secondNumber = readline.questionInt("Type the second number:");
    // switch (operator) {
        
        case 0:
            console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber + secondNumber));
            break;
        case 1:
            console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber - secondNumber));
            break;
        case 2:
            console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + (firstNumber * secondNumber));
            break;
        case 3:
            console.log(userName + "; " + "The result of " + firstNumber + " " + operator + " " + secondNumber + ' = ' + ((firstNumber / secondNumber).toFixed(2)));
            break;
        default:
            console.log(userName + "; " + "Something went wrong :(");
    }
}

/*function call*/
operationQuestion();