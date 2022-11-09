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

// Test1
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

// Test 2
// let igor = {name: "Igor", age: 12}

// setNewUser(igor, function(u) {
// 	console.log("Добавился новый пользователь");
// 	console.log(u);
// })

// getAllUsers(function(u){
// 	console.log(u);
// });

const updUser = (id, data, cb) => {
	setTimeout(() => {
		let update;
		DB.users = DB.users.map(user => {
			if (user.id === id) {
				update = {
					...user,
					...data
				}
				return update
			}
			return user;
		});
		cb(update);
	}, getNumber(1000));
}

/*
	user = {name: Igor, age: 12, id: 12345}
	data = {age: 13, name: Игорь}

	update = {
		id: 12345
		age: 13, name: Игорь
	}
*/

const male = {
	name: "Grigoriy",
	age: 20
}
const female = {
	name: "Stasy",
	age: 10
}

// setNewUser(male, function(um) {
// 	console.log("Добавлен пользователь", um);
// 	setNewUser(female, function(uf) {
// 		console.log("Добавлен пользователь", uf);
// 		updUser(uf.id, {age: 18}, function(upd) {
// 			console.log("Обновлен пользователь", upd);
// 			getAllUsers(function(u) {
// 				u.forEach(user => {
// 					console.log(`Пользователь ${user.name} с id ${user.id} в возрасте ${user.age} лет`);
// 				})
// 			})
// 		})
// 	}) 
// })


// без callback код выполняется нелинейно и нельзя гарантировать что все пользователи успеют добавиться прежде чем выведется информация обо всех пользователях

setNewUser(male, function(um) {
	console.log("Добавлен пользователь", um);
})
setNewUser(female, function(uf) {
	console.log("Добавлен новый пользователь", uf);
}) 

// updUser(DB.users[2].id, {age: 18}, function(upd) {
// 	console.log("Обновлен пользователь", upd);
// })

getAllUsers(function(u) {
	u.forEach(user => {
		console.log(`Пользователь ${user.name} с id ${user.id} в возрасте ${user.age} лет`);
	})
})
