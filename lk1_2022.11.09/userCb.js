const DB = {
	users: [
		{
			name: "Sergey",
			age: 22,
			id: new Date().getTime()
		}
	]
}

console.log(DB.users[0].id);
const getNumber = (max) => Math.floor(Math.random() * max);

// cb - функция, которая будет работать как надо программисту
// Ctrl + R 		- обновить страницу
// Ctrl + Shift + R - обновить страницу с очищением кеша
// Ctrl + /  		- закомментировать


const getAllUsers = (cb) => {
	setTimeout(() => {
		cb(DB.users);
	}, getNumber(1000));
}

// getAllUsers(function(u){
// 	console.log(u)
// });

// date - дата (число/месяц/год/время)
// data - данные (информация о чем-либо)

const setNewUser = (data, cb) => {
	setTimeout(() => {
		const user = {
			id: new Date().getTime(),
			...data
		}
		DB.users.push(user);
		cb(user);
	}, getNumber(1000))
}

/*
	data = {name: "Igor", age: 12}
	user = {
		name: "Igor", age: 12, id: 124872469823
	}
*/
let igor = {name: "Igor", age: 12}

setNewUser(igor, function(u) {
	console.log("Добавился новый пользователь");
	console.log(u);
})

getAllUsers(function(u){
	console.log(u)
});







