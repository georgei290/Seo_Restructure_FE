import React from 'react'
import styled from 'styled-components'
import SiteHeader from './SiteHeader'

interface TableDataItem {
	column1: string;
	column2: string;
	column3: string;
	column4: string;

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
	border-right: 1px solid #ddd;
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


const SpeedTest = () => {
	const data: TableDataItem[] = [
		{
			column1: "Desktop",
			column2: "60",
			column3: "5",
			column4: "5",

		},
		{
			column1: "Mobile",
			column2: "50",
			column3: "6",
			column4: "6",

		}
		// Add more data items as needed
	];
  return (
      <Container>
		  <SiteHeader />
		   <Wrapper>
			  
					<Main>
						<InputText>Keyword</InputText>
						<Input2>
							<Input3
							
								placeholder='Enter The Target'
								type='search'
							/>

							<Button>
								Analyze
							</Button>
						</Input2>
			  </Main>
			  <br/>
			  <br/>
			  <br/>
			  
			  	<TableTitle>
					<span>Speed Result</span>
				</TableTitle>
				<TableContainer>
					<Table>
						<thead>
							<tr>
								<Th>Device</Th>
								<Th>Google  PageSpeed Score</Th>
								<Th>Optimized</Th>
								<Th>Improments</Th>
								
							</tr>
						</thead>
						<tbody>
							{data.map((item, index) => (
								<tr key={index}>
									<Td>{item.column1}</Td>
									<Td>{item.column2}</Td>
									<Td>{item.column3}</Td>
									<Td>{item.column4}</Td>
									
								</tr>
							))}
						</tbody>
					</Table>
				</TableContainer>
		</Wrapper>
         
      </Container>
  )
}

export default SpeedTest


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

const Main = styled.div`
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
`;