import React from "react";
import styled from "styled-components";
import pix from "./img/google.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signinUser } from "../../utils/APICalls";
import { loginUser } from "../../utils/stateManagement/authState";
import LoadingState from "../../utils/LoadingState";
import { UseAppDispach } from "../../utils/stateManagement/store";

interface iData {
	email: string;
	password: string;
}

const SignIn = () => {
	const dispatch = UseAppDispach();
	const navigate = useNavigate();
	const [shown, setShown] = React.useState<boolean>(false);
	const [loadingState, setLoadingState] = React.useState<boolean>(false);

	const Navigate = useNavigate();

	const schema = yup.object().shape({
		email: yup.string().email().required("please enter a valid email address"),
		password: yup.string().required("please enter a valid password"),
	});

	const {
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<iData>({
		resolver: yupResolver(schema),
	});

	const mutation = useMutation({
		mutationKey: ["register"],
		mutationFn: signinUser,

		onSuccess: async (data) => {
			dispatch(loginUser(data));
			setLoadingState(false);
			navigate("/seochecker");
		},
	});

	// 	function to be added to the button
	const onSubmit: SubmitHandler<iData> = async (value: any) => {
		setLoadingState(true);
		mutation.mutate(value);
	};

	return (
		<>
			{loadingState ? <LoadingState /> : null}
			<Container>
				<Wrapper>
					<Text>
						<span>Welcome Back User</span>
					</Text>
					<TextDecs>
						<span>Sign in to interact with your account</span>
					</TextDecs>

					<SocialCon>
						<MainHold>
							<GoogleImg src={pix} />
							<span>Sign in with google</span>
						</MainHold>
					</SocialCon>

					<LinHold>
						<Line></Line>
						<div>or</div>
						<Line></Line>
					</LinHold>

					<Myform onSubmit={handleSubmit(onSubmit)}>
						<HoldInput>
							<Lable>Email</Lable>
							<Input
								placeholder='eg : peterparker223@gmail.com'
								{...register("email")}
							/>
							<Error>{errors.email && "Email is required"}</Error>
						</HoldInput>
						<HoldInput>
							<Lable>Password</Lable>
							<Passshow>
								<Input2
									type={shown ? "text" : "password"}
									placeholder='password'
									{...register("password")}
								/>
								<Hide
									onClick={() => {
										setShown(!shown);
									}}>
									{shown ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
								</Hide>
							</Passshow>
							<Error>{errors.password && "Password is required"}</Error>
						</HoldInput>

						<Button>Sign In</Button>
					</Myform>
					<Already>
						<OPP>
							<Acc>Don't have an account?</Acc> &nbsp;{" "}
							<Sig
								onClick={() => {
									Navigate("/signup");
								}}>
								Sign up Here
							</Sig>
						</OPP>
					</Already>
				</Wrapper>
			</Container>
		</>
	);
};

export default SignIn;

const Error = styled.div`
	font-size: 10px;
	color: red;
`;

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
	cursor: pointer;
	@media screen and (max-width: 600px) {
		font-size: 11px;
	}
`;

const Already = styled.div`
	width: 75%;
	height: 20px;
	display: flex;
	justify-content: center;
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
	/* width: 175px; */

	height: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;

	span {
		font-size: 15px;
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
	height: 30px;
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
		font-weight: 900;
		color: #ae67fa;
		font-size: 30px;
		/* font-family: Imported; */
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
