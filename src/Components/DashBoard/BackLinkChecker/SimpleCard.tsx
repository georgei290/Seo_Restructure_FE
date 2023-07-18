import React from "react";
import styled from "styled-components";

interface Iprops {
	BackTitle: string;
	count: any;
}

const SimpleCard: React.FC<Iprops> = ({ BackTitle, count }) => {
	return (
		<Main>
			<Title>{BackTitle}</Title>
			<MainTitle>{count}</MainTitle>
		</Main>
	);
};

export default SimpleCard;

const Title = styled.div`
	font-weight: 600;
`;

const MainTitle = styled.div`
	font-weight: 800;
	font-size: 25px;
	margin-top: 8px;
`;

const Main = styled.div`
	width: 290px;
	height: 100px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 10px;

	@media screen and (max-width: 320px) {
		width: 95%;
	}
`;
