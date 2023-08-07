import React, { useState } from "react";
import styled from "styled-components";
import SiteHeader from "./SiteHeader";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import { SpeedTestData } from "../../../utils/stateManagement/authState";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { PageSpeedSearch } from "../../../utils/APICalls";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";






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

const SpeedTest = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);
	const readSpeed = useAppSelector((state) => state.speed);
	const dispatch = UseAppDispach();
	const SearchSpeedNow = async () => {
		setLoad(true);
		await PageSpeedSearch(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				console.log(response);
				dispatch(SpeedTestData(response?.data));
			},
		);
	};
	if (load) return <LoadingComp />;

	return (
		<Container>
			<SiteHeader />
			<Wrapper>
				<Main
					onSubmit={(e) => {
						e.preventDefault();
						SearchSpeedNow();
					}}
					
					>
					<InputText>Keyword</InputText>
					<Input2>
						<Input3
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							placeholder='eg. https://searchengineland.com'
							type='url'
						/>

						<Button>Analyze</Button>
					</Input2>
				</Main>
				<br />
				<br />
				<br />
				{Object.keys(readSpeed).length === 0 && (
					<div>
						{" "}
						<EmptyData
							avatar={pic}
							message='Enter Your Url in the Input Bar Above'
						/>
					</div>
				)}

				{readSpeed?.status === "error" && (
					<div>
						<EmptyData
							avatar={pic}
							message='Sorry we couldnt find any result for this search.'
						/>
					</div>
				)}

				{readSpeed?.status === "ok" && (
					<div>
						<TableTitle>
							<span>Speed Result</span>
						</TableTitle>
						<TableContainer>
							<Table>
								<thead>
									<tr>
										<Th>Device</Th>
										<Th>Google PageSpeed Score</Th>
										<Th>Optimized</Th>
										<Th>Improments</Th>
									</tr>
								</thead>
								<tbody>
									{readSpeed?.data?.data[0]?.map((item: any, index: any) => (
										<tr key={index}>
											<Td>{item.Device}</Td>
											<Td>{item["Google PageSpeed score"]}</Td>
											<Td>{item["Optimized"]}</Td>
											<Td>{item["Improvements"]}</Td>
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

export default SpeedTest;

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
