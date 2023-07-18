import React, { useState } from "react";
import styled from "styled-components";
import BacklinkDetailed from "./BacklinkDetailed";
import BacklinkLevel from "./BacklinkLevel";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { BacklinkSearchData } from "../../../utils/APICalls";
import { StoreBacklinkData } from "../../../utils/stateManagement/authState";
import pix1 from "../images/share.svg";
import TopBackLinkTable from "./TopBackLinkTable";
import LostBackLinkTable from "./LostBackLinkTable";
interface iSearch {
	keywords: string;
}

const ViewingBacklink = (props: any) => {
	const user = useSelector((state: any) => state.currentUser);

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

		try {
			const res = await BacklinkSearchData(keywords, user?._id);
			dispatch(StoreBacklinkData(res?.data));
			setLoad(false);
		} catch (err) {
			setLoad(false);
			throw err;
		} finally {
			setLoad(false);
		}
	};
	return (
		<div>
			<div>
				<HolderForm>
					<>
						<InputHold>
							<Main2>
								<InputText>BackLinks Data Search</InputText>
								<Input2 onSubmit={handleSubmit(onSubmit)}>
									<Input3
										placeholder='eg. www.google.com'
										{...register("keywords")}
									/>
									<Button type='submit'>Search Backlink</Button>
								</Input2>
							</Main2>
						</InputHold>
					</>
				</HolderForm>

				<div>
					<hr />
					<MainHolder>
						<ShaerImage src={pix1} alt='image for default backlink checker' />
						<Br />
						<SubTitle>
							Monitor backlink performance for yourself and competitors.
						</SubTitle>
					</MainHolder>
				</div>

				<>
					<hr />
					<br />

					<BacklinkDetailed
					// summary={getBacklinks["SummaryData"][0]["result"][0]}
					/>

					<br />

					<BacklinkLevel
					// summary={getBacklinks["SummaryData"][0]["result"][0]}
					/>

					<br />

					<TableTitle>
						<span>Top BackLink </span>
					</TableTitle>
					<TopBackLinkTable />
					<br />
					<br />

					<TableTitle>
						<span>Lost BackLink </span>
					</TableTitle>
					<LostBackLinkTable />
				</>
			</div>
		</div>
	);
};

export default ViewingBacklink;

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

const Br = styled.div`
	margin-top: 10px;
`;
const MainHolder = styled.div`
	width: 90%;
	display: flex;
	justify-content: center;
	height: 64vh;
	align-items: center;
	flex-direction: column;
`;

const ShaerImage = styled.img`
	/* width: 300px; */
	height: 30%;
	object-fit: contain;
`;
const SubTitle = styled.div`
	font-size: 15px;
	font-weight: 700;
`;

const Main2 = styled.div`
	width: 95%;
	margin-top: 10px;
	margin-right: 20px;
`;

const HolderForm = styled.div`
	width: 100%;
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

const Table = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
