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

interface Iprops {
	data: any;
}

const ResultTable: React.FC<Iprops> = ({ data }) => {
	return (
		<div>
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>Title - URL</Th>
							<Th>Breadcrumb</Th>
							<Th>Description</Th>
							<Th>
								Rank
								<br /> Group
							</Th>
							<Th>Domain</Th>
						</tr>
					</thead>
					<tbody>
						{data.map((item: any, index: any) => (
							<tr key={index}>
								<Td style={{ color: " #1976D2" }}>
									{item.title}
									<br />
									<a
										href={item.url}
										style={{ color: "#136F48", fontWeight: "bold" }}>
										{item.url}
									</a>
								</Td>
								<Td>{item.breadcrumb}</Td>
								<Td>{item.description}</Td>
								<Td>{item.rank_group}</Td>
								<Td>{item.domain}</Td>
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default ResultTable;
