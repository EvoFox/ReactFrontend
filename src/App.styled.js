import styled from "styled-components";

export const Container = styled.div`
	text-align: center;
	background-color: var(--c-primary);

	height: fit-content;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const Content = styled.div`
	width: 80%;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
`;

export const LogIn = styled.button`
	height: 50px;
	width: 100px;
`;
