import React from "react";
import styled from "styled-components";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Plans = () => {
	return (
		<Container id='Services'>
			<Hold>
				<h1>
					<a
						href=''
						className='typewrite'
						data-period='2000'
						data-type='[ "Hi, Im Si.", "I am Creative.", "I Love Design.", "I Love to Develop." ]'>
						<span className='wrap'></span>
					</a>
				</h1>
				<Tit>
					Our plans scale with your
					<br /> product
				</Tit>
				<Desc>in virtual space through communication platforms.</Desc>
			</Hold>

			<CardHolder>
				<Card bg='white'>
					<Title>For Starter</Title>
					<Money>$50</Money>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Feedback Categorization</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Features prioritization</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Real-time collaboration</span>
					</IconHold>

					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Essential dev tools integrations</span>
					</IconHold>
					<MyButton2>Get Started</MyButton2>
				</Card>
				<Card style={{ color: "white" }} bg='#481177'>
					<Title>For Teams</Title>
					<Money>$70</Money>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Feedback Categorization</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Features prioritization</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Real-time collaboration</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Feedback loop notifications</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Essential dev tools integrations</span>
					</IconHold>
					<MyButton3>Get Started</MyButton3>
				</Card>
				<Card bg='white'>
					<Title>For Company</Title>
					<Money>$100</Money>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Feedback Categorization</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Features prioritization</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Real-time collaboration</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Feedback loop notifications</span>
					</IconHold>
					<IconHold>
						<BsFillCheckCircleFill style={{ marginRight: "10px" }} />
						<span>Essential dev tools integrations</span>
					</IconHold>
					<MyButton2>Get Started</MyButton2>
				</Card>
			</CardHolder>
		</Container>
	);
};

export default Plans;

const CardHolder = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const MyButton3 = styled.button`
	width: 70%;
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
const MyButton2 = styled.button`
	width: 70%;
	height: 40px;
	border: none;
	outline: none;
	color: #f1966e;
	border: 1px solid #f1966e;
	border-radius: 5px;
	transition: all 350ms;
	font-family: "Montserrat", sans-serif;
	font-weight: 500;
	cursor: pointer;
	margin-right: 20px;
	background-color: transparent;
	cursor: pointer;

	margin-top: 25px;

	:hover {
		transform: scale(0.98);
	}
`;

const Card = styled.div<{ bg: string }>`
	height: 400px;
	width: 300px;

	border-radius: 10px;
	background-color: ${(props) => props.bg};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #3e4581;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	margin: 10px;

	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;
const Money = styled.div`
	font-size: 30px;
	color: #ae67fa;
	margin-bottom: 12px;
`;
const IconHold = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;
const Title = styled.div`
	font-size: 20px;
	margin-bottom: 10px;
`;

const Hold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	flex-direction: column;
	margin-bottom: 30px;
	margin-top: 20px;
`;

const Tit = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: #ae67fa;
	margin-bottom: 10px;

	@media screen and (max-width: 600px) {
		font-size: 25px;

		br {
			display: none;
		}
	}
`;
const Desc = styled.div`
	color: #3e4581;
`;

const Container = styled.div`
	background-color: #fcfcff;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding: 30px;
	flex-direction: column;
`;
