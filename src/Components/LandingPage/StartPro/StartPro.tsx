import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StartPro = () => {
	return (
		<Container>
			<Wrap>
				<CountHold>
					<Count>
						<span>25,356</span>
						<Pro>Projects Done</Pro>
					</Count>
					<Count>
						<span>1M+</span>
						<Pro>Projects Done</Pro>
					</Count>
					<Count>
						<span>95%</span>
						<Pro>Happy Customers</Pro>
					</Count>
				</CountHold>
				<Wan>Want to start a Project With us?</Wan>
				<Desc>
					Warrant present garrets limited cordial in inquiry to. Supported me
					sweetness behaviour shameless excellent so arranging.
				</Desc>
				<NavLink to='/signup'>
					<MyButton3>Get Started</MyButton3>
				</NavLink>
			</Wrap>
		</Container>
	);
};

export default StartPro;

const Desc = styled.div`
	font-size: 17px;
	color: #3e4581;

	@media screen and (min-width: 300px) and (max-width: 500px) {
		width: 96%;
	}
`;
const Wrap = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 60%;
	/* flex-wrap: wrap; */
	text-align: center;

	@media screen and (max-width: 700px) {
		width: 100%;

		justify-content: center;
		flex-wrap: wrap;
	}
`;
const Wan = styled.div`
	font-size: 40px;
	color: #ae67fa;
	margin-top: 30px;
	margin-bottom: 20px;

	font-weight: 500;
`;
const CountHold = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	/* flex-wrap: wrap; */
	margin-top: 80px;

	@media screen and (max-width: 700px) {
		justify-content: center;
		flex-direction: column;
	}
`;
const Count = styled.div`
	margin-bottom: 30px;
	span {
		font-size: 40px;
		color: #ae67fa;
		/* padding-bottom: 20px; */
	}
`;
const Pro = styled.div`
	color: #3e4581;
	margin-top: 5px;
`;

const MyButton3 = styled.button`
	width: 150px;
	height: 40px;
	border: none;
	outline: none;
	color: white;
	/* border: 1px solid #f1966e; */
	border-radius: 5px;
	transition: all 350ms;
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	cursor: pointer;
	margin-right: 20px;
	background-color: #ae67fa;
	cursor: pointer;

	margin-top: 25px;

	:hover {
		transform: scale(0.98);
	}
`;

const Container = styled.div`
	/* height: 400px; */
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #f8f3ff;
	margin-top: 100px;
	padding-bottom: 40px;
`;
