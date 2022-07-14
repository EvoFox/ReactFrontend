import styled from "styled-components";

export const ChangeForm = styled.form`
	border: 1px solid;
	width: 600px;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: space-between;

	label {
		display: flex;
		justify-content: space-between;
		width: 550px;
		word-wrap: break-word;
		background-color: aliceblue;
		padding: 5px;
		input {
			width: 350px;
		}
	}

	button {
		width: 200px;
	}
	sub {
		width: 560px;
		font-size: 1.3em;
		line-height: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: darkred;
		background-color: salmon;
	}
`;
