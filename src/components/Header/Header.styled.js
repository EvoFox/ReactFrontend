import styled from "styled-components";

export const BarWrapper = styled.nav`
	height: 3em;
	width: 100%;
	background-color: lightgray;

	padding: 15px;

	ul {
		display: flex;
		flex-direction: row-reverse;
		justify-content: flex-start;
		list-style: none;
	}
	ul li {
		appearance: a;
		-moz-appearance: a;
		width: 200px;
		height: 2em;

		border: 1px solid;
		margin-bottom: 25px;
		text-align: center;
	}
`;
