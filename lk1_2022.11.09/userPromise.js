console.log("Обещания!")
const DB = {
	users: [
		{
			name: "Sergey",
			age: 22,
			id: new Date().getTime()
		}
	]
}
const getNumber = (max) => Math.floor(Math.random() * max);

const getAllUsers = () => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(DB.users);
		}, getNumber(1000));
	})
}

// Test 1
// getAllUsers()
// 	.then(u => {
// 		console.log(u);
// 	})

const setNewUser = (data) => {
	return new Promise(resolve => {
		setTimeout(() => {
			const user = {
				id: new Date().getTime(),
				...data
			}
			DB.users.push(user);
			resolve(user);
		}, getNumber(1000))
	})
}

// Test 2
// let igor = {name: "Igor", age: 12}

// setNewUser(igor)
// 	.then(u => {
// 		console.log(u);
// 	})

const updUser = (id, data) => {
	return new Promise(resolve => {
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
			resolve(update);
		}, getNumber(1000));
	})
}

// Test 3
// let sergey = {name: "Серёжа"};
// updUser(DB.users[0].id, sergey)
// 	.then(u => {
// 		console.log(u);
// 	})


