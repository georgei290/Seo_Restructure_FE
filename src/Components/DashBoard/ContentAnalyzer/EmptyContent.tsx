import React from "react";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";
import InputComp from "../../../utils/ReusedComp/InputComp";

const EmptyContent = (props: any) => {
	return (
		<Wrapper>
			<TopInputData>
				<Title>Content Analysis</Title>
				<SubTitle>
					Content Analysis is the ultimate solution for building up brand
					mention, sentiment analysis, and other content-related capabilities
				</SubTitle>
				<InputComp {...props} />
			</TopInputData>
			<hr />
			<BottomEmptyData>
				<ImageDiv>
					<img src='/image/content.svg' alt='' />
				</ImageDiv>
				<Desc>
					Using Content Analysis Explorer you will be able to test every
					endpoint and appreciate the data it provides.
				</Desc>
			</BottomEmptyData>
		</Wrapper>
	);
};

export default EmptyContent;

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
const BottomEmptyData = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;
const ImageDiv = styled.div`
	margin: 15px 0;
	img {
		width: 250px;
	}
`;
const Desc = styled.div`
	width: 700px;
	text-align: center;
	font-size: 13px;

	@media (max-width: 700px) {
		width: 80%;
	}
`;
