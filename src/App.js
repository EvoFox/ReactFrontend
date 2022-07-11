import { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { Container, HeadContainer, Content } from "./App.styled";
import Header from "./components/Header/Header";

import "./App.css";

const App = () => {
	const [user, setUser] = useState("Something");

	return (
		<Container>
			<BrowserRouter>
				<HeadContainer></HeadContainer>

				<></>
			</BrowserRouter>
		</Container>
	);
};

export default App;
