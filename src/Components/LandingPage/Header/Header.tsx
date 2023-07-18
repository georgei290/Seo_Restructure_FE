import React, { useEffect } from "react";
import styled from "styled-components";
import SideBarComp from "../SideBar/SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import log from "../Images/logo.png";
const Header = () => {
	const [sideShow, setSideShow] = React.useState(false);

	const toggleSideBar = () => {
		setSideShow(!sideShow);
	};

	useEffect(() => {
		if (sideShow) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, []);

	return (
		<Container>
			<Logo src={log} />
			<NavHolder>
				<Nav offset={-100} smooth={true} duration={500} to='Home'>
					Home
				</Nav>
				<Nav offset={-100} smooth={true} duration={500} to='About'>
					About Us
				</Nav>
				<Nav offset={-100} smooth={true} duration={500} to='Services'>
					Services
				</Nav>
				<Nav offset={-100} smooth={true} duration={500} to='Contact'>
					Contact Us
				</Nav>
			</NavHolder>
			<ButtonHold to='/signup'>
				<MyButton>Login</MyButton>
			</ButtonHold>

			<Menu onClick={toggleSideBar}>
				<GiHamburgerMenu />
			</Menu>

			{sideShow ? <SideBarComp toggleSideBar={toggleSideBar} /> : null}
		</Container>
	);
};

export default Header;

const Menu = styled.div`
	display: none;
	@media screen and (max-width: 960px) {
		display: block;
		margin-right: 30px;
		font-size: 30px;
		cursor: pointer;
	}
`;

const MyButton = styled.button`
	width: 100px;
	height: 48px;
	border: none;
	outline: none;
	color: white;
	background-color: #ae67fa;
	border-radius: 5px;
	transition: all 350ms;
	font-weight: 600;
	font-family: "Montserrat", sans-serif;
	cursor: pointer;

	:hover {
		transform: scale(0.98);
	}
`;
const ButtonHold = styled(NavLink)`
	margin-right: 70px;
	text-decoration: none;

	@media screen and (max-width: 790px) {
		display: none;
	}
`;

const Logo = styled.img`
	width: 130px;

	height: 40px;
	margin-left: 70px;
	object-fit: contain;
	/* background-color: red; */

	@media screen and (max-width: 790px) {
		margin-left: 30px;
	}
`;
const NavHolder = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 790px) {
		margin-right: 10px;
		display: none;
	}
`;
const Nav = styled(Link)`
	margin-right: 25px;
	margin-left: 25px;
	color: #3e4581;
	cursor: pointer;

	transition: all 350ms;
	:hover {
		transform: scale(0.98);
		text-decoration: underline;
	}
`;

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	background-color: #f8f8ff;
	z-index: 999;
`;
