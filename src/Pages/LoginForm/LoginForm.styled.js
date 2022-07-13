import styled from "styled-components";



export const LoginWrapper = styled.div`
	width: 80%;
	padding-top: 5%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

export const Image = styled.image`
	/* Size and Position Data */
	height: 95%;
	width: 45%;
	border-radius: 15px;
	background-color: blue;
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 45%;
	height: 95%;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;

	input {
		margin-bottom: 50px;
		width: 60%;
		height: 30px;
		border-radius: 15px;
	}
	button {
		border-radius: 15px;
		width: 150px;
		height: 50px;
	}
`;
export const SwitchButton = styled.button`
	align-self: center;
	justify-self: center;
	margin-top: 20px;
	border-radius: 15px;
	width: 150px;
	height: 50px;
`;
