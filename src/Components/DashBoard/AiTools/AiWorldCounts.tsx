import React, { useState } from "react";
import styled from "styled-components";
import AiNavigations from "./AiNavigations";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { AiWordCount } from "../../../utils/APICalls";
import { wordData } from "../../../utils/stateManagement/authState";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";

const AiWorldCounts = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);
	const readData = useAppSelector((state) => state.word);
	const dispatch = UseAppDispach();
	const SearchWordNow = async () => {
		setLoad(true);
		await AiWordCount(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				console.log(response);
				dispatch(wordData(response?.data));
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
						SearchWordNow();
					}}>
					<InputText>Search Keyword</InputText>
					<Input2>
						<Input3
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							// value={googleKeywords}
							required={true}
							placeholder='e.g https://searchengineland.com'
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

				<br />
				<br />

				{readData?.status === "ok" && (
					<MiddleBox>
						<InnerMidBox bb='1px solid red'>
							<InnerTitle>Word count total</InnerTitle>
							<InnerSub>
								{readData?.data?.data &&
									readData?.data?.data[0]["Word count total"]}
							</InnerSub>
						</InnerMidBox>
						<InnerMidBox bb='1px solid green'>
							<InnerTitle>Corrected word count</InnerTitle>
							<InnerSub>
								{readData?.data?.data &&
									readData?.data?.data[0]["Corrected word count"]}
							</InnerSub>
						</InnerMidBox>
						<InnerMidBox bb='1px solid yellow'>
							<InnerTitle>Anchor text words</InnerTitle>
							<InnerSub>
								{readData?.data?.data &&
									readData?.data?.data[0]["Anchor text words"]}
							</InnerSub>
						</InnerMidBox>
						<InnerMidBox bb='1px solid blue'>
							<InnerTitle>Anchor Percentage</InnerTitle>
							<InnerSub>
								{readData?.data?.data &&
									readData?.data?.data[0]["Anchor Percentage"]}
							</InnerSub>
						</InnerMidBox>
					</MiddleBox>
				)}

				<br />
				<br />
			</Wrapper>
		</Container>
	);
};

export default AiWorldCounts;

const MiddleBox = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
const InnerMidBox = styled.div<{ bb: string }>`
	height: 90px;
	width: 210px;
	background-color: #fff;
	margin: 10px;
	padding: 10px;
	border-bottom: ${(props) => props.bb};
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
