import React, { useState } from "react";
import styled from "styled-components";

interface TableDataItem {
	column1: string;
	column2: string;
	column3: string;
}

interface ResponsiveTableProps {
	data: TableDataItem[];
}

const TableContainer = styled.div`
	overflow-x: auto;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	background-color: white;
	overflow-x: scroll;

	tbody > tr:nth-child(even) {
		background-color: #f8f8ff;
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
	/* border-bottom: 1px solid #ddd; */
	border-right: 1px solid #ddd;

	/* Add styles for long content */
	white-space: pre-wrap;
	word-wrap: break-word;

	&:last-child {
		border-right: none;
	}
`;

const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 16px;
`;

const PaginationButton = styled.button`
	margin: 0 4px;
	padding: 8px 12px;
	font-size: 14px;
	border: none;
	border-radius: 4px;
	background-color: ${(props: any) => (props.active ? "#007bff" : "#ddd")};
	color: ${(props: any) => (props.active ? "#fff" : "#333")};
	cursor: pointer;
`;

const itemsPerPage = 5;

const ResponsiveTable: React.FC<ResponsiveTableProps> = () => {
	const data: TableDataItem[] = [
		{ column1: "Row 1", column2: "Data 1", column3: "Value 1" },
		{ column1: "Row 2", column2: "Data 2", column3: "Value 2" },
		{ column1: "Row 3", column2: "Data 3", column3: "Value 3" },
		// Add more data items as needed
	];
	const [currentPage, setCurrentPage] = useState(1);

	const totalItems = data.length;
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	const handleClick = (page: number) => {
		setCurrentPage(page);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const currentData = data.slice(startIndex, endIndex);

	return (
		<div>
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>Header 1</Th>
							<Th>Header 2</Th>
							<Th>Header 3</Th>
							<Th>Header 4</Th>
						</tr>
					</thead>
					<tbody>
						{currentData.map((item, index) => (
							<tr key={index}>
								<Td>{item.column1}</Td>
								<Td>{item.column2}</Td>
								<Td>{item.column3}</Td>
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>

			<PaginationWrapper>
				{Array.from({ length: totalPages }, (_, index) => index + 1).map(
					(page) => (
						<PaginationButton
							key={page}
							// active={page === currentPage}
							onClick={() => handleClick(page)}>
							{page}
						</PaginationButton>
					),
				)}
			</PaginationWrapper>
		</div>
	);
};

export default ResponsiveTable;
