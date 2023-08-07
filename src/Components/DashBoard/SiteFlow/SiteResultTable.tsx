import React from "react";
import styled from "styled-components";

interface Iprops {
	data : any
	
	
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

const SiteResultTable: React.FC<Iprops> = ({data}) => {
	
	
	


	
	
	
	
	

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
						{data.map((item:any, index:any) => (
							<tr key={index}>
								<Td>{item.Title}</Td>
								<Td>
									<div>
										{item.Feedback}
									</div>
									
								</Td>
								<Td>{item.Status}</Td>
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default SiteResultTable;
