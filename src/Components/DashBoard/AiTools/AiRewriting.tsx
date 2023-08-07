import React, { useState } from "react";
import styled from "styled-components";
import AiNavigations from "./AiNavigations";
import LocData from "../../../utils/ReusedComp/Locations.json";
import LangData from "../../../utils/ReusedComp/Languages.json";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import { AiRewrittingSearch } from "../../../utils/APICalls";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { rewriteData } from "../../../utils/stateManagement/authState";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";

interface TableDataItem {
	column1: string;
	column2: string;
	column3: string;
}

const TableContainer = styled.div`
	overflow-x: auto;
	padding-bottom: 30px;
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

const AiRewritting = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const [location, setLocation] = useState<string>("United States");
	const [language, setLanguage] = useState<string>("English");

	const user = useAppSelector((state) => state.currentUser);
	const readData = useAppSelector((state) => state.rewrite);
	const dispatch = UseAppDispach();
	const SearchRewritingNow = async () => {
		setLoad(true);
		await AiRewrittingSearch(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				// console.log(response);
				dispatch(rewriteData(response?.data));
			},
		);
	};
	if (load) return <LoadingComp />;

	return (
		<Container>
			<AiNavigations />
			<Wrapper>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						SearchRewritingNow();
					}}
					>
					<Main>
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
								<InputText>Writing style</InputText>
								<Select
								// required
								// onChange={(e) => {
								// setLocation(e.target.value);
								// }}
								>
									<option>Persuasive</option>
								</Select>
							</Main>

							<Main>
								<InputText>Tone of voice</InputText>
								<Select
								// required
								// onChange={(e) => {
								// setLocation(e.target.value);
								// }}
								>
									<option>Assertive</option>
								</Select>
							</Main>

							<Main>
								<InputText>Audience</InputText>
								<Select
								// required
								// onChange={(e) => {
								// setLocation(e.target.value);
								// }}
								>
									<option>0</option>
								</Select>
							</Main>
						</InputHold>
						<br />

						<InputText>Search Keyword</InputText>
						<Input2>
							<Input3
								onChange={(e) => {
									setKeyword(e.target.value);
								}}
								// value={googleKeywords}
								required={true}
								placeholder='e.g Keyword difficulty is a SEO metric'
								type='search'
							/>
							<Button>Search</Button>
						</Input2>
					</Main>
				</form>
				<br />
				<br />

				{Object.keys(readData).length === 0 && (
					<div>
						{" "}
						<EmptyData
							avatar={pic}
							message='Enter Your keyword in the Input Bar Above'
						/>
					</div>
				)}
				{readData?.status === "error" && (
					<div>
						<EmptyData
							avatar={pic}
							message='Sorry we couldnt find any result for this search.'
						/>
					</div>
				)}

				{readData?.status === "ok" && (
					<>
						<TableTitle>
							<span>ai content rewriter </span>
						</TableTitle>
						<TableContainer>
							<Table>
								<thead>
									<tr>
										<Th>#</Th>
										<Th>Ai Rewritter</Th>
										<Th></Th>
									</tr>
								</thead>
								<tbody>
									{Object.keys(readData?.data).map((itemKey, index) => (
										<tr key={index}>
											<Td>{index + 1}</Td>
											<Td style={{ fontWeight: "bold" }}>{itemKey}</Td>
											<Td>{readData?.data[itemKey]}</Td>
										</tr>
									))}
								</tbody>
							</Table>
						</TableContainer>
					</>
				)}
			</Wrapper>
		</Container>
	);
};

export default AiRewritting;

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
	/* margin-top: 15px; */
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

const Main = styled.div`
	width: 100%;
	/* margin-top: 10px; */
	margin-right: 40px;
`;

const InputText = styled.div`
	font-size: 12px;
	margin-bottom: 3px;
	font-weight: 600;
	/* font-weight: 600; */
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
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
