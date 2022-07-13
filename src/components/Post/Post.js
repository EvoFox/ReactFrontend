import { PostWrapper } from "./Post.styled";

const Post = ({ author, image, alt, key }) => {
	return (
		<PostWrapper key={key}>
			<h2>{author}</h2>
			<img src={image} alt={alt} />
		</PostWrapper>
	);
};

export default Post;
