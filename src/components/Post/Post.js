import { PostWrapper } from "./Post.styled";

const Post = ({ author, image, key }) => {
	return (
		<PostWrapper key={key}>
			<h2>{author}</h2>
			<img src={image} />
		</PostWrapper>
	);
};

export default Post;
