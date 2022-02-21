var readline = require('readline-sync');
var options = ['look inside the desk', 'put your hand in the hole in the wall', 'use your phone to call for help'];
let key = 0;
    
    function startMenu(){
        options = readline.question("You find yourself in a small room.\nIn front of you is a door leading outside but it is locked. \nThere is a hole in the wall next to you big enough to fit your arm in. \nAcross the room is a desk with a single drawer. \nWhat should you do first?\n"
        + "\ndesk(" + options[0] + ")"
        + "\nhole(" + options[1] + ")"
        + "\nphone(" + options[2] + ")"
        + "\ntype your next action to continue");

        switch (key) {
            case "desk":
                while (key === 0)
                    console.log("\nyou look in the desk and find a key"); 
                if (key === 1)
                    console.log("you've found everything there is to find here.");
                    break;
            case "hole":                   
                    console.log("\nyou feel a sharp pain in your hand,\n you retract your hand from the hole in the wall and realize a snake bit you.\n you died.");
                    break;
            case "phone":                    
                    console.log("\nyour phone doesnt have a signal.\n it wont be anyhelp.");
                    break;
            case "door":  
                while (key === 0){                  
                    console.log("the door is locked");
                } 
                while (key === 1){
                    console.log('you unlock the door and escape!');
                }
                    break;
        }
    }
