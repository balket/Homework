// Homework 5

// This homework assignment will give you practice working with the DOM.

// Review the code we wrote in class by going here:

// https://github.com/galdamez/ca276-fall2013/blob/master/week9/wk9.js

// You'll be able to derive all your answers from what is in this file.


// Problem 1

// Using the W3C functions document.createElement(), document.createTextNode(), 
// and document.body.appendChild(), append the following HTML to the page.

// <dl>
// 	<dt>Some word</dt>
// 	<dd>Some definition</dd>
// </dl>

// You'll have to use document.createElement() for each HTML element (i.e. tag).
// You'll have to use document.createTextNode() for anything that is just text.
// When you have your DOM nodes ready, call document.body.appendChild() to append
// to the end of the body element.

// Feel free to replace "Some word" and "Some definition" with text of your 
// choosing. If you need ideas check out http://wordsmith.org/words/random.cgi

document.getElementById('w3cExample').onclick = function() {
	var drow, definitions, text, textNode, container;

textNode = document.createTextNode(text);
	definitions = document.createElement('div');
	definitions.setAttribute('id', 'definitions');
	definitions.setAttribute('style', 'display: block;');

	document.body.appendChild(definitions);

	drow = document.createElement('dl');
	drow.setAttribute('id', 'drow');
	drow.setAttribute('style', 'display: block;');

var dt = document.createElement('dt');
dt.appendChild(document.createTextNode('What is scripting?'));

drow.appendChild(dt);
document.body.appendChild(drow);	

var dd = document.createElement('dd');
dd.appendChild(document.createTextNode('A script is program code that doesn’t need pre-processing (e.g. compiling) before being run.'));

drow.appendChild(dd);
document.body.appendChild(drow);

};
// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".

document.getElementById('innerHTMLExample').onclick = function() {
	var drow, definitions, text, textNode, container;

	text = 'scripting';
	textNode = document.createTextNode(text);

	container = document.getElementById('container');

	container.innerHTML += '<div id="definitions"></div>';
	container.innerHTML += '<dl id="drow">What is scripting?<br\/>A script is program code that doesn’t need pre-processing (e.g. compiling) before being run.</dl>';
};

// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.
//jQuery approach
//jQuery approach

$('#jQueryExample').on('click', function() {
	$('#container')
		.append('<div id="definitions"></div>')
		.append('<dl id="drow">What is scripting?<br\/>A script is program code that doesn’t need pre-processing (e.g. compiling) before being run.</dl>');
})