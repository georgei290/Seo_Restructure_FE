import React, { useState } from "react";
import styled from "styled-components";

import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import {
	ResearchData,
} from "../../../utils/stateManagement/authState";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { AiKeywordResearch } from "../../../utils/APICalls";
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

const KeyWordResearch = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);
	const readResearch = useAppSelector((state) => state.research);
	const dispatch = UseAppDispach();
	const SearchKeywordResearchNow = async () => {
		setLoad(true);
		await AiKeywordResearch(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				// console.log(response);
				dispatch(ResearchData(response?.data));
			},
		);
	};
	if (load) return <LoadingComp />;

	return (
		<Container>
			<KeyHead />
			<Wrapper>
				<Main
					onSubmit={(e) => {
						e.preventDefault();
						SearchKeywordResearchNow();
					}}>
					<InputText>Keyword</InputText>
					<Input2>
						<Input3
							required
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							placeholder='eg. AI writer'
							type='search'
						/>

						<Button>Analyze</Button>
					</Input2>
				</Main>
				<br />
				<br />
				<br />
				{Object.keys(readResearch).length === 0 && (
					<div>
						{" "}
						<EmptyData
							avatar={pic}
							message='Enter Your keyword in the Input Bar Above'
						/>
					</div>
				)}

				{readResearch?.status === "error" && (
					<div>
						<EmptyData
							avatar={pic}
							message='Sorry we couldnt find any result for this search.'
						/>
					</div>
				)}

				{readResearch?.status === "ok" && (
					<div>
						<TableTitle>
							<span>{readResearch?.data["keyword input"]}</span>
						</TableTitle>
						<TableContainer>
							<Table>
								<thead>
									<tr>
										<Th>#</Th>
										<Th>Generated Keyword</Th>
									</tr>
								</thead>
								<tbody>
									{readResearch?.data?.data?.map((item: any, index: any) => (
										<tr key={index}>
											<Td></Td>
											<Td>{item}</Td>
										</tr>
									))}
								</tbody>
							</Table>
						</TableContainer>
					</div>
				)}
			</Wrapper>
		</Container>
	);
};

export default KeyWordResearch;

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
