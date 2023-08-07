import React from "react";
import styled from "styled-components";

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

const KeyWordTable: React.FC<Iprops> = ({ data }) => {
	console.log(data);
	return (
		<div>
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>#</Th>
							<Th>Keyword usage</Th>
							<Th>Avg Length</Th>
							<Th>Range</Th>
						</tr>
					</thead>
					<tbody>
						{data.map(([title, content]: any, index: any) => (
							<tr key={index}>
								<Td>{title}</Td>
								{content["Keyword usage"] ? (
									<Td>{content["Keyword usage"]}</Td>
								) : (
									<Td>-</Td>
								)}
								{content["avg Length"] ? (
									<Td>{content["avg Length"]}</Td>
								) : (
									<Td>-</Td>
								)}
								{content?.Range ? <Td>{content.Range}</Td> : <Td>-</Td>}
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default KeyWordTable;
