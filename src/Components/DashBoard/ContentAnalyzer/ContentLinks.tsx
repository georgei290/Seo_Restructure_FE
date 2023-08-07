import React, { useState, PureComponent } from "react";
import styled from "styled-components";
import ContentNavigation from "./ContentNavigation";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import { ContentLinksSearch } from "../../../utils/APICalls";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pic from "../images/5.svg";
import { linkData } from "../../../utils/stateManagement/authState";

interface TableDataItem {
	column1: string;
	column2: string;
	column3: string;
	column4: string;
	column5: string;
}

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
	max-width: 350px;
	overflow: hidden;

	&:last-child {
		border-right: none;
	}
`;

















const ContentLinks = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);
	const readData = useAppSelector((state) => state.links);
	const dispatch = UseAppDispach();
	const SearchKeywordLinksNow = async () => {
		setLoad(true);
		await ContentLinksSearch(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				// console.log(response);
				dispatch(linkData(response?.data));
			},
		);
	};
	if (load) return <LoadingComp />;

	return (
		<Container>
			<ContentNavigation />
			<Wrapper>
				<Main
					onSubmit={(e) => {
						e.preventDefault();
						SearchKeywordLinksNow();
					}}>
					<InputText>Search Keyword</InputText>
					<Input2>
						<Input3
							required
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							placeholder='eg. https://searchengineland.com'
							type='url'
						/>
						<Button>Search</Button>
					</Input2>
				</Main>

				<br />
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
					<BoxesDiv>
						<MainBox>
							<TopBox>
								<Toptitle>Total links</Toptitle>
								<TopSub>
									{readData?.data && readData?.data?.data[0]["Total links"]}
								</TopSub>
							</TopBox>
							<ButtomBoxHold>
								<TomBox>
									<ButtomTitle>External links</ButtomTitle>
									<TomSub>
										{readData?.data &&
											readData?.data?.data[0]["External links"]}
									</TomSub>
								</TomBox>
								<TomBox>
									<ButtomTitle>Internal</ButtomTitle>
									<TomSub>
										{readData?.data && readData?.data?.data[0]["Internal"]}
									</TomSub>
								</TomBox>
								<TomBox>
									<ButtomTitle>Nofollow count</ButtomTitle>
									<TomSub>
										{readData?.data &&
											readData?.data?.data[0]["Nofollow count"]}
									</TomSub>
								</TomBox>
							</ButtomBoxHold>
						</MainBox>
						<MiddleBox>
							<InnerMidBox>
								<InnerTitle>Duplicate links</InnerTitle>
								<InnerSub>
									{readData?.data && readData?.data?.data[0]["Duplicate links"]}
								</InnerSub>
							</InnerMidBox>
							<InnerMidBox>
								<InnerTitle>Tool Name</InnerTitle>
								<InnerSub>On page links</InnerSub>
							</InnerMidBox>
						</MiddleBox>
						<MainBox>
							<MainTop>
								<Toptitle>No alt tag</Toptitle>
								<TopSub>
									{" "}
									{readData?.data && readData?.data?.data[0]["No alt tag"]}
								</TopSub>
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
				)}

				<br />
				<br />

				{readData?.status === "ok" && (
					<>
						<TableTitle>
							<span>On Page Links </span>
						</TableTitle>
						<TableContainer>
							<Table>
								<thead>
									<tr>
										<Th>Url</Th>
										<Th>Link type</Th>
										<Th>Nofollow </Th>
										<Th>
											Anchor
											<br /> type
										</Th>
										<Th>Anchor text</Th>
									</tr>
								</thead>
								<tbody>
									{readData?.data &&
										readData?.data?.data[1].map((item: any, index: any) => (
											<tr key={index}>
												<Td>
													<a
														style={{
															color: "green",
														}}
														href={item.URL}>
														{item.URL}
													</a>
												</Td>
												<Td>{item["Link type"]}</Td>
												<Td>{item["Nofollow"]}</Td>
												<Td>{item["Anchor type"]}</Td>
												<Td>{item["Anchor text"]}</Td>
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

export default ContentLinks;

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
