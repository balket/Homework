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

document.getElementById('w3c').onclick = function() {

	var drow, art, word, definition, wordTextNode, definitionTextNode, boldTag, dlTag, dtTag, ddTag;

	word = 'Drupal';
	wordTextNode = document.createTextNode(word);
	definition = 'Drupal is a free, open-source web development platform for online content and user communities. Drupal powers some of the busiest sites on the web, and can be adapted to virtually any visual design. Drupal runs over a million sites, including WhiteHouse.gov, World Economic Forum, Stanford University, and Examiner.com.';
	definitionTextNode = document.createTextNode(definition);

	art = document.createElement('div');
	art.setAttribute('id', 'art');
	art.setAttribute('style', 'display: block;');

	document.body.appendChild(art);

	drow = document.createElement('div');
	drow.setAttribute('id', 'drow');
	drow.setAttribute('style', 'display: block;');

	boldTag = document.createElement('strong');

	dlTag = document.createElement('dl');

	dtTag = document.createElement('dt');

	ddTag = document.createElement('dd');

	drow.appendChild(dlTag);
	dlTag.appendChild(dtTag);
	dtTag.appendChild(boldTag);
	boldTag.appendChild(wordTextNode);
	dlTag.appendChild(ddTag);	
	ddTag.appendChild(definitionTextNode);

	document.body.appendChild(drow);
};




// Problem 2

// Do the same thing as problem 1 only insert your HTML using the innerHTML
// property of the DIV with id="definitions".

document.getElementById('innerHTML').onclick = function() {

	var definitions;
	definitions = document.getElementById('definitions');
	definitions.innerHTML += '<div id="art"></div>';
	definitions.innerHTML += '<div id="drow"><dl><dt><strong>Drupal</strong></dt><dd>Drupal is a free, open-source web development platform for online content and user communities. Drupal powers some of the busiest sites on the web, and can be adapted to virtually any visual design. Drupal runs over a million sites, including WhiteHouse.gov, World Economic Forum, Stanford University, and Examiner.com.</dd></dl></div>';
};

// Problem 3

// Do the same as Problem 2 only use the jQuery code we did in class. For 
// this problem you won't need to worry about setting up a click handler.
// Just worry about the code that does the text appending.
//jQuery approach
//jQuery approach

//jQuery approach
$('#jQuery').on('click', function() {
	$('#definitions')
		.append('<div id="art"></div>')
		.append('<div id="drow"><dl><dt><strong>Drupal</strong></dt><dd>Drupal is a free, open-source web development platform for online content and user communities. Drupal powers some of the busiest sites on the web, and can be adapted to virtually any visual design. Drupal runs over a million sites, including WhiteHouse.gov, World Economic Forum, Stanford University, and Examiner.com.</dd></dl></div>');
})
