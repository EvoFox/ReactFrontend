import { useState } from "react";
import { Navigate } from "react-router-dom";

import { signUp, Login } from "../../utils";
import { Container } from "../Shared.styled";
import {
	LoginWrapper,
	Image,
	FormWrapper,
	Form,
	SwitchButton,
} from "./LoginForm.styled";

const LoginForm = ({ setter, user }) => {
	// Placeholder
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [pass, setPass] = useState();
	const [existingAccount, setExistingAccount] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		if (!existingAccount) {
			await signUp(username, email, pass, setter);
		} else {
			// Something
			await Login(username, pass, null, setter);
		}
	};

	return (
		<Container>
			<LoginWrapper>
				{user && <Navigate to="/gallery" />}
				<Image src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png" />
				<FormWrapper>
					<Form onSubmit={submitHandler}>
						<input
							onChange={(e) => setUsername(e.target.value)}
							placeholder="Username"
						/>
						{!existingAccount && (
							<input
								onChange={(e) => setEmail(e.target.value)}
								placeholder="User@Email.com"
							/>
						)}
						<input
							onChange={(e) => setPass(e.target.value)}
							type="password"
							placeholder="password"
						/>
						<button type="submit">
							{existingAccount ? "Log In" : "Sign Up"}
						</button>
					</Form>
					<SwitchButton onClick={() => setExistingAccount(!existingAccount)}>
						{existingAccount ? "Don't" : "Already"} have an account?{" "}
					</SwitchButton>
				</FormWrapper>
			</LoginWrapper>
		</Container>
	);
};

export default LoginForm;
