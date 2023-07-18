import React from "react";
import { Also } from "./DataContent";
import styled from "styled-components";
import { any } from "prop-types";

interface iData {
	iProps: any;
}

const WorkTable: React.FC<iData> = ({ iProps }) => {
	//   console.log("viewing: ", iProps);
	// console.log("viewing: ", iProps?.friday[0]);
	// console.log("viewing: ", iProps?.monday[0]);
	//   console.log("viewing: ", iProps);
	return (
		<>
			<HoldTable>
				<Table>
					<Headrow>
						<TheadCT>Work Days</TheadCT>
						<TheadCT>Open Hours</TheadCT>
						<Thead>Close Hour</Thead>
					</Headrow>

					<ContentRow>
						<ContentData>
							<MainData1>
								<div>Monday</div>
							</MainData1>
						</ContentData>
						<ContentData>
							<MainData1>
								{iProps?.monday[0]?.open?.hour}:
								{iProps?.monday[0]?.open?.minute}AM
							</MainData1>
						</ContentData>
						<ContentDataTV>
							<MainData>{iProps?.monday[0]?.close?.hour % 12}PM</MainData>
						</ContentDataTV>
					</ContentRow>

					<ContentRow>
						<ContentData>
							<MainData1>
								<div>Tuesday</div>
							</MainData1>
						</ContentData>
						<ContentData>
							<MainData1>
								{iProps?.tuesday[0]?.open?.hour} :
								{iProps?.tuesday[0]?.open?.minute}AM
							</MainData1>
						</ContentData>
						<ContentDataTV>
							<MainData>{iProps?.tuesday[0]?.close?.hour % 12}PM</MainData>
						</ContentDataTV>
					</ContentRow>

					<ContentRow>
						<ContentData>
							<MainData1>
								<div>Wednesday</div>
							</MainData1>
						</ContentData>
						<ContentData>
							<MainData1>
								{iProps?.wednesday[0]?.open?.hour}:
								{iProps?.wednesday[0]?.open?.minute}AM
							</MainData1>
						</ContentData>
						<ContentDataTV>
							<MainData>{iProps?.wednesday[0]?.close?.hour % 12}PM</MainData>
						</ContentDataTV>
					</ContentRow>

					<ContentRow>
						<ContentData>
							<MainData1>
								<div>Thursday</div>
							</MainData1>
						</ContentData>
						<ContentData>
							<MainData1>
								{iProps?.thursday[0]?.open?.hour}:
								{iProps?.thursday[0]?.open?.minute}AM
							</MainData1>
						</ContentData>
						<ContentDataTV>
							<MainData>{iProps?.thursday[0]?.close?.hour % 12}PM</MainData>
						</ContentDataTV>
					</ContentRow>

					<ContentRow>
						<ContentData>
							<MainData1>
								<div>Friday</div>
							</MainData1>
						</ContentData>
						<ContentData>
							<MainData1>
								{iProps?.friday[0]?.open?.hour}:
								{iProps?.friday[0]?.open?.minute}AM
							</MainData1>
						</ContentData>
						<ContentDataTV>
							<MainData>{iProps?.friday[0]?.close?.hour % 12}PM</MainData>
						</ContentDataTV>
					</ContentRow>

					<ContentRow>
						<ContentData>
							<MainData1>
								<div>Saturday</div>
							</MainData1>
						</ContentData>
						<ContentData>
							<MainData1>
								{iProps?.saturday === null ? (
									<div>Closed</div>
								) : (
									<div>{iProps?.saturday[0]?.open?.hour}AM</div>
								)}
							</MainData1>
						</ContentData>
						<ContentDataTV>
							<MainData>Closed</MainData>
						</ContentDataTV>
					</ContentRow>

					<ContentRow>
						<ContentData>
							<MainData1>
								<div>Sunday</div>
							</MainData1>
						</ContentData>
						<ContentData>
							<MainData1>
								{iProps?.sunday === null ? (
									<div>Closed</div>
								) : (
									<div>{iProps?.sunday[0]?.open?.hour}AM</div>
								)}
							</MainData1>
						</ContentData>
						<ContentDataTV>
							<MainData>Closed</MainData>
						</ContentDataTV>
					</ContentRow>
				</Table>
			</HoldTable>
		</>
	);
};

export default WorkTable;

const MainData1 = styled.div`
	width: 100%;
	height: 45px;

	display: flex;
	align-items: center;
`;

const MainData = styled.div`
	width: 100%;

	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TheadCT = styled.th`
	width: auto;
	height: 50%;
	padding-left: 10px;
	padding-right: 220px;
	border-right: 2px solid #e2e2e2;
`;
const TheadL = styled.th`
	padding-left: 10px;
	padding-right: 30px;
	border-right: 2px solid #e2e2e2;
`;
const Thead = styled.th`
	padding-left: 10px;
	padding-right: 20px;
	border-right: 2px solid #e2e2e2;
`;

const ContentDataTV = styled.td`
	width: 150px;
	height: 45px;
`;
const ContentData = styled.td`
	width: 220px;
	height: 45px;

	padding-left: 10px;
`;
const ContentRow = styled.tr`
	:nth-child(even) {
		background-color: #fafafc;
	}
`;

const Headrow = styled.tr`
	height: 40px;
`;

const Table = styled.table`
	width: 100%;
`;
const HoldTable = styled.div`
	overflow-x: auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;
