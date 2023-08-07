import React, { useState } from "react";
import styled from "styled-components";
import SiteHeader from "./SiteHeader";
import { MobileSupportSearch } from "../../../utils/APICalls";
import LoadingComp from "../../../utils/ReusedComp/LoadingComp";
import { useAppSelector } from "../../../utils/stateManagement/store";

const MobileSupportTest = () => {
	const [keyword, setKeyword] = useState<string>("");
	const [load, setLoad] = useState<boolean>(false);
	const user = useAppSelector((state) => state.currentUser);

	const SearchMobileNow = async () => {
		setLoad(true);
		await MobileSupportSearch(keyword, user?.data?._id, user?.token).then(
			async (response: any) => {
				setLoad(false);
				console.log(response);
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
						SearchMobileNow();
					}}>
					<InputText>Keyword</InputText>
					<Input2>
						<Input3
							onChange={(e) => {
								setKeyword(e.target.value);
							}}
							required
							placeholder='eg. https://searchengineland.com'
							type='url'
						/>

						<Button type='submit'>Analyze</Button>
					</Input2>
				</Main>
			</Wrapper>
			<br />
			<br />
			<br />
			<hr />
			<ContainerCard>
				<Hold1>
					<DataCart1>
						<p>Device</p>
						<h2>Mobile</h2>
					</DataCart1>
					<DataCart1>
						<p>Google mobilr friendly score</p>
						<h2>Mobile</h2>
					</DataCart1>
					<DataCart1>
						<p>Mobile friendly</p>
						<h2>True</h2>
					</DataCart1>
				</Hold1>
				<Hold2>
					<DataCart1>
						<p>Optimized</p>
						<h2>02</h2>
					</DataCart1>
					<DataCart1>
						<p>improvements</p>
						<h2>03</h2>
					</DataCart1>
					<DataCart1>
						<p>Total Name</p>
						<h2>Mobile friendly</h2>
					</DataCart1>
				</Hold2>
			</ContainerCard>
		</Container>
	);
};

export default MobileSupportTest;

const DataCart1 = styled.div`
	width: 31%;
	background-color: white;
	height: 150px;
	display: flex;
	flex-direction: column;
	box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	border-bottom: 4px solid #ffb703;

	@media screen and (max-width: 768px) {
		margin-top: 10px;
		width: 90%;
	}

	p {
		padding-left: 10px;
		font-weight: 500;
	}

	h2 {
		padding-left: 10px;
	}
`;

const Hold1 = styled.div`
	width: 96%;
	height: auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 10px;
	padding-bottom: 10px;

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Hold2 = styled.div`
	margin-top: 10px;
	width: 96%;
	height: auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 10px;
	padding-bottom: 10px;

	@media screen and (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const ContainerCard = styled.div`
	width: 100%;
	height: 500px;

	display: flex;
	flex-direction: column;
	align-items: center;
	height: auto;
	padding-top: 20px;
	padding-bottom: 20px;
	justify-content: space-between;
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

	hr {
		height: 1px;
		background-color: "#E2E2E2";
		width: 100%;
	}
`;
