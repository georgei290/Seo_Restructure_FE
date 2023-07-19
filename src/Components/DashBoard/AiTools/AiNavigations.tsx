import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const AiNavigations = () => {
	return (
		<Main>
			<NavLink
				to='/aitools/text-rewritting'
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
				<nav>Text Rewritting</nav>
			</NavLink>

			<NavLink
				to='/aitools/readability-score'
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
				<nav>Readability Score</nav>
			</NavLink>

			<NavLink
				to='/aitools/word-count'
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
				<nav>World Count</nav>
			</NavLink>

			<NavLink
				to='/aitools/website-age'
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
				<nav>Website Age</nav>
			</NavLink>
		</Main>
	);
};

export default AiNavigations;
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
