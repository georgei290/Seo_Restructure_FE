import React from "react";
import styled from "styled-components";
import DashBoardRoutes from "../AllRoutes/DashBoardRoutes";
import DashHeader from "./DashHeader/DashHeader";

const MainDashBoard = () => {
	return (
		<>
			<DashHeader />
			<Container>
				<DashBoardRoutes />
			</Container>
		</>
	);
};

export default MainDashBoard;

const Container = styled.div`
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: 768px) {
		justify-content: flex-start;
	}
`;
