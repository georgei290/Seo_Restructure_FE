import React, { useState } from "react";
import styled from "styled-components";
import AiNavigations from "./AiNavigations";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { AiRedabilityScore } from "../../../utils/APICalls";
import { readabilityData } from "../../../utils/stateManagement/authState";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";

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

const AiReadability = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);

	const user = useAppSelector((state) => state.currentUser);
	const readData = useAppSelector((state) => state.readability);
	const dispatch = UseAppDispach();
	const SearchReadabilityNow = async () => {
		setLoad(true);
		await AiRedabilityScore(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				console.log(response);
				dispatch(readabilityData(response?.data));
			},
		);
	};
	if (load) return <LoadingComp />;
	return (
		<Container>
			<AiNavigations />
			<Wrapper>
				<Main
					onSubmit={(e) => {
						e.preventDefault();
						SearchReadabilityNow();
					}}>
					<InputText>Search Keyword</InputText>
					<Input2>
						<Input3
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							// value={googleKeywords}
							required={true}
							placeholder='e.g https://www.seoreviewtools.com/valuable-backlinks-checker'
							type='url'
						/>
						<Button>Search</Button>
					</Input2>
				</Main>

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
					<BoxesDiv>
						<MiddleBox>
							<InnerMidBox style={{ borderBottom: "2px solid #283618" }}>
								<InnerTitle>Paragraph</InnerTitle>
								<InnerSub>
									{readData?.data && readData?.data?.data?.Paragraphs}
								</InnerSub>
							</InnerMidBox>
							<InnerMidBox style={{ borderBottom: "2px solid #00AFB9" }}>
								<InnerTitle>Sentences</InnerTitle>
								<InnerSub>
									{" "}
									{readData?.data && readData?.data?.data?.Sentences}
								</InnerSub>
							</InnerMidBox>
						</MiddleBox>
						<MainBox>
							<TopBox style={{ borderBottom: "2px solid #FAA307" }}>
								<div>
									<Toptitle>Reading time</Toptitle>
									<TopSub>
										{" "}
										{readData?.data && readData?.data?.data["Reading time"]}
									</TopSub>
								</div>

								<div>
									<Toptitle>Analysis Data</Toptitle>
									<TopSub>
										{" "}
										{readData?.data && readData?.data?.data["Speaking time"]}
									</TopSub>
								</div>
								<div>
									<Toptitle>avg. word length</Toptitle>
									<TopSub>
										{" "}
										{readData?.data && readData?.data?.data["avg. word length"]}
									</TopSub>
								</div>
								<div>
									<Toptitle>avg. sentence length</Toptitle>
									<TopSub>
										{" "}
										{readData?.data &&
											readData?.data?.data["avg. sentence length"]}
									</TopSub>
								</div>
							</TopBox>
						</MainBox>
						<MiddleBox>
							<InnerMidBox style={{ borderBottom: "2px solid #8ECAE6" }}>
								<InnerTitle>Words</InnerTitle>
								<InnerSub>
									{readData?.data && readData?.data?.data?.Words}
								</InnerSub>
							</InnerMidBox>
							<InnerMidBox style={{ borderBottom: "2px solid #6A4C93" }}>
								<InnerTitle>Characters</InnerTitle>
								<InnerSub>
									{" "}
									{readData?.data && readData?.data?.data?.Characters}
								</InnerSub>
							</InnerMidBox>
						</MiddleBox>
					</BoxesDiv>
				)}

				<br />
				<br />

				{readData?.status === "ok" && (
					<>
						<TableTitle>
							<span>Readability </span>
						</TableTitle>
						<TableContainer>
							<Table>
								<thead>
									<tr>
										<Th>#</Th>
										<Th>Flesch Kincaid Reading Ease</Th>
										<Th></Th>
									</tr>
								</thead>
								<tbody>
									{Object.keys(
										readData?.data?.data["Flesch Kincaid Reading Ease"],
									).map((itemKey, index) => (
										<tr key={index}>
											<Td>{index + 1}</Td>
											<Td style={{ fontWeight: "bold" }}>{itemKey}</Td>
											<Td>
												{
													readData?.data?.data["Flesch Kincaid Reading Ease"][
														itemKey
													]
												}
											</Td>
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

export default AiReadability;

const BoxesDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;
const MainBox = styled.div`
	height: 200px;
	width: 350px;
	background-color: #fff;
	margin: 10px 0;
	padding: 15px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const TopBox = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const Toptitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 20px;
`;
const TopSub = styled.div`
	font-size: 25px;
	font-weight: 800;
	padding-bottom: 40px;
`;
const ButtomBoxHold = styled.div`
	display: flex;
	justify-content: space-between;
`;
const TomBox = styled.div``;
const ButtomTitle = styled.div`
	font-size: 9px;
	font-weight: 600;
	margin-bottom: 15px;
`;
const TomSub = styled.div`
	font-size: 18px;
	font-weight: 800;
`;
const MiddleBox = styled.div``;
const InnerMidBox = styled.div`
	height: 90px;
	width: 250px;
	background-color: #fff;
	margin: 10px;
	padding: 10px;
`;

const InnerTitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 30px;
`;
const InnerSub = styled.div`
	font-size: 25px;
	font-weight: 800;
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

const Main = styled.form`
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
