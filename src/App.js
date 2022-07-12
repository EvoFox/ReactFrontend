import { useState, useEffect } from "react";

import { Container, Content } from "./App.styled";

import "./App.css";
import Post from "./components/Post/Post";
import Login from "./components/Login/Login";

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
		setLoggedIn((previousValue) => !previousValue);
	};
	return (
		<Container>
			<Content>
				<Login setter={setUser} />
				<p>{user}</p>
				{user ? (
					<h2>Not Logged In</h2>
				) : (
					photos.map((item, i) => {
						return (
							<Post author={item.author} image={item.download_url} key={i} />
						);
					})
				)}
			</Content>
		</Container>
	);
};

export default App;
