const readline = require("readline-sync");
let alive = true;
let key = false;
let pressStart = false;
let room = 1;
const start = readline.keyIn("press 1 to start", {limit: '$<1>'});

if (start == 1)
{
    console.log("You find yourslef in a room. There is a small hole in the wall big enough for your arm. \nThe door appears to be locked. across the room is a desk with a drawer. \nWhat would you like to do?");
    pressStart = true;
}

while (alive == true && pressStart == true && room == 1)
{
    const optionID = readline.keyIn("Press 1 to put your hand in the hole. \nPress 2 to search the desk. \nPress 3 to open the door.", {limit: '$<1-3>'});
    if (optionID == 1)
    {
        console.log("\nyou feel a sharp pain in your hand. \ntwo puncture marks between your thumb and index finger. \nyou died.");
        alive = false;
    }
    else if (optionID == 2)
    {
        if (key == true)
        {
            console.log("\nthere is nothing left in the desk");
        }
        else if (key == false)
        {
            console.log("you take the key sitting in the desk");
            key = true;
        }
    }
    else if (optionID == 3)
    {
        if (key == false)
        {
            console.log("\nthe door is locked. \n you will need a key.");
        }
        else if (key == true)
        {
            console.log("you have escaped the room!");
            room = 2;
            break;
        }
    }
}

