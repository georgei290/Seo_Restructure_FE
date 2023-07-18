import React, { useState } from "react";
import styled from "styled-components";
import EmptyData from "../../../utils/ReusedComp/EmptyData";
import Mysimple from "./Mysimple";
import pix from "./undraw_business_decisions_re_84ag (1).svg";
import TableData from "./TableData";
import WorkTable from "./WorkTable";
import { useQuery } from "@tanstack/react-query";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
	businessDataCall,
	readingBusinessDataCall,
} from "../../../utils/APICalls";
import {
	businessDataAPI,
	StorBusinessMain,
} from "../../../utils/stateManagement/authState";
import DashboardLoader from "../../../utils/ReusedComp/Skeleton";

interface iSearch {
	keywords: string;
}

const BusinessData = () => {
	const user = useSelector((state: any) => state.currentUser);
	const readData = useSelector((state: any) => state.businessData);
	const readMainBusinessData: any = useSelector(
		(state: any) => state.MainBusinessData,
	);
	const [load, setLoad] = useState(false);

	const dispatch = useDispatch();

	const schema = yup.object().shape({
		keywords: yup.string().required("please enter a valid search word"),
	});

	const { handleSubmit, register } = useForm<iSearch>({
		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<iSearch> = async (keywords: any) => {
		setLoad(true);
		businessDataCall(keywords, user?._id).then((data) => {
			dispatch(businessDataAPI(data?.data[0]));
		});
	};

	// Queries
	const { data, isLoading } = useQuery({
		queryKey: ["readingBusinessData"],
		queryFn: () => readingBusinessDataCall(user?._id, readData?.id),
		onSuccess: (data) => {
			setLoad(false);
			dispatch(StorBusinessMain(data));
		},
	});

	return (
		<Container>
			<Wrapper>
				<Title>Business Data</Title>
				<SubTitle>Expand Your Business Data</SubTitle>
				<HolderForm>
					<>
						<InputHold>
							<Main2>
								<InputText>Business Data Search</InputText>
								<Input2 onSubmit={handleSubmit(onSubmit)}>
									<Input3
										placeholder='Enter search'
										{...register("keywords")}
									/>
									<Button type='submit'>Analyze</Button>
								</Input2>
							</Main2>
						</InputHold>
					</>
				</HolderForm>

				{load ? (
					<DashboardLoader />
				) : (
					<>
						{!data ||
						readMainBusinessData === undefined ||
						!readMainBusinessData ? (
							<EmpytyHold>
								<EmptyData
									avatar={pix}
									message='This endpoint will provide you with search volume, monthly searches,competition, and other related data for up to 1000 keywords in a single request.'
								/>
							</EmpytyHold>
						) : (
							<>
								{data?.data[0]?.status_message === "No Search Results." ? (
									<>
										{" "}
										<EmptyData
											avatar={pix}
											message='No Search Result found....Please put the right Search'
										/>
									</>
								) : (
									<>
										{" "}
										<LoadComp>
											{" "}
											{isLoading ? (
												<DashboardLoader />
											) : (
												<>
													{data?.response?.status === 404 ||
													data?.data[0]?.result === null ||
													!data ? (
														<div>
															<EmptyData
																avatar={pix}
																message='Fetching data... please hang on or make a search again'
															/>
														</div>
													) : (
														<div>
															<CardHolder>
																<Mysimple
																	title='Tite'
																	subtitle={`${data?.data[0]?.result[0]?.items?.[0]?.title}`}
																/>
																<Mysimple
																	title='Category'
																	subtitle={`${data?.data[0]?.result[0].items?.[0]?.category}
`}
																/>
																<Mysimple
																	title='Phone'
																	subtitle={`${data?.data[0]?.result[0].items?.[0]?.phone}`}
																/>
															</CardHolder>

															<TableHolder>
																<TableTitle>People Also Search</TableTitle>
																<TableData
																	iprops={
																		data?.data[0]?.result[0].items?.[0]
																			?.people_also_search
																	}
																/>
															</TableHolder>
															<br />
															<TableHolder>
																<TableTitle>
																	Current Work Time status:{" "}
																	<span style={{ color: "red" }}>
																		{
																			data?.data[0]?.result[0].items?.[0]
																				.work_time?.work_hours?.current_status
																		}{" "}
																	</span>
																</TableTitle>
																<WorkTable
																	iProps={
																		data?.data[0]?.result[0].items?.[0]
																			.work_time?.work_hours?.timetable
																	}
																/>
															</TableHolder>
														</div>
													)}
												</>
											)}
										</LoadComp>
									</>
								)}
							</>
						)}
					</>
				)}
			</Wrapper>
		</Container>
	);
};

export default BusinessData;

const LoadComp = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const TableTitle = styled.div`
	height: 100px;
	width: 100%;
	padding-top: 5px;
	padding-bottom: 5px;
	font-weight: 700;
	font-size: 15px;
	padding-left: 10px;
`;

const TableHolder = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;
	height: auto;
	background-color: white;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const CardHolder = styled.div`
	/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
	width: 98%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-top: 13px;
	border-top: 1px solid #e2e2e2;

	@media screen and (max-width: 768px) {
		width: 90%;
	}
`;

const EmpytyHold = styled.div`
	margin-top: 50px;
`;

const Button = styled.button`
	margin-right: 1px;
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

const Input3 = styled.input`
	flex: 1;
	padding-left: 10px;
	height: 100%;
	outline: none;
	border: none;
`;
const Input2 = styled.form`
	height: 35px;
	width: 100%;
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

const InputText = styled.div`
	font-size: 13px;
	margin-bottom: 6px;
	/* font-weight: 600; */
`;

const InputHold = styled.div`
	margin-top: 15px;
	width: 100%;
	display: flex;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;

const Main2 = styled.div`
	width: 95%;
	margin-top: 10px;
	margin-right: 20px;
`;

const HolderForm = styled.div``;

const SubTitle = styled.div`
	color: black;
	margin-top: 6px;
	font-weight: 700;
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
	display: flex;
	flex-direction: column;
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
