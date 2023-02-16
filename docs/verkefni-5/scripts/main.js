/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/JavaScript_technologies_overview*/

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const */

/* html element */
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

/* mynd skipt út */
const myImage = document.querySelector("img");

  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png") {
      myImage.setAttribute("src", "images/Firefox_brand_logo.svg");
    } else {
      myImage.setAttribute("src", "images/firefox-icon.png");
    }
  };


/* breyta texta */
const myButton = document.querySelector("button");
const myHeadingTxt = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeadingTxt.textContent = "Mozilla is cool, " + myName;
    }
}

myButton.onclick = () => {
    setUserName();
  };

/* javascript breytur */

let myVariable = "Bob";
myVariable = "Steve";

let myNum = 0;
myNum = myNum + 1;

let myBolean = true;
myBolean = !myBolean;

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let */

/* listi */

let myList = [1,'Bob','Steve',10];

/* if else */

let iceCream = "chocolate";

if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

/* for lykkja */

for (let i = 0; i < 5; i++) {
  console.log(i);
}

/* while lykkja */  
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    }

/* function */

function multiply(num1,num2) {
  let result = num1 * num2;
  return result;
}

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function */

/* object */

let myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"]
    };

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object */

/* class */

// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }

// Expression
const Square = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};


/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes */


/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import */


