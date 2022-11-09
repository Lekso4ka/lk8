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


let arr = [1,2,3];
let newArr = arr.map(function(el) {
	if (el % 2 === 0) {
		return `<div>${el}</div>`
	}
	return el;
})
console.log(newArr);


let buyBread = new Promise(function(resolve, reject) {
	let n = Math.random(); // 0 - 1
	if (n > 0.3) {
		resolve("Хлеб куплен"); // асинхронный код выполнился успешно
	} else {
		reject("Брат оставил семью без ужина"); // асинхронный код потерялся
	}
});

// console.log(buyBread);
buyBread
	.then(result => console.log(result))
	.catch(err => console.log(err))
