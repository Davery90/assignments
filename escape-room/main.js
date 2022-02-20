var readline = require('readline-sync');
var user = 0;
var options = ['look inside the desk', 'put your hand in the hole in the wall', 'use your phone to call for help'];
var results = ['inside the desk you find a key', 'you feel a sharp pain in your hand,\n you retract your hand from the hole in the wall and realize a snake bit you.\n you died.', 'your phone has no signal']
let key = 0

    function operationQuestion(){
        user = readline.question("You find yourself in a small room.\nIn front of you is a door leading outside but it is locked. \nThere is a hole in the wall next to you big enough to fit your arm in. \nAcross the room is a desk with a single drawer. \nWhat should you do first?\n"
        + "\ndesk(" + options[0] + ")"
        + "\nhole(" + options[1] + ")"
        + "\nphone(" + options[2] + ")"
        + "\ntype your next action to continue\n"
        );
        }

    if (!options.includes(user)) {
        console.log("that is not a valid option\n");
        operationQuestion();
    }

        switch (options) {
            case "desk":
                console.log("you look in the desk and find a key"); 
            case "hole":
                console.log("you feel a sharp pain in your hand,\n you retract your hand from the hole in the wall and realize a snake bit you.\n you died.");
        };
        
        results = readline.question("")
    
 
// console.log("you " + options );
