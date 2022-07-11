import styled from "styled-components";

export const Container = styled.div`
	text-align: center;
	background-color: var(--c-primary);

	height: fit-content;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

export const HeadContainer = styled.header`
	width: 100%;
	height: 150px;

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	margin-bottom: 6%;
	background-color: var(--c-primary-dark);
`;

export const Content = styled.div`
	width: calc(100vw - 100px);
	min-height: 100vh;

	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

