import React from "react";
import styled from "styled-components";
import FirstTable from "./FirstTable";
import SecondTable from "./SecondTable";
import ThirdTable from "./ThirdTable";
import TimmingCard from "./TimmingCard";
import { useMutation, useQuery } from "@tanstack/react-query";
import { onPageCall, readingOnPageCall } from "../../../utils/APICalls";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const DetailsOnpage = () => {
	const user = useSelector((state: any) => state.currentUser);
	const getPageData = useSelector((state: any) => state.onPageData);
	const item = useSelector((state: any) => state.items);

	const { id } = useParams();
	let myId = Number(id);
	// console.log("fghjkljkll",item[myId].meta)
	// console.log("this is id",  id)
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["gettingOnPageData"],
		queryFn: () => readingOnPageCall(user?._id, getPageData.id),
	});

	// console.log("this is the deatails data", data.data[0]?.result[0]?.items);

	return (
		<Container>
			<Wrapper>
				<>
					<div>
						<Dholder>
							<First>
								<ImageCount>
									<span>Image count</span>
									<div>{item[myId].meta?.images_count}</div>
								</ImageCount>
								<ImageSize>
									<span>Image size</span>
									<div>{item[myId].meta?.images_size}</div>
								</ImageSize>
							</First>
							<Second>
								<IntLinkCount>
									<span>Internal Link Count</span>
									<div>{item[myId].meta?.internal_links_count}</div>
								</IntLinkCount>

								<BothLink>
									<ExLinkCount>
										<span>External Link Count</span>
										<div>{item[myId].meta?.external_links_count}</div>
									</ExLinkCount>

									<InbLinkCount>
										<span>Inbound Link Count</span>
										<div>{item[myId].meta?.inbound_links_count}</div>
									</InbLinkCount>
								</BothLink>
							</Second>
							<Third>
								<BothLink1>
									<ExLinkCount>
										<span>Script Count</span>
										<div>{item[myId].meta?.scripts_count}</div>
									</ExLinkCount>

									<InbLinkCount>
										<span>Script Size</span>
										<div>{item[myId].meta?.scripts_size}</div>
									</InbLinkCount>
								</BothLink1>

								<BothLink2>
									<ExLinkCount>
										<span>Stylesheet Count</span>
										<div>{item[myId].meta?.stylesheets_count}</div>
									</ExLinkCount>

									<InbLinkCount>
										<span>Stylesheet Size</span>
										<div>{item[myId].meta?.stylesheets_size}</div>
									</InbLinkCount>
								</BothLink2>
							</Third>
							<Forth>
								<ImageCount1>
									<span>Title Lenght</span>
									<div>{item[myId].meta?.title_length}</div>
								</ImageCount1>
								<ImageSize>
									<span>Description Lenght</span>
									<div>{item[myId].meta?.description_length}</div>
								</ImageSize>
							</Forth>
						</Dholder>
					</div>

					<TableHolder>
						<FirstTable />
					</TableHolder>

					<TableHolder>
						<SecondTable />
					</TableHolder>
					<TableHolder>
						<ThirdTable />
					</TableHolder>

					<PageT>
						<span>Page Timing</span>
					</PageT>

					<PageContent>
						<TimmingCard />
						<TimmingCard />
						<TimmingCard />
						<TimmingCard />
						<TimmingCard />
						<TimmingCard />
						<TimmingCard />
					</PageContent>
				</>
			</Wrapper>
		</Container>
	);
};

export default DetailsOnpage;

const PageContent = styled.div`
	height: auto;
	padding-buttom: 20px;
	margin-bottom: 30px;
	width: 95%;
	background-color: white;
	padding-left: 30px;
	padding-top: 30px;
	justify-content: space-between;

	display: flex;
	flex-wrap: wrap;
	@media screen and (max-width: 768px) {
		padding-left: 0px;
	}
`;

const PageT = styled.div`
	height: 50px;
	width: 98%;
	background-color: #ebebec;
	display: flex;
	align-items: center;

	span {
		padding-left: 30px;
		font-size: 15px;
		font-weight: 800;
		color: #000000;
	}
`;

const TableTitle = styled.div`
	heigt: 100px;
	width: 100%;
	padding-top: 5px;
	padding-buttom: 5px;
	font-weight: 700;
	font-size: 15px;
	padding-left: 10px;
`;

const TableHolder = styled.div`
	margin-top: 15px;
	width: 98%;
	display: flex;
	height: auto;
	background-color: white;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	border: 2px solid #bfbfbf;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
		width: 90%;
	}
`;

const ExLinkCount = styled.div`
	height: 90px;
	width: 50%;
	display: flex;
	flex-direction: column;
	border-right: 2px solid #e2e2e2;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 15px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;
const InbLinkCount = styled.div`
	height: 90px;
	width: 50%;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 16px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;

const BothLink1 = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	background-color: #ffffff;
	border-bottom: 2px solid #e2e2e2;
`;
const BothLink2 = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	background-color: #ffffff;
	border-bottom: 2px solid #d62828;
`;
const BothLink = styled.div`
	height: 90px;
	width: 100%;
	display: flex;
	background-color: #ffffff;
	border-bottom: 2px solid #023047;
`;

const IntLinkCount = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #e2e2e2;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 15px;
		font-weight: 700;
		font-size: 12px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;

const ImageCount1 = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #e2e2e2;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 13px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;
const ImageCount = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #8ecae6;
	background-color: #ffffff;
	display: flex;
	flex-direction: column;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 13px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;
const ImageSize = styled.div`
	height: 90px;
	width: 100%;
	border-bottom: 2px solid #ffb703;
	background-color: #ffffff;

	span {
		padding-left: 10px;
		padding-top: 10px;
		padding-bottom: 15px;
		font-weight: 700;
		font-size: 13px;
	}

	div {
		padding-left: 10px;

		font-weight: 800;
		font-size: 25px;
	}
`;

const First = styled.div`
	width: 190px;
	height: 190px;
	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Second = styled.div`
	width: 310px;
	height: 190px;

	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Third = styled.div`
	width: 310px;
	height: 190px;
	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
const Forth = styled.div`
	width: 165px;
	height: 190px;

	justify-content: space-between;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Dholder = styled.div`
	height: auto;
	width: 98%;
	justify-content: space-between;
	display: flex;
	margin-top: 15px;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const Wrapper = styled.div`
	margin-left: 30px;
	margin-top: 30px;
	width: 90%;
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
