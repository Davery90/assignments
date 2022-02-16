1/*- We will ask the user “What operation would you like to perform?”
2- The user should enters one of these options: /, *, -, +
3- If the user enters an invalid character print, “That is not a valid operation” and then restart the program
4- After the user enters a valid operation, ask the user, “Please enter the first number”
5- The user then enters any group of numbers. If the user enters something that is not a number, print “This is not a number” and then re-ask the question
6- After a valid number is entered, ask the user, “Please enter the second number”. Perform the same error handling as before
7- Then perform the proper math operation and print the result as, “The result is: X” where is is the actual result.var readlineSync = require('readline-sync');*/

function operationquestion(){
    operator = readline.question("What operation would you like to perform? "
    +'/nOptions'
    +'n/Add ('+ operations[0]+')'
    +'n/Subtract ('+ operations[1]+')'
    +'n/Multiply ('+ operations[2]+')'
    +'n/Divide ('+ operations[3]+')'
)
}
