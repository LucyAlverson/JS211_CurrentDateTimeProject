// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const num2String = (num) => {
  return num.toString();
}




// Write a JavaScript program to convert a string to the number.
const string2Num = (string) => {
  return string.toNum();
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  Boolean(19 > 6)        // returns true
  // * Null
  var a = null;
  document.write(a + "<br>"); // Print: null
  
  var b = "Apple Sauce!"
  document.write(b + "<br>"); // Print: Apple Sauce!
  
  b = null;
  document.write(b) // Print: null
  // * Undefined
  var x;

  if (typeof x === "undefined") {
    txt = "x is undefined";
  } else {
    txt = "x is defined";
  }
  // * Number
  var a = 25;         // integer
  var b = 80.5;       // floating-point number
  var c = 4.25e+6;    // exponential notation, same as 4.25e6 or 4250000
  var d = 4.25e-6;    // exponential notation, same as 0.00000425
  // * NaN

  // * String
  var a = 'Apple Sauce!';  // using single quotes
  
  // write a function that takes a variable that is dataype
  // return the type of that variable - using the 'typeof' operator 
  
  typeof 60;  // Returns: "number"
  
// Write a JavaScript program that adds 2 numbers together.

const add = (num1, num2) => {
  return num1 + num2
}


// Write a JavaScript program that runs only when 2 things are true.

var Truthytruth = false;
Truthytruth = true;
Truthytruth;


// Write a JavaScript program that runs when 1 of 2 things are true.

var Truthytruth = truth;
Truthytruth = truth;
Truthytruth;

// Write a JavaScript program that runs when both things are not true.  

var Truthytruth = truth;
Truthytruth = false;
Truthytruth;

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
