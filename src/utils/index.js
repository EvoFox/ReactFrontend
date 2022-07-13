// Houses fetch requests
const endpoint = {
	user: "http://localhost:5001/user", //Contins a POST method
	login: "http://localhost:5001/login", // Contains a POST and a GET method
	changePassword: "http://localhost:5001/change-password", // Contains a PUT method
	deleteUser: "http://localhost:5001/delete-user", // Contains a DELETE method
};
export const signUp = async (username, email, pass, setter) => {
	try {
		const res = await fetch(endpoint.user, {
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
		// Define request variables to be defined based on the presence of a JSON Web Token
		let method = undefined;
		let headers = undefined;
		let body = undefined;

		if (!token) {
			// If no token, set method to POST, headers to only include Content-Type and the Body to contain the username and password as JSON
			console.log("No token");
			method = "POST";
			headers = { "Content-Type": "application/json" };
			body = JSON.stringify({
				username,
				pass,
			});
		} else {
			// If a token is provided, set method to GET, and headers to include Content-Type and Authorization
			console.log("token");
			method = "GET";
			headers = { "Content-Type": "application/json", Authorization: token };
		}

		// Send the request based on variables and store as res
		const res = await fetch(endpoint.login, {
			method: method,
			headers: headers,
			body: body,
		});

		// Get the data from res as JSON and set the username using the drilled down function
		const data = await res.json();
		console.log(data);
		setter(data.user);
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
