import React, { useState } from "react";
import styled from "styled-components";
import SiteHeader from "./SiteHeader";
import SiteResultTable from "./SiteResultTable";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { PWASearch } from "../../../utils/APICalls";
import { PwaData } from "../../../utils/stateManagement/authState";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";

const Pwa = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);
	const readPwa = useAppSelector((state) => state.pwa);
	const dispatch = UseAppDispach();
	const SearchPwaNow = async () => {
		setLoad(true);
		await PWASearch(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				console.log(response);
				dispatch(PwaData(response?.data));
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
						SearchPwaNow();
					}}>
					<InputText>Keyword</InputText>
					<Input2>
						<Input3
						required
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							placeholder='eg. https://searchengineland.com'
							type='url'
						/>

						<Button type='submit'>Analyze</Button>
					</Input2>
				</Main>

				<DownData>
					{Object.keys(readPwa).length === 0 && (
						<div>
							{" "}
							<EmptyData
								avatar={pic}
								message='Enter Your Url in the Input Bar Above'
							/>
						</div>
					)}
					{readPwa?.status === "error" && (
						<div>
							<EmptyData
								avatar={pic}
								message='Sorry we couldnt find any result for this search.'
							/>
						</div>
					)}

					{/* <EmptyData avatar={pic} message='No result found' /> */}

					{readPwa?.status === "ok" && (
						<>
							<CardHold>
								<Card>
									<TitleCard>Device</TitleCard>
									<Count>
										{readPwa?.data?.data && readPwa?.data?.data[0]?.Device}
									</Count>
								</Card>
								<Card>
									<TitleCard>Google PWA Score</TitleCard>
									<Count>
										{readPwa?.data?.data &&
											readPwa?.data?.data[0]["Google PWA Score"]}
									</Count>
								</Card>
								<Card>
									<TitleCard>Optimized</TitleCard>
									<Count>
										{readPwa?.data?.data && readPwa?.data?.data[0]["Optimized"]}
									</Count>
								</Card>
								<Card>
									<TitleCard>Improvements</TitleCard>
									<Count>
										{readPwa?.data?.data &&
											readPwa?.data?.data[0]["Improvements"]}
									</Count>
								</Card>
							</CardHold>
							<TableTitle>
								<span>Google PWA Score </span>
							</TableTitle>
							<SiteResultTable
								data={
									readPwa?.data?.data &&
									readPwa?.data?.data[1]
								}
							/>
							<br />
							<br />
						</>
					)}
				</DownData>
			</Wrapper>
		</Container>
	);
};

export default Pwa;

const TitleCard = styled.div`
	color: black;
	font-size: 22px;
	font-weight: 500;
	margin-bottom: 20px;
`;

const Count = styled.div`
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
