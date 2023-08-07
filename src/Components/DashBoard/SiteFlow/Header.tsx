import React, { useState } from "react";
import styled from "styled-components";
import SiteHeader from "./SiteHeader";
import {
	UseAppDispach,
	useAppSelector,
} from "../../../utils/stateManagement/store";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import { HeadersSearch } from "../../../utils/APICalls";
import { HeaderData } from "../../../utils/stateManagement/authState";
import EmptyData from "../../../utils/ReusedComp/EmptyData";

import pic from "../images/5.svg";

interface TableDataItem {
	column1: string;
	column2: string;
}

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
	padding: 3px;
	text-align: left;
	border-bottom: 1px solid #ddd;
	border-right: 1px solid #ddd;
`;
const Th1 = styled.th`
	padding: 3px;

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
const Td1 = styled.td`
	padding: 8px;
	text-align: left;
	border-right: 1px solid #ddd;
	white-space: pre-wrap;
	word-wrap: break-word;

	&:last-child {
		border-right: none;
	}
`;

const Header = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);
	const readHeader = useAppSelector((state) => state.header);
	const dispatch = UseAppDispach();
	const SearchHeaderNow = async () => {
		setLoad(true);
		await HeadersSearch(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				console.log(response);
				dispatch(HeaderData(response?.data));
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
						SearchHeaderNow();
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

						<Button type = "submit">Analyze</Button>
					</Input2>
					<br />

					{Object.keys(readHeader).length === 0 && (
						<div>
							{" "}
							<EmptyData
								avatar={pic}
								message='Enter Your Url in the Input Bar Above'
							/>
						</div>
					)}
					{readHeader?.status === "error" && (
						<div>
							<EmptyData
								avatar={pic}
								message='Sorry we couldnt find any result for this search.'
							/>
						</div>
					)}

					{readHeader?.status === "ok" && (
						<>
							{Object.keys(readHeader?.data?.data).some(
								(headingLevel) =>
									readHeader?.data?.data[headingLevel].length > 0,
							) ? (
								Object.keys(readHeader?.data?.data).map(
									(headingLevel: any, index) => {
										const headingContent: any =
											readHeader?.data?.data[headingLevel];
										if (headingContent.length > 0) {
											return (
												<TableContainer key={index}>
													<Table>
														<thead>
															<tr>
																<Th>#</Th>
																<Th>htags[{index + 1}]</Th>
															</tr>
														</thead>
														<tbody>
															{headingContent.map(
																(item: any, itemIndex: any) => (
																	<tr key={itemIndex}>
																		<Td></Td>
																		<Td>{item}</Td>
																	</tr>
																),
															)}
														</tbody>
													</Table>
												</TableContainer>
											);
										}
										return null; // Don't render if no content
									},
								)
							) : (
								<EmptyData
									avatar={pic}
									message="Sorry, we couldn't find any result for this search."
								/>
							)}
						</>
					)}
				</Main>
			</Wrapper>
		</Container>
	);
};

export default Header;

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
