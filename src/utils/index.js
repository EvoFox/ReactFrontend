// Houses fetch requests
export const signUp = async (username, email, pass, setter) => {
	try {
		const res = await fetch("http://localhost:5001/user", {
			method: "POST", // HTTP Verb
			headers: { "Content-Type": "application/json" }, // Sending JSON data instructions
			body: JSON.stringify({ username, email, pass }), // Body turned into JSON with stringify
		});
		const data = await res.json();
		setter(data.user.username);
	} catch (error) {
		console.log(error);
	}
};

export const Login = async (username, pass, token, setter) => {
	try {
		let res = undefined;
		if (!token) {
			res = await fetch("http://localhost:5001/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					username,
					pass,
				}),
			});
		} else {
			res = await fetch("http://localhost:5001/user", {
				method: "GET",
				headers: { "Content-Type": "application/json", Authorization: token },
			});
		}
		const data = await res.json();
		setter(data.user.username);
	} catch (error) {
		console.log(error);
	}
};

export const ChangePassword = async (username, pass, newPass) => {
	try {
		const res = await fetch("http://localhost:5001/change-password", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, pass, newPass }),
		});
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};

export const DeleteUser = async (username, email, pass) => {
	try {
		const res = await fetch("http://localhost:5001/delete-user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, email, pass }),
		});
		const data = await res.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
};
