import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-scroll";
import log from "../Images/logo.png";
const Footer = () => {
	return (
		<Container id='Contact'>
			<Title>
				Social Media Its Ways
				<br /> Of Our Excellence.
			</Title>

			<InputHold>
				<Input placeholder='Enter your email' />
				<Button>
					<span>Get Started</span>
					<IconHolder>
						<AiOutlineArrowRight />
					</IconHolder>
				</Button>
			</InputHold>
			<FootHold>
				{" "}
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
				<ButtonHold>
					<BsFacebook
						style={{
							marginRight: "15px",
							cursor: "pointer",
							fontSize: "22px",
							marginLeft: "15px",
						}}
					/>
					<BsInstagram
						style={{
							marginRight: "15px",
							cursor: "pointer",
							fontSize: "22px",
							marginLeft: "15px",
						}}
					/>
					<AiOutlineTwitter
						style={{
							marginRight: "15px",
							cursor: "pointer",
							fontSize: "22px",
							marginLeft: "15px",
						}}
					/>
				</ButtonHold>
			</FootHold>
		</Container>
	);
};

export default Footer;

const FootHold = styled.div`
	width: 80%;
	justify-content: space-between;
	align-items: center;
	display: flex;
	padding-bottom: 30px;
	border-bottom: 1px solid #969595;
	margin-top: 150px;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
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
	font-weight: 900;
	font-family: Imported;
	cursor: pointer;

	:hover {
		transform: scale(0.98);
	}
`;
const ButtonHold = styled.div`
	@media screen and (max-width: 768px) {
		margin-top: 40px;
	}
`;

const Logo = styled.img`
	width: 130px;
	/* background-color: #ae67fa; */
	height: 40px;
	object-fit: contain;

	/* margin-left: 70px; */

	@media screen and (max-width: 790px) {
		/* margin-left: 30px; */
		margin-bottom: 10px;
	}
`;
const NavHolder = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
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

	@media screen and (max-width: 768px) {
		margin-bottom: 10px;
		font-size: 20px;
	}
`;

const InputHold = styled.div`
	background-color: #1c1e32;
	color: white;
	height: 40px;
	width: 300px;
	display: flex;
	align-items: center;
	padding: 10px;
	border-radius: 10px;
	margin-top: 30px;
`;
const Input = styled.input`
	height: 100%;
	border: none;
	outline: none;
	flex: 1;
	background-color: transparent;
	color: white;

	::placeholder {
		color: #9f9fac;
		font-family: Imported;
	}
`;
const Button = styled.div`
	display: flex;
	align-items: center;
	background-color: #ae67fa;
	border-radius: 5px;
	height: 45px;
	width: 190px;
	transition: all 350ms;
	cursor: pointer;
	span {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
		border-radius: 5px;
		font-size: 15px;
	}

	:hover {
		transform: scale(0.98);
	}
`;
const IconHolder = styled.div`
	height: 40px;
	width: 30px;
	background: #e3a8f1;
	color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.div`
	color: #ae67fa;
	margin-top: 100px;
	font-size: 35px;
	font-weight: bold;
`;

const Container = styled.div`
	/* height: 500px; */
	background-color: #fcfcff;
	display: flex;
	/* justify-content: center; */
	text-align: center;
	flex-direction: column;
	align-items: center;
	padding-bottom: 30px;
`;
