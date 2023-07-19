import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const MainContent = () => {
	const location = useLocation();
	console.log(location);
	return (
		<Container>
			<Wrapper>
				<Title>Content Analyzer</Title>
				<SubTitle>
					With On-Page API you can obtain a variety of on-page SEO data, which
					you can use to eliminate hidden website errors and, consequently,
					<br />
					boost rankings
				</SubTitle>
				<CardHold>
					<MyLink to={`${location.pathname}/density`}>
						<Card>
							<Logo />
							<Text>Keyword density</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/extract-metatags`}>
						<Card>
							<Logo />
							<Text>Extract Metatags</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/title-tags`}>
						<Card>
							<Logo />
							<Text>Title Tag</Text>
						</Card>
					</MyLink>
					<MyLink to={`${location.pathname}/links`}>
						<Card>
							<Logo />
							<Text>Links</Text>
						</Card>
					</MyLink>
				</CardHold>
			</Wrapper>
		</Container>
	);
};

export default MainContent;

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
