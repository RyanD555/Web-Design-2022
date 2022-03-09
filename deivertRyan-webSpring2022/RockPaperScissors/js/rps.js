let playerChoice; //global vars
let cpuChoice;
let userWins = 0;
let cpuWins = 0;
let clickCounter = 0;
const choices = ["rock", "paper", "scissors"];

function userChoice(choice) { //Player Choice
    playerChoice = choice;
    cpuChoice = compChoice();
    compareChoices();
}            

function compChoice() {
    let randNum = Math.floor(Math.random() * choices.length); //dont really see the need of making this another function, since it is only used once
    return choices[randNum];
}

function drawPic(pic, width, height, alt, id) { //Will not throw error if not all arguements are given
    const img = document.createElement("IMG");
    img.setAttribute("src", pic); //Example of abstraction
    img.setAttribute("width", width);
    img.setAttribute("height", height);
    img.setAttribute("alt", alt);
    document.getElementById(id).appendChild(img);
}

function destroyChild(id) { //From Mr. Cozort, who got it from javascripttutorial.net
    const element = document.getElementById(id); //Removes the first element of a div id
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function addParagraph(elementType, text, textColor, fontFamily, fontSize, id) { //Adds an element to the html document
    const paragraph = document.createElement(elementType);
    paragraph.innerText = text;
    paragraph.style.color = textColor;
    paragraph.style.fontFamily = fontFamily;
    paragraph.style.fontSize = fontSize;
    document.getElementById(id).appendChild(paragraph);
}

function compareChoices() {
    destroyChild("player");
    destroyChild("cpu");
    destroyChild("text");
    clickCounter++;
    //Draw Player Image
    if (playerChoice == "rock") {
        drawPic("images/rock.png", "100", "100", "rock", "player");
    }
    else if (playerChoice == "paper") {
        drawPic("images/paper.png", "100", "100", "paper", "player");
    }
    else if (playerChoice == "scissors") {
        drawPic("images/scissors.png", "100", "100", "scissors", "player");
    }
    //Draw Cpu Image
    if (cpuChoice == "rock") {
        drawPic("images/rock.png", "100", "100", "rock", "cpu");
    }
    else if (cpuChoice == "paper") {
        drawPic("images/paper.png", "100", "100", "paper", "cpu");
    }
    else if (cpuChoice == "scissors") {
        drawPic("images/scissors.png", "100", "100", "scissors", "cpu");
    }
    //Determine who wins
    if (playerChoice == "rock" && cpuChoice == "scissors" ||
        playerChoice == "paper" && cpuChoice == "rock" ||
        playerChoice == "scissors" && cpuChoice == "paper") {
        console.log("user wins the game...");
        userWins++;
        addParagraph("p", "The user wins! You have " + userWins + " wins!", "#D7CAFD", "Impact, fantasy", "15", "text");
    }
    else if (cpuChoice == "rock" && playerChoice == "scissors" ||
        cpuChoice == "paper" && playerChoice == "rock" ||
        cpuChoice == "scissors" && playerChoice == "paper") {
        console.log("user loses the game...");
        cpuWins++;
        addParagraph("p", "The computer wins! It has " + cpuWins + " wins!", "#D7CAFD", "Impact, fantasy", "15", "text");
    }
    else if (cpuChoice == playerChoice){
        console.log("tie game...");
        addParagraph("p", "It is a tie. No one wins.", "#D7CAFD", "Impact, fantasy", "15", "text");
    }
    else {
        console.log("something went wrong");
    }
    addParagraph("p", "You have played " + clickCounter + " times.", "#D7CAFD", "Impact, fantasy", "15", "text")
}