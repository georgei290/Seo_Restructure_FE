import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const AiTools = () => {
	const location = useLocation();
	return (
		<Container>
			<Wrapper>
				<Title>AI Tools</Title>
				<SubTitle>
					Keyword Data Explorer will help you appreciate the scale of
					information that Domranker Keyword provides.
				</SubTitle>
				<CardHold>
					<MyLink to={`${location.pathname}/text-rewritting`}>
						<Card>
							<Logo />
							<Text>Text Rewriting</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/readability-score`}>
						<Card>
							<Logo />
							<Text>Readability Score</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/word-count`}>
						<Card>
							<Logo />
							<Text>Word Count</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/website-age`}>
						<Card>
							<Logo />
							<Text>Website Age</Text>
						</Card>
					</MyLink>
				</CardHold>
			</Wrapper>
		</Container>
	);
};

export default AiTools;

const MyLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

const Text = styled.div`
	font-weight: 700;
	font-size: 17px;
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
