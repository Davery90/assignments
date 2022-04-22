var readline = require('readline-sync');


// Characters
function Character(name, weapon, inventory, hp) {
    this.name = name
    this.weapon = weapon
    this.inventory = inventory
    this.hp = hp
}

// Weapons
function Weapon(name, attack) {
    this.name = name
    this.attack = attack
}

let dagger = new Weapon("Dagger", [20, 20, 50, 50, 60])
let shortSword = new Weapon("Short sword", [30, 30, 30, 30, 45])
let longSword = new Weapon("Long sword", [40, 42, 43, 47])
let mace = new Weapon("Mace", [45, 45, 51])
let halberd = new Weapon("Halberd", [50, 50, 50, 55])

//Player character
var mainCharacter = new Character(input, shortSword, ["Key"], 160);

// Loot
let loot = ["apple", "flask of water", "iron ingot", "cloth wraps"]
let randLoot = loot[Math.floor(Math.random() * loot.length)]

// Enemies
var bandit = new Character("Bandit", dagger, randLoot, 50)
var knight = new Character("Knight", shortSword, randLoot, 80)
var giant = new Character("giant warrior", longSword, longSword, randLoot, 120)
var lizard = new Character("Lizard", mace, randLoot, 65)
var skeleton = new Character("Skeleton", halberd, randLoot, 40)

enemiesArray = [bandit, bandit, bandit, bandit, knight, lizard, skeleton, giant]
let randEnemy = enemiesArray[Math.floor(Math.random() * enemiesArray.length)]

// Walk
const walk = () => {
    let odds = ["engage", "keepWalking"]
    let randOutcome = odds[Math.floor(Math.random() * odds.length)]
    if (randOutcome === "engage") {
        attack()
    } else {
        console.log(" " + "\n> You press forward uninterrupted, keeping an eye out for trouble" + "\n ")
    } 
}

// +++ Run 
const run = () => {
    console.log(`The enemy's attention is diverted from you for just a second` + "\n You use this moment to try and run from them. You successfully get away")
}

// Attack
const attack = () => {
    let randLoot = loot[Math.floor(Math.random() * loot.length)]
    let randEnemy = enemiesArray[Math.floor(Math.random() * enemiesArray.length)]
    let currentEnemy = randEnemy.name
    let enemyHP = randEnemy.hp
    let characterAttack = mainCharacter.weapon.attack[Math.floor(Math.random() * mainCharacter.weapon.attack.length)]
    let enemyAttack = randEnemy.weapon.attack[Math.floor(Math.random() * randEnemy.weapon.attack.length)]

    readline.prompt(console.log(" " + `\n> You encounter a ` + currentEnemy + ` while walking. `
        + currentEnemy + ` has ` + enemyHP + ` HP left.` + "\n " + "\nPress ENTER key to continue."))
    while (enemyHP > 0) {
        var combatOption = readline.prompt(
            console.log(`The enemy has ` + enemyHP + ` HP remaining. \n You have the option to attack your enemy or run away. Press "a" to attack or type "run" to attempt an escape. To check your status, press "s"`))
        if (combatOption === "run") { //Run
            let odds = ["run", "stay"]
            let escapeChance = odds[Math.floor(Math.random() * odds.length)]
            if (escapeChance === "run") {
                run()
                break
            } else {
                console.log("> You cannot find an oportunity to run. While you look for an escape route the enemy attacks you for: " + enemyAttack)
                mainCharacter.hp = mainCharacter.hp - enemyAttack

            }
        } else if (combatOption === "a") { //Attack
            enemyHP = enemyHP - characterAttack
            console.log("\n> You deal " + characterAttack + " damage with your weapon." + "\n ")
            if (enemyHP > 0) { //Enemy Attack
                mainCharacter.hp = mainCharacter.hp - enemyAttack
                console.log(" " + "\n> The enemy retaliates and inflicts " + enemyAttack + " damage with their weapon." + "\n ")
                if (mainCharacter.hp <= 0) {
                    death()
                    break
                }
            } else {
                if (mainCharacter.hp < 160) { //Regenerate
                    mainCharacter.hp = mainCharacter.hp + (mainCharacter.hp * 1.05)
                }
                var newInv = []
                newInv.push(randEnemy.inventory, mainCharacter.inventory) //Loot
                mainCharacter.inventory = newInv
                console.log(" " + "\n> You have defeated the enemy! You regenerate some of your health! \n As you search the body you find: " + randEnemy.inventory + "\n ")
            }
        } else if (combatOption === "s") { //View Status
            console.log(
                `\n"` + mainCharacter.name + `, you have ` + mainCharacter.hp + ` HP remaining."`
            )
        }
    }
}

// Death
const death = () => {
    console.log("You've been hit in the head. You feel your memories begin to fade. \nYou don't remember how you got here \nand cannot even seem to recall your own name. ")
}

// Greeting
readline.prompt(console.log(``
    + "\n The back of my skull is searing in pain"
    + "\n I dont know where I am."
    + "\nPress ENTER key to continue."));

var input = readline.question(``
    + `\nI must have hit my head. I can't seem to remember my name.`
    + `\nI think its..."`
    + `\nEnter your name: `);
mainCharacter.name = input

readline.prompt(console.log(``
    + `That's it... My name is ` + mainCharacter.name + `! I have ` + mainCharacter.hp + ` Health Points remaining"`
    + "\nPress ENTER key to continue."))


// Walking
while (mainCharacter.hp > 0) {
    if (mainCharacter.hp <= 0) {
        death()
        break
    }
    var action = readline.prompt(console.log(``
        + `\n Type "w" to walk. Type "print" to view your inventory and HP.`
        + ``))
    if (action === "print") {
        console.log(``
            + `\n"` + mainCharacter.name + ` your weapon is: ` + mainCharacter.weapon.name + `, your current inventory is: ` + mainCharacter.inventory + `. You have ` + mainCharacter.hp + ` HP remaining."`
            + ``)
    } else if (action === "w") {
        walk()
    }
}
