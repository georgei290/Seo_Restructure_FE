import React from "react";
import styled from "styled-components";
import pix from "./img/google.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ForgetPass = () => {
	const [shown, setShown] = React.useState<boolean>(false);
	const [shown2, setShown2] = React.useState<boolean>(false);

	return (
		<Container>
			<Wrapper>
				<Text>
					<span>Forget Password</span>
				</Text>
				<TextDecs>
					<span>Enter your email to recover your password</span>
				</TextDecs>

				<Myform>
					<HoldInput>
						<Lable>Email</Lable>
						<Input placeholder='eg : peterparker223@gmail.com' />
					</HoldInput>

					<Button>Recover Account</Button>
				</Myform>
			</Wrapper>
		</Container>
	);
};

export default ForgetPass;

const OPP = styled.div`
	display: flex;
`;

const Acc = styled.div`
	font-size: 14px;
	font-weight: 800;

	@media screen and (max-width: 600px) {
		font-size: 11px;
	}
`;
const Sig = styled.div`
	color: red;
	font-size: 14px;
	font-weight: 800;

	@media screen and (max-width: 600px) {
		font-size: 11px;
	}
`;

const Already = styled.div`
	width: 90%;
	height: 20px;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media screen and (max-width: 600px) {
		width: 80%;
	}
`;

const Button = styled.button`
	width: 100%;
	height: 40px;
	background-color: #ae67fa;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-weight: 800;
	border: none;
	border-radius: 6px;
	margin-top: 7px;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		tranform: scale(0.9);
	}
`;

const Input2 = styled("input")`
	width: 100%;
	height: 40px;
	outline: none;
	background-color: #ae67fa40;
	border: none;
	padding-left: 10px;
	margin-top: 5px;
	border-radius: 4px;

	:hover {
		outline: none;
	}
`;
const Hide = styled.div`
	position: absolute;
	cursor: pointer;
	right: 20px;
	top: 20px;
`;
const Passshow = styled.div`
	width: 100%;
	display: flex;
	position: relative;
`;

const Lable = styled.label`
	font-width: 900;
`;

const Input = styled.input`
	height: 40px;
	outline: none;
	background-color: #ae67fa40;
	border: none;
	padding-left: 10px;
	margin-top: 5px;
	border-radius: 4px;

	:hover {
		outline: none;
	}
`;
const HoldInput = styled.div`
	width: 100%;
	display: flex;
	height: 73px;
	flex-direction: column;
`;

const Myform = styled("form")`
	width: 90%;
	height: auto;
	padding-bottom: 5px;
`;

const Line = styled("div")`
	width: 160px;
	height: 1px;
	background-color: black;
`;

const LinHold = styled("div")`
	width: 90%;
	height: 45px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	div {
		font-weight: 800;
		font-size: 15px;
	}
`;

const GoogleImg = styled("img")`
	width: 40px;
	height: 40px;
	object-fit: contain;
`;

const MainHold = styled("div")`
	width: 190px;

	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		font-size: 18px;
		font-weight: 600;
	}
`;

const SocialCon = styled("div")`
	width: 90%;
	height: 40px;
	background-color: #e8eaff;
	border-radius: 5px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 20px;

	div {
	}
`;

const TextDecs = styled("div")`
	width: 100%;
	height: 45px;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		font-size: 15px;
		font-weight: 700;
		color: #000000;
	}
`;

const Text = styled.div`
	width: 100%;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		font-width: 900;
		color: #ae67fa;
		font-size: 35px;
		font-family: Imported;
	}
`;

const Container = styled("div")`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 400px;
	height: auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20px;
	padding-bottom: 20px;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;
