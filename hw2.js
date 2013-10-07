/*
 * Please follow the instructions carefully.
 * 
 * When a problem says "send 'foo' to the console that means you would write
 * 
 * 	console.log('foo');
 * 
 * I may also say "send the variable x to the console" in which case you'd write
 * 
 * 	console.log(x)
 * 
 * Note: If you have multiple variables x, y, z you can send all of them to the console like so
 * 
 * 	console.log(x, y, z)
 */

// Problem 1) Using JavaScript comments, write your name and today's date below

//Tigist Balke
//09/12/2013

// Problem 2) Create separate variables to store the following. 
// Send all variables to the console.
	// Your e-mail address
	// Your major
	// Your favorite text editor
	// A zip code
	// The value of pi up to 5 decimal places (use Google to find the value)
	// The total cost of a 10 dollar book plus 5% sales tax
	// Whether or not the light switch is on
	// Whether or not Superman can fly

var myEmail = "hailige77@yahoo.com"; 
var myMajor = "webdeveloper";
var myTextEditor = "Sublime";
var myZip = 20904;
var supermanCanFly = true;
var pi = 3.14159;
var lightIsOn = false;
var bookPrice = 10;
var salesTax = 5;

bookPrice += (salesTax / 100) * bookPrice;

console.log(myEmail, myMajor, myTextEditor, supermanCanFly, pi, lightIsOn, bookPrice); // JG: The formula for calculating the book price was incorrect

// JG: Note the change in variable names to make them more descriptive.


// Problem 3) Use the typeof operator to determine the data type of each variable like so.
	// console.log(typeof myEmail);
	// console.log(typeof myMajor);
	// and so on…
	// Make sure you have at least one string, at least one number, and at least one Boolean.

console.log(typeof myMajor);
console.log(typeof myZip);
console.log(typeof supermanCanFly);
// JG: The rest of the typeof calls are missing. Only the first three variables got tested.


// Problem 4) Create string variables to store the following string values.
// Send all variables to the console.
	// The dog's biting my shoes
	// <a href="#">Some link</a>
	// JavaScript is "easy" if you are good at it

var val1 = "The dog's biting my shoes"; 
var val2 = "<a href=\"#\">Some link</a>"; 
var val3 = "JavaScript is \"easy\" if you are good at it"; 

console.log(val1, val2, val3 );

// Problem 5) Create an array of topics you would like to learn this semester.
// Send this array to the console.
// JG I caught a spelling mistake in "Toopic". It's fixed now.
var myTopic = new Array();
myTopic[0] = "I want to learn how to make game";
myTopic[1] = "how to make calander";
myTopic[2] = " slider";


console.log(myTopic  + "<br>");

// JG: Great first time use of the array! It's preferred to do it this way, but your approach works.
myTopic = ["I want to learn how to make game", "how to make calander", "slider"];

// Problem 6) Send each item of the last array to the console. 
// If your array variable is myArray then you would write
	// console.log(myArray[0])
	// console.log(myArray[1])
	// and so on…
console.log(myTopic[0])
console.log(myTopic[1])
console.log(myTopic[2])
// Problem 7) Use the yourArrayVariable.length property to determine the size of your array.
// Send the result to the console.

console.log(myTopic.length)

// Problem 8) Create a function named "clickMe".
// When the user clicks the button with the ID of "clickMe" send the string 
// "Leave me alone!" to the console.
	// hint: Use document.getElementById to get a reference to the button in
	// a similar way to how we did it in class for the currency conversion
	// calculator.

document.getElementById('clickMe').onclick = function (){
	console.log('leave me alone');
}