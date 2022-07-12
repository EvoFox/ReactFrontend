import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LoginForm from "./Pages/LoginForm/LoginForm";
import Gallery from "./Pages/Gallery/Gallery";
const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [user, setUser] = useState();

	const fetchImages = async () => {
		const res = await fetch("https://picsum.photos/v2/list");
		const data = await res.json();
		setPhotos(data);
	};

	useEffect(() => {
		fetchImages();
	}, [loggedIn]);

	const logIn = () => {
		// Debug function to simulate login
		setLoggedIn((previousValue) => !previousValue);
	};
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginForm setter={setUser} user={user} />} />
				<Route path="/gallery" element={<Gallery user={user} />} />
			</Routes>
		</BrowserRouter>

		// <Container>
		// 	<Content>
		// 		<Login setter={setUser} />
		// 		<p>{user}</p>
		// 		{!user ? (
		// 			<h2>Not Logged In</h2>
		// 		) : (
		// 			photos.map((item, i) => {
		// 				return (
		// 					<Post author={item.author} image={item.download_url} key={i} />
		// 				);
		// 			})
		// 		)}
		// 	</Content>
		// </Container>
	);
};

export default App;
