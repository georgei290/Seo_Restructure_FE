import React from "react";
import styled from "styled-components";

interface Iprops {
	data: any;
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
	max-width: 300px;

	&:last-child {
		border-right: none;
	}
`;

interface Iprops {
	data: any;
}

const LostBackLinkTable: React.FC<Iprops> = ({ data }) => {
	console.log("dayaya", data);

	const mainData = data?.map((props: any) => {
		return props?.Backlink;
	});

	console.log(
		mainData?.map((prop: any) => {
			return prop;
		}),
	);

	return (
		<div>
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>URL</Th>
							<Th>
								Domain
								<br />
								Authority
							</Th>
							<Th>
								Page
								<br />
								Authority
							</Th>

							<Th>IPS</Th>
							<Th>Domain</Th>
						</tr>
					</thead>
					<tbody>
						{mainData?.map((item: any, index: any) => (
							<tr key={index}>
								<Td>
									<a href={item.URL}>{item.URL}</a>
								</Td>
								<Td>{item["Domain authority"]}</Td>
								<Td>{item["Page authority"]}</Td>
								<Td>{item["IP"]}</Td>
								<Td>{item["Domain"]}</Td>
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default LostBackLinkTable;
