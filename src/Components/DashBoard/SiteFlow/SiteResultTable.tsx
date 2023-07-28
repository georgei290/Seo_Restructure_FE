import React from "react";
import styled from "styled-components";

interface TableDataItem {
	column1: string;
	column2: string;
	column3: string;
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

const SiteResultTable: React.FC = () => {
	const data: TableDataItem[] = [
		{
			column1: "Is not configured for a custom splash sc...",
			column2: "Copy A themed splash screen ensures a high-quality experience when users launch your app from their homescreens.",
			column3: "negative"
		},
		{ column1: "Row 2", column2: "Data 2", column3: "Value 2" },
		{ column1: "Row 3", column2: "Data 3", column3: "Value 3" },
		// Add more data items as needed
	];

	return (
		<div>
			<TableContainer>
				<Table>
					<thead>	
						<tr>
							<Th>Title</Th>
							<Th>FeedBack</Th>
							<Th>Status</Th>
						</tr>
					</thead>
					<tbody>
						{data.map((item, index) => (
							<tr key={index}>
								<Td>{item.column1}</Td>
								<Td>
									<div>
										{item.column2}
									</div>
									
								</Td>
								<Td>{item.column3}</Td>
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default SiteResultTable;
