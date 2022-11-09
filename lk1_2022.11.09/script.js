// console.log("Hello JavaScript!");

// setTimeout(function() {
// 	console.log("Hey!");
// }, 1000);

// setTimeout(function() {
// 	console.log("Ouch!");
// }, 0);

// console.log("Hey again =)");

// 1 => 7 => 4

// 0ms => 1 => 7 => 4


/*
	Event Loop
*/

let first = function() {
	console.log("First");
}
let second = function() {
	first();
}
let third = function() {
	second();
}
third(); // third => second => first => console.log










