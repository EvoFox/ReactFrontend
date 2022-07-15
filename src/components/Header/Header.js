import { Link } from "react-router-dom";
import { BarWrapper } from "./Header.styled";

const Header = () => {
	return (
		<BarWrapper>
			<ul>
				<li>
					<Link to="/profile">Profile</Link>
				</li>
				<li>
					<Link to="/gallery">Gallery</Link>
				</li>
			</ul>
		</BarWrapper>
	);
};

export default Header;
