import React, { useState } from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import DashboardLoader from "../../../utils/ReusedComp/Skeleton";
import { useMutation } from "@tanstack/react-query";
import pic from "../images/5.svg";

import _ from "lodash";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import { KeyWordSearch } from "../../../utils/APICalls";
import { StoreKeywordData } from "../../../utils/stateManagement/authState";
import { Link } from "react-router-dom";

const KewWordTable = () => {
	const user = useAppSelector((state: any) => state.currentUser);
	const readKeyword = useAppSelector((state: any) => state.keywordData);
	const dispatch = UseAppDispach();


	const [target, setTarget] = useState("");

	const SearchKeyword = useMutation({
		mutationFn: (target: any) => KeyWordSearch(target),
		onSuccess: (data) => {
			// console.log("keyword", data);
			dispatch(StoreKeywordData(data?.data[0]));
			console.log(data);
			// setGoogleKeyWords("");
		},
	});
	return (
		<Container>
			<Wrapper>
				<Title>Keyword Data</Title>
				<Span>Find the most profitable keywords to rank for</Span>

				<Main>
					<InputText>Search Keyword</InputText>
					<Input2>
						<Input3
							// value={googleKeywords}
							required={true}
							onChange={(e) => {
								setTarget(e.target.value);
							}}
							placeholder='Enter website url eg. www.google.com'
							type='search'
						/>
						<Button
							onClick={() => {
								SearchKeyword.mutate({
									target: target,
								});
							}}>
							Search
						</Button>
					</Input2>
				</Main>
				<hr />

				{SearchKeyword?.isLoading ? <DashboardLoader /> : null}

				{readKeyword?.result ? (
					<>
						{SearchKeyword?.isLoading ? (
							<DashboardLoader />
						) : (
							<DownData>
								<TableHold>
									<TableTitle>
										<span>
											{" "}
											Keywords Results({readKeyword?.result?.length})
										</span>
									</TableTitle>
									<TableHolder>
										<TableHead>
											<Head Hwd='40px'>ID</Head>
											<Head Hwd='400px'>Keywords</Head>
											<Head Hwd='100px'>Competition</Head>
											<Head Hwd='100px'>competition_index</Head>
											<Head style={{ marginLeft: "50px" }} Hwd='70px'>
												search_volume
											</Head>
											{/* <Head Hwd='20px'>Position</Head> */}
											{/* <Head style={{ marginLeft: "50px" }} Hwd='150px'> */}
											{/* Domain */}
											{/* </Head> */}
										</TableHead>
										<Content>
											{readKeyword?.result?.map((props: any, i: any) => (
												<TableBody>
													<Body Bwd='40px'>{i}</Body>
													<Body Bwd='400px'>
														<Link to={`/keywords/${i}`}>
															<BTitle cl='#1976D2'>{props?.keyword}</BTitle>
														</Link>
													</Body>
													<Body Bwd='100px'>
														{props.competition ? (
															<TT>{props?.competition}</TT>
														) : (
															<TT>-</TT>
														)}
													</Body>
													<Body Bwd='100px'>
														{props?.competition_index !== null ? (
															<TT>{props?.competition_index}</TT>
														) : (
															<TT>-</TT>
														)}
													</Body>
													<Body style={{ marginLeft: "100px" }} Bwd='70px'>
														{props?.search_volume ? (
															<>
																{props?.search_volume !== null ? (
																	<TT>{props?.search_volume}</TT>
																) : (
																	<TT>-</TT>
																)}
															</>
														) : (
															<TT>-</TT>
														)}
													</Body>
												</TableBody>
											))}
										</Content>
									</TableHolder>
								</TableHold>
								{/* <PopularAds /> */}
							</DownData>
						)}
					</>
				) : (
					<>
						<EmptyData avatar={pic} />
					</>
				)}
			</Wrapper>
		</Container>
	);
};

export default KewWordTable;

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
const Input = styled.input`
	/* min-width: 320px; */
	height: 35px;
	border-radius: 5px;
	border: 1px solid #f1f1f1;
	outline: none;
	padding-left: 10px;
	width: 100%;

	::placeholder {
		color: gray;
	}

	@media screen and (max-width: 768px) {
		width: 96%;
	}
`;
const InputText = styled.div`
	font-size: 12px;
	margin-bottom: 3px;
	font-weight: 600;
	/* font-weight: 600; */
`;

const LoadComp = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
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
	width: 400px;
	font-size: 17px;
	color: ${(props) => props.cl};
	/* background-color: red; */
	overflow: hidden;
	text-overflow: ellipsis;

	/* white-space: ; */
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
