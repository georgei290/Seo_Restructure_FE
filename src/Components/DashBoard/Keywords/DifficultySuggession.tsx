import React, { useState } from "react";
import styled from "styled-components";

import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import {
	DifficultyData,
	ResearchData,
} from "../../../utils/stateManagement/authState";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { KeywordDifficultiesSuggession } from "../../../utils/APICalls";
import LocData from "../../../utils/ReusedComp/Locations.json";
import LangData from "../../../utils/ReusedComp/Languages.json";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";
import KeyHead from "./KeyHead";

const TableContainer = styled.div`
	overflow-x: auto;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color: white;
	overflow-x: scroll;

	tbody > tr:nth-child(odd) {
		background-color: #fafafc;
	}
`;

const Th = styled.th`
	padding: 8px;
	text-align: left;
	border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;
`;

const Td = styled.td`
	padding: 8px;
	text-align: left;
	border-right: 1px solid #ddd;
	white-space: pre-wrap;
	word-wrap: break-word;

	&:last-child {
		border-right: none;
	}
`;

const DifficultySuggession = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const [location, setLocation] = useState<string>("United States");
	const [language, setLanguage] = useState<string>("English");
	const user = useAppSelector((state) => state.currentUser);
	const readDiff = useAppSelector((state) => state.difficulty);
	const dispatch = UseAppDispach();
	const SearchKeywordDifficultyNow = async () => {
		setLoad(true);
		await KeywordDifficultiesSuggession(
			keyword,
			user?.data?._id,
			user?.token,
			language,
			location,
		).then(async (response: any) => {
			setLoad(false);
			console.log(response);
			dispatch(DifficultyData(response));
		});
	};
	if (load) return <LoadingComp />;

	return (
		<Container>
			<KeyHead />
			<Wrapper>
				<Main
					onSubmit={(e) => {
						e.preventDefault();
						SearchKeywordDifficultyNow();
					}}>
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
					<br />

					<InputText>Keyword</InputText>
					<Input2>
						<Input3
							required
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							placeholder='eg. SEO Tools'
							type='search'
						/>

						<Button>Analyze</Button>
					</Input2>
				</Main>
				<br />
				<br />
				<br />
				{Object.keys(readDiff).length === 0 && (
					<div>
						{" "}
						<EmptyData
							avatar={pic}
							message='Enter Your keyword in the Input Bar Above'
						/>
					</div>
				)}

				{readDiff?.status === "error" && (
					<div>
						<EmptyData
							avatar={pic}
							message='Sorry we couldnt find any result for this search.'
						/>
					</div>
				)}

				{readDiff?.difficult?.status === "ok" && (
					<div>
						<TableTitle>
							<span>keyword difficulty</span>
						</TableTitle>
						<TableContainer>
							<Table>
								<thead>
									<tr>
										<Th>#</Th>
										<Th>Keyword</Th>
										<Th>difficulty</Th>
									</tr>
								</thead>
								<tbody>
									{readDiff?.difficult?.data?.data?.map(
										(item: any, index: any) => (
											<tr key={index}>
												<Td></Td>
												<Td>{item?.keyword}</Td>
												<Td>{item["keyword difficulty"]}</Td>
											</tr>
										),
									)}
								</tbody>
							</Table>
						</TableContainer>
					</div>
				)}
				<br />

				{readDiff?.suggestion?.status === "ok" && (
					<div>
						<TableTitle>
							<span>Keyword Suggestion</span>
						</TableTitle>
						<TableContainer>
							<Table>
								<thead>
									<tr>
										<Th>#</Th>
										<Th>Keyword</Th>
										<Th>competition</Th>
										<Th>cpc</Th>
										<Th>search_volume</Th>
									</tr>
								</thead>
								<tbody>
									{readDiff?.suggestion?.data?.data?.map(
										(item: any, index: any) => (
											<tr key={index}>
												<Td></Td>
												<Td>{item?.keyword}</Td>
												<Td>{item?.competition}</Td>
												<Td>{item?.cpc}</Td>
												<Td>{item?.search_volume}</Td>
											</tr>
										),
									)}
								</tbody>
							</Table>
						</TableContainer>
					</div>
				)}
			</Wrapper>
		</Container>
	);
};

export default DifficultySuggession;

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

const InputText = styled.div`
	font-size: 12px;
	margin-bottom: 3px;
	font-weight: 600;
	/* font-weight: 600; */
`;

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
	font-family: Montserrat;
`;

const Main = styled.form`
	width: 100%;
	margin-top: 10px;
	margin-right: 40px;
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

const Wrapper = styled.div`
	margin-left: 25px;
	margin-top: 10px;
	/* width : 98% */
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
