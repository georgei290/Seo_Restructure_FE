import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MainKeyWords = () => {
	const location = useLocation();
	console.log(location);
	return (
		<Container>
			<Wrapper>
				<Title>Keyword Ranker</Title>
				<SubTitle>
					Content Analysis is the ultimate solution for building up brand
					mention, sentiment analysis, and other content-related capabilities
					<br />
					boost rankings
				</SubTitle>
				<CardHold>
					<MyLink to={`${location.pathname}/aI-keyword-research`}>
						<Card>
							<Logo />
							<Text>AI Keyword Research</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/suggestion-difficulty`}>
						<Card>
							<Logo />
							<Text>
								Keyword <br /> Suggestion / Difficulty
							</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/suggestion-fast`}>
						<Card>
							<Logo />
							<Text>
								Keyword Suggestion <br /> (Fast)
							</Text>
						</Card>
					</MyLink>
				</CardHold>
			</Wrapper>
		</Container>
	);
};

export default MainKeyWords;

const MyLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const Text = styled.div`
	font-weight: 700;
	font-size: 17px;
	text-align: center;
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
	width: 230px;
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
	font-size: 24px;
	font-weight: 800;
	color: #3e4581;
`;
const SubTitle = styled.div`
	font-size: 14px;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 20px;
	width: 95%;
`;

const Container = styled.div`
	width: calc(100vw - 240px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	/* justify-content: space-between; */
	/* align-items: center; */
	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
	/* flex-direction: column; */
`;
