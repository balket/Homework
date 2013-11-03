// Homework 4

// This homework assignment will give you practice working with objects. 
// All problems will be based on the object definition below.


// Object: Athlete

// Properties: 
// name
// height
// age
// country of origin
// medals
// is the athelete an Olympian? (hint: Boolean)

// Methods (i.e. functions): 

// introduce = returns 'Hello! My name is _______ and I am from ________'. 
// Fill in the blanks with the values name and country of origin, respectively.

// addMedal = This takes a string as a parameter and adds it to the array of medals. It does not return anything.


// Problem 1
// Create the object above by setting the properties one by one.


var athlete1 = {};
// athlete.foo = "bar"
// athlete.method = function () {
// 
// }
athlete1.name = 'Haile Gebrselassie';
athlete1.height = '1.65m';
athlete1.age = 40;
athlete1.countryOrigin = 'Ethiopian';
athlete1.addMedal = ['3 gold', '4 bronth'];
athlete1.anolympian = true;
athlete1.introduce = "Hello! My name is " +  athlete1.name + " and I am from " + athlete1.countryOrigin;
athlete1.getMethod = function () {
return this.introduce;
};


// Problem 2
// Create the object using the associate array syntax (i.e. strings within square brackets).

var athlete2 = {};
	// athlete['foo'] = "bar"
// athlete['method'] = function() {
// 
// }

athlete2['name'] = 'Usain Bolt';
athlete2['height'] = '1.95m';
athlete2['age'] = 27;
athlete2['countryOrigin'] = 'Jamaica';
athlete1['addMedal'] = ['3 gold', '4 Bronze'];
athlete2['anolympian'] = true;
athlete2['introduce']= "Hello! My name is " +  athlete2.name + " and I am from " + athlete2.countryOrigin;
athlete2['method'] = function () {
return this.introduce; 
};


// Problem 3
// Create the same object using ONE object literal

// set key/value pairs inside here
var athlete3 = {
name: 'Bezunesh Bekele',
height: '1.45m',
age: 30,
gender: 'F',
countryOrigin: 'Ethiopian',
addMedal: ['3 gold', '4 bronth'],
introduce: 'Hello! My name is Bezunesh Bekele and I am from Ethiopian',
anolympian: true,
method:function(){
	return this.introduce;
 }
}


// Problem 4
// Create a prototype for athelete. See below for examples:
// https://github.com/galdamez/ca276-fall2013/blob/master/week8/prototypes.html

// PROBLEM BELOW IS OPTIONAL
function Athelete() {

this.name = 'Gabby Douglas';
this.height = '1.50m';
this.age = 17;
this.countryOrigin = 'USA';
this.addMedal = ['3 gold', '4 bronth'];
this.introduce = 'Hello! My name is " + this.name + this.countryOrigin;';
this.anolympian = true;
this.method = function () {
return (this.name + this.countryOrigin);
}
}
// Problem 5


// Create a prototype that inherits from Athlete. Pick from any of the types below:
// TennisPlayer
// TableTennisPlayer
// Swimmer
// Sprinter
// …or make your own!
// 
// This new prototype definition will add one method that returns a string message. 
// It will also add a property unique to this type of athlete.
// 
// You get to decide how to define these.
// 
// For example I may want to have a Swimmer type that does the following.
// 
// Parameters in order are: name, age, country, height (in meters), medals, is he an Olympian?, preferred brand
// 
// var s1 = new Swimmer('Michael Phelps', 28, 'USA', 1.93 ['gold', 'gold', 'silver'], true, 'Speedo');
// 
// The last property, preferred brand, is the one I added.
// 
// Method below returns 'Splash splash splash!'
// 
// s1.swim();
function Swimmer() {
this.name = 'Ye Shiwen';
this.age = 17;
this.height = 1.72;
this.countryOrigin = 'China';
this.addMedal = ['gold', 'gold', 'silver'];
this.anOlympian = true;
this.brand='Speedo';
this.method = function () {
return 'Splash splash splash!';
 }
}

var s1;

var s1 = new Swimmer('Ye Shiwen', 17, 'China', 1.72 ['gold', 'gold', 'silver'], true, 'Speedo');
