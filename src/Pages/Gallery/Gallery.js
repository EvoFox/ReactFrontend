import { Container } from "../Shared.styled";
import { GalleryWrapper } from "../Gallery/Gallery.styled";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { Navigate } from "react-router-dom";

const Gallery = ({ user, photos }) => {
	return (
		<Container>
			<Header />
			<GalleryWrapper>
				{!user && <Navigate to={"/"} />}
				{/* <Header /> display flex, row. height 150px. contains username as a drop down maybe, or perhaps a simple logout button, username can be clicked to go to profile */}
				{photos.map((item, i) => {
					return (
						<Post
							author={item.author}
							image={item.download_url}
							alt={`random image by author ${item.author}`}
							key={i}
						/>
					);
				})}
			</GalleryWrapper>
		</Container>
	);
};

export default Gallery;
