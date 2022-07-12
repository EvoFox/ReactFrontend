// Houses fetch requests
export const signUp = async (username, email, pass, setter) => {
	try {
		const res = await fetch("http://localhost:5001/user", {
			method: "POST", // HTTP Verb
			headers: { "Content-Type": "application/json" }, // Sending JSON data instructions
			body: JSON.stringify({ username, email, pass }), // Body turned into JSON with stringify
		});
		const data = await res.json();
		console.log(data);
		setter(data.user.username);
	} catch (error) {
		console.log(error);
	}
};
