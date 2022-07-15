import Header from "../../components/Header/Header";
import PasswordChange from "../../components/PasswordChange/PasswordChange";
import { Container } from "../Shared.styled";
import { ContentWrapper } from "../Profile/Profile.styled";

const Profile = ({ user, setter }) => {
	console.log(user);
	return (
		<Container>
			<Header />
			<ContentWrapper>
				<PasswordChange user={user} setter={setter} />
			</ContentWrapper>
		</Container>
	);
};

export default Profile;
