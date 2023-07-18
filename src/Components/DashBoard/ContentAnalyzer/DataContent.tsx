import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { ContentSearch, ContentSummary } from "../../../utils/APICalls";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import InputComp from "../../../utils/ReusedComp/InputComp";
import DashboardLoader from "../../../utils/ReusedComp/Skeleton";
import {
	StoreContentSearch,
	StoreContentSummary,
} from "../../../utils/stateManagement/authState";
import pic from "../images/5.svg";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import PageCategoryChart from "./PageCategoryChart";
import TextCategoryChart from "./TextCategoryChart";

const DataContent = (props: any) => {
	const dispatch = UseAppDispach();
	const [keyword, setKeyword] = useState("");
	const [type, setType] = useState("ecommerce");
	const readSummary = useAppSelector((state) => state.ContentSummaryData);
	const readSearch = useAppSelector((state) => state.contentSearchData);

	const user = useAppSelector((state) => state.currentUser);

	const content_summary = useMutation({
		mutationFn: (data: any) => ContentSummary(data, user?._id),
		onSuccess: (data: any) => {
			dispatch(StoreContentSummary(data?.data[0]));
			// console.log("summary", data);
		},
	});

	const content_search = useMutation({
		mutationKey: ["content_search"],
		mutationFn: (data: any) => ContentSearch(data, user?._id),
		onSuccess: (data: any) => {
			dispatch(StoreContentSearch(data?.data[0]));
			// console.log("mydg", data);
		},
	});
	return (
		<Container>
			<Wrapper>
				<TopInputData>
					<Title>Content Analyzer</Title>
					<SubTitle>
						Keyword Data Explorer will help you appreciate the scale of
						information that Domranker Keyword provides.
					</SubTitle>

					<Main>
						<InputText>Search Keyword</InputText>
						<Input2>
							<Input3
								// value={googleKeywords}
								required={true}
								onChange={(e) => {
									setKeyword(e.target.value);
								}}
								placeholder='Enter search'
								type='search'
							/>

							<Button
								onClick={() => {
									content_search.mutate({
										keyword,
									});
									content_summary.mutate({
										keyword,
										type,
									});
								}}>
								Search
							</Button>
						</Input2>
					</Main>
				</TopInputData>
				<hr />

				{content_summary?.isLoading ? (
					<DashboardLoader />
				) : (
					<>
						{readSummary &&
						readSummary["result"] &&
						readSearch &&
						readSearch["result"] &&
						readSearch["result"][0] &&
						readSummary["result"][0] ? (
							<ButtomData>
								<BoxesDiv>
									<MainBox>
										<TopBox>
											<Toptitle>Analysis Data</Toptitle>
											<TopSub>{readSummary?.result[0]?.total_count}</TopSub>
										</TopBox>
										<ButtomBoxHold>
											<TomBox>
												<ButtomTitle>Blogs</ButtomTitle>
												<TomSub>
													{readSummary?.result[0]?.page_types?.blogs}
												</TomSub>
											</TomBox>
											<TomBox>
												<ButtomTitle>Ecomerce</ButtomTitle>
												<TomSub>
													{readSummary?.result[0]?.page_types?.ecommerce}
												</TomSub>
											</TomBox>
											<TomBox>
												<ButtomTitle>News</ButtomTitle>
												<TomSub>
													{readSummary?.result[0]?.page_types?.news}
												</TomSub>
											</TomBox>
										</ButtomBoxHold>
									</MainBox>
									<MiddleBox>
										<InnerMidBox>
											<InnerTitle>Item Count</InnerTitle>
											<InnerSub>{readSearch?.result[0]?.items_count}</InnerSub>
										</InnerMidBox>
										<InnerMidBox>
											<InnerTitle>Page Type</InnerTitle>
											<InnerSub>{readSearch?.data?.page_type[0]}</InnerSub>
										</InnerMidBox>
									</MiddleBox>
									<MainBox>
										<MainTop>
											<Toptitle>Domain Rank</Toptitle>
											<TopSub>{readSummary?.result[0]?.rank}</TopSub>
										</MainTop>
										<MainButtom>
											<RateBox>
												<RateBar>
													<RateBar2 />
												</RateBar>
											</RateBox>
											<RateData>
												<DataRate>
													<RateTitle>URL Rank</RateTitle>
													{/* <RateSub>78</RateSub> */}
												</DataRate>
												<DataRate>
													<RateTitle>Spam Score</RateTitle>
													{/* <RateSub>22</RateSub> */}
												</DataRate>
											</RateData>
										</MainButtom>
									</MainBox>
								</BoxesDiv>
								<ContentCahrtDiv>
									<PageCategoryChart />
								</ContentCahrtDiv>
								<ContentCahrtDiv>
									<TextCategoryChart />
								</ContentCahrtDiv>
							</ButtomData>
						) : (
							<div>
								<EmptyData avatar={pic} message='No data found' />
							</div>
						)}
					</>
				)}
			</Wrapper>
		</Container>
	);
};

export default DataContent;

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

const Container = styled.div``;
const Wrapper = styled.div`
	hr {
		border: none;
		height: 1px;
		background-color: #e2e2e2;
	}
`;
const TopInputData = styled.div``;

const Title = styled.div`
	font-size: 24px;
	font-weight: 800;
`;
const SubTitle = styled.div`
	font-size: 12px;
`;

const ButtomData = styled.div``;
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
const TopBox = styled.div``;

const Toptitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 20px;
`;
const TopSub = styled.div`
	font-size: 25px;
	font-weight: 800;
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

const ContentCahrtDiv = styled.div``;

const MainTop = styled.div``;
const MainButtom = styled.div``;
const RateBox = styled.div``;
const RateData = styled.div`
	display: flex;
	justify-content: space-between;
`;
const DataRate = styled.div``;
const RateTitle = styled.div`
	font-size: 9px;
	font-weight: 600;
	margin-bottom: 15px;
`;
const RateSub = styled.div`
	font-size: 18px;
	font-weight: 700;
`;

const RateBar = styled.div`
	height: 6px;
	width: 100%;
	background-color: #f49867;
	margin-bottom: 15px;
	border-radius: 10px;
`;
const RateBar2 = styled.div`
	width: 70%;
	height: 6px;
	border-radius: 10px;
	background-color: #ae67fa;
`;
