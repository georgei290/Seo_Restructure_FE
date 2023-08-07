import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const ContentNavigation = () => {
	const location = useLocation();
	return (
		<Main>
			<NavLink
				to='/contentanalyzer/density'
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						borderBottom: isActive ? "2px solid #AE67FA" : "none",
						alignItems: isActive ? "center" : "center",
						textAlign: isActive ? "center" : "center",
						justifyContent: "center",
						display: "flex",
						height: "100%",
						marginLeft : "30px"
					};
				}}>
				<nav>Keyword Density</nav>
			</NavLink>

			<NavLink
				to='/contentanalyzer/links'
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						borderBottom: isActive ? "2px solid #AE67FA" : "none",
						alignItems: isActive ? "center" : "center",
						textAlign: isActive ? "center" : "center",
						justifyContent: "center",
						display: "flex",
						height: "100%",
					};
				}}>
				<nav>Links</nav>
			</NavLink>
		</Main>
	);
};

export default ContentNavigation;
const Main = styled.div`
	background-color: white;
	height: 50px;
	border: 1px solid #e7e7e7;
	display: flex;
	align-items: center;

	nav {
		margin-right: 40px;
		margin-left: 10px;
		text-align: center;
	}
`;
