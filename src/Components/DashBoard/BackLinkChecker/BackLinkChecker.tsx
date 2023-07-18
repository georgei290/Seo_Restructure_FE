import styled from "styled-components";
import ViewingBacklink from "./ViewingBacklink";

const BackLinkChecker = (props: any) => {
	return (
		<Container>
			<Wrapper>
				<Title>BackLink Checker</Title>
				<hr />

				<ViewingBacklink />
			</Wrapper>
		</Container>
	);
};

export default BackLinkChecker;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 600;
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 95%;

	hr {
		border: none;
		height: 1px;
		background-color: #e2e2e2;
	}

	@media screen and (max-width: 768px) {
		margin-left: 20px;
	}
`;

const Container = styled.div`
	width: calc(100vw - 235px);
	min-height: calc(100vh - 60px);
	display: flex;
	overflow: hidden;

	flex-direction: column;
	background-color: #f8f8ff;
	margin-top: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
