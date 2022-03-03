let myName = "Ryan";
console.log(myName);
//alert("welcome to the most obnoxious function in javascript...");
//var myHeading = document.querySelector("h1"); global
//let myHeading = document.querySelector("h1"); local

//functions do stuff, does not to have a type (no need for void, bool, int...)
function changeHeading() {
    const myHeading = document.querySelector("h1"); //local const, cannot be reassigned
    myHeading.textContent = "Hello world!";
    console.log(myHeading);
}

function addParagraph() {
    let paragraph = document.createElement("p");
    paragraph.innerText = "Hello, my name is Ryan.";
    document.body.appendChild(paragraph);
}

function changeHeading2() {
    let header2 = document.querySelector("h2");
    header2.textContent = "I selected this h2.";
}

function init() {
    changeHeading();
    changeHeading2()
    addParagraph();
}