import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SiteFlow = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Site Flow</Title>
				<p>Expand Yout Business Data</p>

				<CardHold>
					<MyLink to='/siteflow/mobile-support'>
						<Card>
							{/* <Logo src={pic1} /> */}
							<Text>Mobile Support Test</Text>
						</Card>
					</MyLink>

					<MyLink to='/siteflow/speed-test'>
						<Card>
							{/* <Logo src={pic2} /> */}
							<Text>Speed Test</Text>
						</Card>
					</MyLink>

					<MyLink to='/siteflow/headers'>
						<Card>
							{/* <Logo src={pic3} /> */}
							<Text>Header</Text>
						</Card>
					</MyLink>

					<MyLink style={{ filter: "grayscale(100%)" }} to='/siteflow/pwa'>
						<Card>
							{/* <Logo src={pic4} /> */}
							<Text>PWA Test</Text>
							
						</Card>
					</MyLink>

				</CardHold>
			</Wrapper>
		</Container>
	)
};

export default SiteFlow;

const MyLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const Text = styled.div`
	font-weight: 700;
	font-size: 20px;
`;

const Logo = styled.img`
	height: 80px;
	width: 80px;
	/* background-color: red; */
	margin-bottom: 10px;
	object-fit: contain;
`;

const Card = styled.div`
	height: 170px;
	width: 250px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
	flex-direction: column;
	margin-bottom: 20px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

	@media screen and (max-width: 600px) {
		margin-right: 0;
		width: 300px;
	}
`;

const CardHold = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	@media screen and (max-width: 768px) {
		justify-content: center;
		align-items: center;
	}
	/* background-color: red; */
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 100%;

	@media screen and (max-width: 768px) {
		margin-left: 0;
	}
`;

const Container = styled.div`
	width: calc(100vw - 240px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	/* align-items: center; */
	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
	/* flex-direction: column; */
`;
