import React from "react";
import styled from "styled-components";
const PopularAds = () => {
	return (
		<Hol>
			<TableHold>
				<TableTitle>
					<span>Most popular ads for the analyzed keyword</span>
				</TableTitle>
				<TableHolder>
					<TableHead>
						<Head Hwd='300px'>Domain</Head>
						<Head Hwd='150px'>Search Volume</Head>
						<Head Hwd='150px'>Related Keywords</Head>
						<Head Hwd='120px'>Search Volume</Head>
						<Head Hwd='300px'>Questions</Head>
					</TableHead>
					<Content>
						<TableBody>
							<Body Bwd='300px'>
								<BTitle cl='#1976D2'>netflix best movies</BTitle>
							</Body>
							<Body Bwd='150px'>
								<TT>550k</TT>
							</Body>
							<Body style={{ color: "#1976D2" }} Bwd='150px'>
								<TT>movies</TT>
							</Body>
							<Body Bwd='120px'>
								<TT>340M</TT>
							</Body>

							<Body style={{ color: "#1976D2" }} Bwd='300px'>
								<TT>what is the best movie of all time</TT>
							</Body>
						</TableBody>
					</Content>
				</TableHolder>
			</TableHold>
		</Hol>
	);
};

export default PopularAds;

const Hol = styled.div`
	margin-top: 40px;
`;

const TT = styled.div`
	width: 90%;
	font-size: 13px;
	/* background-color: red; */
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const BTitle = styled.div<{ cl: string }>`
	width: 90%;
	font-size: 14px;
	color: ${(props) => props.cl};
	/* background-color: black; */
`;

const TableBody = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin-top: 10px;
	border-bottom: 1px solid #f1f1f1;
	padding-bottom: 10px;
`;

const TableHolder = styled.div`
	background-color: white;
	margin-top: 10px;
	width: 100%;
	overflow-x: scroll;
`;

const Body = styled.div<{ Bwd: string }>`
	margin-left: 20px;
	/* background-color: red; */
	align-items: center;
	min-width: ${(props) => props.Bwd};
	font-weight: 600;
	/* border-right: 1px solid #f1f1f1; */
`;

const Head = styled.div<{ Hwd: string }>`
	margin-left: 20px;
	/* background-color: red; */
	align-items: center;
	font-weight: 800;

	min-width: ${(props) => props.Hwd};
`;

const TableHead = styled.div`
	display: flex;
	align-items: center;
	margin-top: 10px;

	border-bottom: 1px solid #f1f1f1;
	height: 70px;
	background-color: white;
	font-size: 13px;
`;

const TableHold = styled.div``;
const TableTitle = styled.div`
	width: 100%;
	height: 60px;
	background-color: white;
	display: flex;

	border-radius: 5px;
	align-items: center;
	span {
		margin-left: 20px;
		font-size: 20px;
		font-weight: 500;
		color: #ae67fa;
	}
`;
