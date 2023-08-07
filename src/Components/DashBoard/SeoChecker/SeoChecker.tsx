import React, { useState } from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";
import ResultTable from "./ResultTable";
import KeyWordTable from "./KeyWordIdeaTable";
import LocData from "../../../utils/ReusedComp/Locations.json";
import LangData from "../../../utils/ReusedComp/Languages.json";
import { SeoSearchAnalyzer, SeoSearchRanking } from "../../../utils/APICalls";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import { SeoSearchData } from "../../../utils/stateManagement/authState";

const SeoChecker: React.FC = () => {
	const [location, setLocation] = useState<string>("United States");
	const [language, setLanguage] = useState<string>("English");
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);
	const readDataSeo = useAppSelector((state) => state.seoData);
	const dispatch = UseAppDispach();

	console.log("rw", Object.keys(readDataSeo).length === 0);

	const SearchNow = async () => {
		setLoad(true);
		await SeoSearchRanking(
			keyword,
			user?.data?._id,
			language,
			location,
			user?.token,
		).then(async (response1: any) => {
			await SeoSearchAnalyzer(keyword, user?.data?._id, user?.token).then(
				(response2: any) => {
					console.log({
						ranking: response1?.data?.data,
						analyzer: response2?.data?.data,
					});

					dispatch(
						SeoSearchData({
							ranking: response1?.data?.data,
							analyzer: response2?.data?.data,
						}),
					);

					setLoad(false);
				},
			);
		});
	};

	if (load) return <LoadingComp />;

	return (
		<Container>
			<Wrapper>
				<Title>Seo Checker</Title>
				<Span>Find the most profitable keywords to rank for</Span>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						SearchNow();
					}}
					
					>
					<InputHold>
						<Main>
							<InputText> Select Language</InputText>
							<Select
								required
								onChange={(e) => {
									setLanguage(e.target.value);
								}}>
								{LangData?.map((languages, i: number) => (
									<option key={i} value={languages.value}>
										{languages.name}
									</option>
								))}
							</Select>
						</Main>
						<Main>
							<InputText>Select Location</InputText>
							<Select
								required
								onChange={(e) => {
									setLocation(e.target.value);
								}}>
								{LocData?.map((locations, i: number) => (
									<option key={i} value={locations.value}>
										{locations.name}
									</option>
								))}
							</Select>
						</Main>
					</InputHold>
					<Main>
						<InputText>Search Engine Types</InputText>

						<Input2>
							<Input3
								onChange={(e) => {
									setKeyword(e.target.value);
								}}
								// value={googleKeywords}
								required
								placeholder='Enter search'
								type='search'
							/>
							<Button type='submit'>Analyze</Button>
						</Input2>
					</Main>
				</form>

				<hr />
				<DownData>
					{load ? (
						<>loading</>
					) : (
						<>
							{Object.keys(readDataSeo).length === 0 ? (
								<>
									<EmptyData avatar={pic} message='No result found' />
								</>
							) : (
								<>
									{readDataSeo?.analyzer && (
										<CardHold>
											<Card>
												<TitleCard>Tool Name</TitleCard>
												<Count>SERP analyzer</Count>
											</Card>
											<Card>
												<TitleCard>Keyword</TitleCard>
												<Count>{readDataSeo?.analyzer?.keyword}</Count>
											</Card>
											<Card>
												<TitleCard>Country Code</TitleCard>
												<Count>{readDataSeo?.analyzer?.country}</Count>
											</Card>
											<Card>
												<TitleCard>Language</TitleCard>
												<Count>{readDataSeo?.analyzer?.language}</Count>
											</Card>
										</CardHold>
									)}

									{readDataSeo?.ranking?.data?.length >= 1 && (
										<>
											<TableTitle>
												<span>Rank Checker </span>
											</TableTitle>
											<ResultTable data={readDataSeo?.ranking?.data} />
										</>
									)}

									<br />
									<br />
									{Object.keys(readDataSeo?.analyzer?.data)?.length >=1 && (
										<>
											<TableTitle>
												<span>Analyzer </span>
											</TableTitle>
											<KeyWordTable
												data={Object.entries(readDataSeo?.analyzer?.data)}
											/>
										</>
									)}
								</>
							)}
						</>
					)}
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
