import React from "react";
import styled from "styled-components";
import pic from "../Images/Shape.png";
import pic3 from "../Images/Shape2.png";
import pic4 from "../Images/Shape3.png";
import pic2 from "../Images/gg.png";
import pic7 from "../Images/gg2.png";
import pic8 from "../Images/gg3.png";

const HowItWork = () => {
	return (
		<Wrap>
			<Container>
				<First>
					<Hold>
						<Tit>How it Works?</Tit>
						<Desc>
							Resolving neglected sir tolerably but existence conveying for.
							<br /> Day his put off unaffected literature partiality
							inhabiting.
						</Desc>
					</Hold>
					<CardMain bg={pic}>
						<Holded>
							<MainImage src={pic2} />
							<Text>Intelligence</Text>
							<MainTitle>
								Marketing intelligence (MI) is the everyday information relevant
								to a company’s markets
							</MainTitle>
						</Holded>
					</CardMain>
				</First>
				<Second>
					<CardMain bg={pic3}>
						<Holded>
							<MainImage style={{ width: "170px" }} src={pic7} />
							<Text>Marketing</Text>
							<MainTitle>
								Marketing intelligence is necessary when entering a foreign
								market. determines the intelligence needed
							</MainTitle>
						</Holded>
					</CardMain>
					<CardMain bg={pic4}>
						<Holded>
							<MainImage style={{ width: "170px" }} src={pic8} />
							<Text>External data</Text>
							<MainTitle>
								This allows them to see current key performance ..
							</MainTitle>
						</Holded>
					</CardMain>
				</Second>
			</Container>
		</Wrap>
	);
};

export default HowItWork;

const Wrap = styled.div`
	display: flex;

	flex-wrap: wrap;
	justify-content: center;
	background-color: #f8f8ff;
	padding: 20px;
	width: 100%;
`;

const MainTitle = styled.div`
	width: 250px;
	font-size: 13px;
	object-fit: fill;
	font-weight: 500;
`;

const MainImage = styled.img`
	width: 130px;
	margin-bottom: 30px;
	object-fit: cover;
`;

const Holded = styled.div`
	z-index: 10;
`;

const Text = styled.div`
	margin-bottom: 5px;
	font-weight: 700;
`;
const CardMain = styled.div<{ bg: string }>`
	height: 300px;
	width: 280px;
	background-color: #e8f3fb;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	color: #3e4581;
	text-align: center;
	margin-bottom: 30px;
	overflow: hidden;

	::before {
		content: "";
		background-image: url(${(props) => props.bg});
		/* background-color: red; */
		height: 300px;
		position: absolute;
		width: 300px;
		background-position: center;
		background-size: fill;
		/* background-repeat: no-repeat; */
		overflow: hidden;
	}

	@media screen and (max-width: 600px) {
		width: 90%;
	}
`;

const Hold = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center;
	text-align: left; */
	flex-direction: column;
	margin-bottom: 30px;
`;

const Tit = styled.div`
	font-size: 40px;
	font-weight: bold;
	color: #ae67fa;
	margin-bottom: 10px;
	text-align: left;

	@media screen and (max-width: 600px) {
		font-size: 25px;
	}
`;
const Desc = styled.div`
	color: #3e4581;

	@media screen and (min-width: 700px) and (max-width: 790px) {
		width: 250px;
	}
	@media screen and (min-width: 300px) and (max-width: 500px) {
		width: 95%;
	}
`;

const First = styled.div`
	margin-right: 40px;

	@media screen and (max-width: 600px) {
		margin-right: 0;
	}
`;
const Second = styled.div`
	@media screen and (max-width: 600px) {
		width: 100%;
	}
`;
const Container = styled.div`
	display: flex;
	margin-top: 50px;
	/* flex-wrap: wrap; */
	justify-content: center;
	background-color: #f8f8ff;

	@media screen and (max-width: 600px) {
		flex-wrap: wrap;
	}
`;
