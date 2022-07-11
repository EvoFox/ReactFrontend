import { PostWrapper } from "./Post.styled";

const Post = ({ author, image }) => {
	return (
		<PostWrapper>
			<h2>{author}</h2>
			<img src={image} />
		</PostWrapper>
	);
};

export default Post;
