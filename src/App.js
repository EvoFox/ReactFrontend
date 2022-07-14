import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import LoginForm from "./Pages/LoginForm/LoginForm";
import Gallery from "./Pages/Gallery/Gallery";
import Profile from "./Pages/Profile/Profile";
const App = () => {
	const [photos, setPhotos] = useState([]);
	const [user, setUser] = useState();

	const fetchImages = async () => {
		const res = await fetch("https://picsum.photos/v2/list");
		const data = await res.json();
		setPhotos(data);
	};

	useEffect(() => {
		fetchImages();
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginForm setter={setUser} user={user} />} />
				<Route
					path="/gallery"
					element={<Gallery user={user} photos={photos} />}
				/>
				<Route path="/profile" element={<Profile user={user} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
