import React from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";
import KeyWordIdeaTable from "./KeyWordIdeaTable";
import ResultTable from "./ResultTable";
import KeyWordTable from "./KeyWordIdeaTable";

const SeoChecker: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Seo Checker</Title>
				<Span>Find the most profitable keywords to rank for</Span>

				<InputHold>
					<Main>
						<InputText>Search Engine Types</InputText>
						<Select>
							<option value='Google'>Google</option>
							<option value='Bing'>Bing</option>
							<option value='Yahoo'>Yahoo</option>
							<option value='Baidu'>Baidu</option>
							<option value='Naver'>Naver</option>
							<option value='Seznam'>Seznam</option>
							<option disabled value='Youtube'>
								Youtube
							</option>
						</Select>
					</Main>
					<Main>
						<InputText>Search Engine Track</InputText>
						<Select>
							<option value='Organic'>Organic</option>
						</Select>
					</Main>
				</InputHold>

				<Main>
					<InputText>Search Engine Types</InputText>
					<Input2>
						<Input3
							// value={googleKeywords}
							required={true}
							placeholder='Enter search'
							type='search'
						/>

						<Button onClick={() => {}}>Analyze</Button>
					</Input2>
				</Main>

				<hr />

				<DownData>
					<EmptyData avatar={pic} message='No result found' />

					<CardHold>
						<Card>
							<TitleCard>Keyword</TitleCard>
							<Count>hfgnm,fm</Count>
						</Card>
						<Card>
							<TitleCard>Location Code</TitleCard>
							<Count>dfgjkflg</Count>
						</Card>
						<Card>
							<TitleCard>Item Count</TitleCard>
							<Count>sfhnmg,</Count>
						</Card>
						<Card>
							<TitleCard>Se_Result Count</TitleCard>
							<Count>hfjkl</Count>
						</Card>
					</CardHold>

					<TableTitle>
						<span>Organic Keywords </span>
					</TableTitle>
					<ResultTable />
					<br/>
					<br/>

					<TableTitle>
						<span>SERP Analyzer Data </span>
					</TableTitle>
					<KeyWordTable />

				
				</DownData>
			</Wrapper>
		</Container>
	);
};

export default SeoChecker;

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
	font-family: Montserrat;
`;
const Input2 = styled.div`
	height: 35px;
	width: 98%;
	background-color: white;
	border: 1px solid #e2e2e2;
	border-radius: 2px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Button = styled.button`
	margin-right: 3px;
	height: 32px;
	width: 150px;
	color: white;
	border: none;
	outline: none;
	border-radius: 2px;
	cursor: pointer;
	background-color: #ae67fa;
	font-weight: 600;
	font-size: 12px;

	:disabled {
		background-color: silver;
		cursor: not-allowed;
	}
`;

const Select = styled.select`
	width: 100%;
	height: 35px;
	border-radius: 2px;
	border: 1px solid #e2e2e2;
	font-family: Montserrat;
	outline: none;
	padding-left: 10px;
	margin-right: 10px;
	::placeholder {
		color: gray;
	}
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const InputHold = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
const Main = styled.div`
	width: 100%;
	margin-top: 10px;
	margin-right: 40px;
`;

const InputText = styled.div`
	font-size: 12px;
	margin-bottom: 3px;
	font-weight: 600;
	/* font-weight: 600; */
`;


const TableTitle = styled.div`
	width: 100%;
	height: 60px;
	background-color: white;
	display: flex;
	margin-bottom: 10px;

	border-radius: 5px;
	align-items: center;
	span {
		margin-left: 20px;
		font-size: 20px;
		font-weight: 500;
		color: #ae67fa;
	}
`;

const Count = styled.div`
	font-size: 25px;
	font-weight: 800;
`;

const Card = styled.div`
	height: 150px;
	width: 250px;
	background-color: white;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
	flex-direction: column;
	margin-bottom: 20px;
	box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

	@media screen and (max-width: 600px) {
		margin-right: 0;
		width: 90%;
	}
`;

const CardHold = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;
	width: 100%;

	@media screen and (max-width: 768px) {
		/* justify-content: center; */
		/* align-items: center; */
	}
	/* background-color: red; */
`;

const TitleCard = styled.div`
	color: black;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 20px;
`;

const DownData = styled.div``;

const Span = styled.div`
	margin-top: 10px;
	font-weight: 600;
	width: 90%;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
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
	/* background-color: ; */
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
