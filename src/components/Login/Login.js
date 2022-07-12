import { useState } from "react";
import { Content } from "../../App.styled";
import { signUp } from "../../utils";
import { LoginImage } from "./Login.styled";

const Login = ({setter}) => {
	// Placeholder
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();
	const submitHandler = async (e) => {
		e.preventDefault();
		await signUp(username, email, pass, setter);
	};

	return (
		<Content>
			<LoginImage image={""} />
			<form onSubmit={submitHandler}>
				<input onChange={(e) => setUsername(e.target.value)} />
				<input onChange={(e) => setEmail(e.target.value)} />
				<input onChange={(e) => setPass(e.target.value)} />
				<button type="submit">Submit</button>
			</form>
		</Content>
	);
};

export default Login;
