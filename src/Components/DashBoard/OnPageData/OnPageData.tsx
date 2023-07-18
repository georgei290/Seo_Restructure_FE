import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import pix from "./undraw_analytics_re_dkf8.svg";

import { useMutation, useQuery } from "@tanstack/react-query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { onPageCall, readingOnPageCall } from "../../../utils/APICalls";
import { useSelector, useDispatch } from "react-redux";
import {
	onPageAPI,
	storeItems,
} from "../../../utils/stateManagement/authState";
import DashboardLoader from "../../../utils/ReusedComp/Skeleton";

interface userSearch {
	word: string;
}

const OnPageData = () => {
	const [load, setLoad] = React.useState<boolean>(false);
	const user = useSelector((state: any) => state.currentUser);
	const getPageData = useSelector((state: any) => state.onPageData);

	const dispatch = useDispatch();

	const schema = yup.object().shape({
		word: yup.string().required("please enter a searh word"),
	});

	const { register, handleSubmit } = useForm<userSearch>({
		resolver: yupResolver(schema),
	});

	const submit: SubmitHandler<userSearch> = async (data: any) => {
		// console.log("my input data", data)
		setLoad(true);
		onPageCall(data, user?._id).then((data) => {
			// console.log("this is the data to check on page", data);
			dispatch(onPageAPI(data?.data[0]));
			setLoad(false);
		});
	};

	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["readingBusinessData"],
		queryFn: () => readingOnPageCall(user?._id, getPageData.id),
	});

	// console.log("u say check data", user?._id);

	// console.log("onpageData", data);

	// console.log("onpageData", data?.data);

	// console.log("onpageDatamap", data.data[0]?.result[0]?.items);

	return (
		<Container>
			<Wrapper>
				<Title>OnPage Data</Title>
				<SubTitle>
					With On-Page API you can obtain a variety of on-page SEO data, which
					you can use to eliminate hidden website errors and, consequently,
					boost rankings
				</SubTitle>
				<>
					<InputHold>
						<Main>
							<InputText>Fucntion</InputText>
							<Input placeholder='Summary' />
						</Main>
						<Main>
							<InputText>Include Subdomain</InputText>
							<Input placeholder='Enable' />
						</Main>
						<Main>
							<InputText>Backlink Status Types</InputText>
							<Input placeholder='Live' />
						</Main>
						<Main>
							<InputText>Internal Link List</InputText>
							<Input placeholder='10' />
						</Main>
					</InputHold>
					<Main>
						<InputText>Search Engine Types</InputText>
						<Input2 onSubmit={handleSubmit(submit)}>
							<Input3
								required
								placeholder='Enter your website url eg. www.google.com'
								{...register("word")}
								type='search'
							/>
							<Button>Analyze</Button>
							{/* <Error>{errors.keywords && "Keyword is required"}</Error> */}
						</Input2>
					</Main>
				</>

				{!data?.data ? (
					<EmpytyHold>
						<EmptyData
							avatar={pix}
							message='This endpoint will provide you with search volume, monthly searches,
              competition, and other related data for up to 1000 keywords in a single
              request.'
						/>
					</EmpytyHold>
				) : (
					<>
						{load || isLoading ? (
							<DashboardLoader />
						) : (
							<>
								{data.data[0]?.status_code === 404 ||
								data?.data[0]?.result === null ? (
									<EmptyData avatar={pix} message='No Result Found' />
								) : (
									<TableHold>
										<TableTitle>
											<span>
												Onpage Data
												{/* ({readGoogleData?.data?.se}) */}
											</span>
										</TableTitle>
										<TableHolder>
											<TableHead>
												<Head Hwd='40px'>RG</Head>
												<Head Hwd='300px'>URL</Head>
												<Head Hwd='100px'>Image Count</Head>
												<Head Hwd='150px'>Internal Link Count</Head>
												<Head Hwd='70px'>No of h[tags]</Head>
												<Head Hwd='20px'>Script Count</Head>
												<Head style={{ marginLeft: "50px" }} Hwd='150px'>
													Onpage Score
												</Head>
											</TableHead>

											<Content>
												{data.data[0]?.result[0]?.items?.map(
													(props: any, index: any) => (
														<TableBody
															to={`detail/${index}`}
															onClick={() => {
																dispatch(
																	storeItems(data.data[0]?.result[0]?.items),
																);
															}}>
															<Body Bwd='40px'>{index + 1}</Body>
															<Body Bwd='300px'>
																{/* <BTitle cl=' #136F48 '>ddata</BTitle> */}
																<a href='#'>
																	<BTitle cl='#1976D2'>{props.url}</BTitle>
																</a>
															</Body>
															<Body Bwd='100px'>
																<TT>{props?.meta?.images_count}</TT>
															</Body>
															<Body Bwd='150px'>
																<TT>{props?.meta?.internal_links_count}</TT>
															</Body>

															{props?.meta?.htags ? (
																<Body Bwd='70px'>
																	<>
																		<TT>
																			{Object.keys(props.meta.htags).length}
																		</TT>
																	</>
																</Body>
															) : (
																<Body Bwd='70px'>
																	<>
																		<TT>-</TT>
																	</>
																</Body>
															)}

															<Body Bwd='20px'>
																<>
																	<TT>{props?.meta?.scripts_count}</TT>
																</>
															</Body>
															<Body style={{ marginLeft: "50px" }} Bwd='150px'>
																<TT>{props?.onpage_score}</TT>
															</Body>
														</TableBody>
													),
												)}
											</Content>
										</TableHolder>
									</TableHold>
								)}
							</>
						)}
					</>
				)}
			</Wrapper>
		</Container>
	);
};

export default OnPageData;

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

const BTitle = styled.div<{ cl: string }>`
	width: 290px;
	font-size: 14px;
	color: ${(props) => props.cl};
	/* background-color: red; */
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;

	/* white-space: ; */
	/* background-color: black; */
`;

const TableBody = styled(NavLink)`
	display: flex;
	width: 100%;
	align-items: center;
	text-decoration: none;
	color: black;
	height: 100%;
	padding-top: 10px;
	border-bottom: 1px solid #f1f1f1;
	padding-bottom: 10px;
	cursor: pointer;

	:nth-child(odd) {
		background: white;
	}
	:nth-child(even) {
		background: #f8f8ff;
	}

	:hover {
		background: #fff8f8;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
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

const TableHolder = styled.div`
	background-color: white;
	margin-top: 10px;
	width: 100%;
	overflow-x: scroll;
`;

const Error = styled.div`
	font-size: 10px;
	color: red;
`;

const EmpytyHold = styled.div`
	margin-top: 50px;
`;

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
`;
const Input2 = styled.form`
	height: 50px;
	width: 98%;
	background-color: white;
	border: 1px solid #f1f1f1;
	border-radius: 5px;
	display: flex;
	align-items: center;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;
const Button = styled.button`
	margin-right: 10px;
	height: 40px;
	width: 150px;
	color: white;
	border: none;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
	background-color: #ae67fa;
	font-weight: bold;
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
	margin-top: 15px;
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
	font-size: 13px;
	margin-bottom: 6px;
	/* font-weight: 600; */
`;

const SubTitle = styled.div`
	color: black;
	margin-top: 6px;
	font-weight: 500;
	font-size: 16px;
`;

const Title = styled.div`
	color: #3e4581;
	font-size: 25px;
	font-weight: 800;
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
