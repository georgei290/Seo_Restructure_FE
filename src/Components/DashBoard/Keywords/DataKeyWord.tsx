import React from "react";
import { FiSearch } from "react-icons/fi";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";
import { useAppSelector } from "../../../utils/stateManagement/store";
import KeyWordChart from "./KeyWordChart";

const DataKeyWord = (props: any) => {
	const readData = useAppSelector((state) => state.keywordData);
	const { id }: any = useParams();
	// console.log("object,", id);

	const viewData: any = readData?.result[id];

	return (
		<Container>
			<Wrapper>
				<TopInputData>
					<Title>Keyword Data</Title>
					<SubTitle>
						Keyword Data Explorer will help you appreciate the scale of
						information that Domranker Keyword provides.
					</SubTitle>
				</TopInputData>
				<hr />
				<ButtomData>
					<DataBoxes>
						<BoxContainer>
							<BoxMain>
								<BoxContent>
									<BoxTitle>Search Volumn</BoxTitle>

									<BoxDetail>{viewData?.search_volume}</BoxDetail>
								</BoxContent>
							</BoxMain>
							<BoxMain>
								<BoxContent>
									<BoxTitle>Keyword Annotations</BoxTitle>
									<BoxDetail>
										{viewData?.keyword_annotations?.concepts?.length}
									</BoxDetail>
								</BoxContent>
							</BoxMain>
						</BoxContainer>
						<MiddleBox>
							<MiddleBoxContent>
								<TopContent>
									<SplitContent>
										<BoxTitle>Competition</BoxTitle>
										<BoxDetail>{viewData?.competition}</BoxDetail>
									</SplitContent>
									<SplitContent>
										<BoxTitle>Competition Index</BoxTitle>
										<BoxDetail>{viewData?.competition_index}</BoxDetail>
									</SplitContent>
								</TopContent>
								<hr />
								<ButtomContext>
									<SplitContent>
										<BoxTitle>Location Code</BoxTitle>
										<BoxDetail>{viewData?.location_code}</BoxDetail>
									</SplitContent>
									<SplitContent>
										<BoxTitle>Language Code</BoxTitle>
										<BoxDetail>{viewData?.language_code}</BoxDetail>
									</SplitContent>
								</ButtomContext>
							</MiddleBoxContent>
						</MiddleBox>
						<BoxContainer>
							<BoxMain>
								<BoxContent>
									<BoxTitle>Low top of Page bid</BoxTitle>
									<BoxDetail>{viewData?.low_top_of_page_bid}</BoxDetail>
								</BoxContent>
							</BoxMain>
							<BoxMain>
								<BoxContent>
									<BoxTitle>High top of page bid</BoxTitle>
									<BoxDetail>{viewData?.high_top_of_page_bid}</BoxDetail>
								</BoxContent>
							</BoxMain>
						</BoxContainer>
					</DataBoxes>

					<DataChartHold>
						<KeyWordChart propsData={viewData?.monthly_searches} />
					</DataChartHold>
				</ButtomData>
			</Wrapper>
		</Container>
	);
};

export default DataKeyWord;

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
const InputsHold = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const DropdownHolds = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 5px;
`;
const FunctionsSelect = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	select {
		height: 35px;
		width: 250px;
		font-family: montserrat;
		border: 1px solid #dddddd;
		color: #3e4581;
		border-radius: 3px;
		font-size: 13px;
		font-weight: 600;
		cursor: pointer;
	}
	label {
		font-size: 10px;
		font-weight: 600;
		margin-bottom: 3px;
	}

	@media (max-width: 500px) {
		select {
			height: 40px;
			width: 100px;
			font-size: 12px;
		}
	}
`;
const SearchBar = styled.div`
	width: 98%;
	height: 35px;
	background-color: #fff;
	border-radius: 3px;
	display: flex;
	align-items: center;
	border: 1px solid #dddddd;
	padding: 0 3px 0 8px;
	@media (max-width: 450px) {
		width: 95%;
	}

	input {
		height: 100%;
		width: 100%;
		font-family: Montserrat;
		outline: none;
		border: none;
		background-color: transparent;
	}
	button {
		height: 90%;
		width: 200px;
		border-radius: 3px;
		font-family: Montserrat;
		background-color: #4285f4;
		color: #fff;
		font-weight: bold;
		border: none;
		outline: none;
		transition: 350ms;
		cursor: pointer;
		:hover {
			transform: scale(0.96);
		}
	}
`;

const SearchIcon = styled.div`
	height: 20px;
	/* background-color: red; */
	display: flex;
	align-items: center;
	padding-top: 15px;
`;

const SearchBarHold = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Label = styled.div`
	width: 99%;
	/* background-color: red; */

	label {
		font-size: 10px;
		font-weight: 600;
		margin-bottom: 3px;
	}
`;

const ButtomData = styled.div`
	width: 100%;
`;
const DataBoxes = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
const BoxContainer = styled.div`
	@media (max-width: 500px) {
		width: 100%;
	}
`;
const BoxMain = styled.div`
	height: 100px;
	width: 280px;
	background-color: #fff;
	border-radius: 2px;
	border-bottom: 2px solid #283618;
	display: flex;
	justify-content: center;
	margin: 15px;

	@media (max-width: 500px) {
		width: 90%;
	}
`;

const BoxContent = styled.div`
	width: 85%;
	margin-top: 10px;
`;
const BoxTitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	margin-bottom: 30px;
`;
const BoxDetail = styled.div`
	font-size: 25px;
	font-weight: 800;
`;

const MiddleBox = styled.div`
	height: 220px;
	width: 450px;
	background-color: #fff;
	margin: 15px 0;
	display: flex;
	justify-content: center;
	border-bottom: 2px solid #faa307;
	border-radius: 2px;

	@media (max-width: 500px) {
		width: 90%;
	}
`;

const MiddleBoxContent = styled.div`
	width: 90%;
`;
const TopContent = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;
const ButtomContext = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
`;
const SplitContent = styled.div``;

const DataChartHold = styled.div``;
