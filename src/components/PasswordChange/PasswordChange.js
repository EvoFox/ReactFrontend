import { useState } from "react";
import { Container } from "../../Pages/Shared.styled";
import { ChangePassword } from "../../utils";
import { ChangeForm } from "./PasswordChange.styled";

const PasswordChange = ({ user }) => {
	const [currentPass, setCurrentPass] = useState();
	const [newPass, setNewPass] = useState();
	const [newPassVerify, setNewPassVerify] = useState();
	const [warning, setWarning] = useState("");

	const formHandler = async (e) => {
		e.preventDefault();
		if (newPass === newPassVerify && newPassVerify != null)
		{
			// Works if user field is set properly
			ChangePassword(user, currentPass, newPass);
			setWarning("");
		} else {
			await setWarning("Passwords do not match");

			alert("Passwords do not match");
		}
	};

	return (
		<Container>
			<ChangeForm onSubmit={formHandler}>
				<h1>Change Password</h1>
				<label>
					Current Password
					<input
						type="password"
						onChange={(e) => setCurrentPass(e.target.value)}
					/>
				</label>
				<label>
					New Password
					<input type="password" onChange={(e) => setNewPass(e.target.value)} />
				</label>
				<label>
					Confirm New Password
					<input
						type="password"
						onChange={(e) => setNewPassVerify(e.target.value)}
					/>
				</label>
				<sub>{warning}</sub>
				<button type="submit">Change Password</button>
			</ChangeForm>
		</Container>
	);
};

export default PasswordChange;
