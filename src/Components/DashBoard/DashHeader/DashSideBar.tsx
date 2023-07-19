import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
	MdOutlineBusiness,
	MdOutlineScreenSearchDesktop,
} from "react-icons/md";

import { RiBarChartFill } from "react-icons/ri";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { SlKey } from "react-icons/sl";
import { TbUnlink } from "react-icons/tb";
import { BiLogOut } from "react-icons/bi";
import { logOut } from "../../../utils/stateManagement/authState";
import { useDispatch } from "react-redux";
import { BsFillBarChartFill } from "react-icons/bs";

const DashSideBar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	return (
		<Container>
			<br />
			<br />

			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						background: isActive ? "#EED9FF" : " none",
						height: "50px",

						borderLeft: isActive ? "4px solid #AE67FA" : "none",
						display: isActive ? "flex" : "flex",
						marginTop: isActive ? "8px" : "8px",
					};
				}}
				to='/seochecker/search'>
				<Hold>
					<IconHold>
						<MdOutlineScreenSearchDesktop />
					</IconHold>
					<Nav>Search Engine Analysis</Nav>
				</Hold>
			</NavLink>

			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						background: isActive ? "#EED9FF" : " none",
						height: "50px",

						borderLeft: isActive ? "4px solid #AE67FA" : "none",
						display: isActive ? "flex" : "flex",
						marginTop: isActive ? "8px" : "8px",
					};
				}}
				to='/backlinkchecker'>
				<Hold>
					<IconHold>
						<TbUnlink />
					</IconHold>
					<Nav>BackLink Analyzer</Nav>
				</Hold>
			</NavLink>

			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						background: isActive ? "#EED9FF" : " none",
						height: "50px",
						borderLeft: isActive ? "4px solid #AE67FA" : "none",
						display: isActive ? "flex" : "flex",
						marginTop: isActive ? "8px" : "8px",
					};
				}}
				to='/siteflow'>
				<Hold>
					<IconHold>
						<BsFillBarChartFill />
					</IconHold>
					<Nav>Site Flow</Nav>
				</Hold>
			</NavLink>

			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						background: isActive ? "#EED9FF" : " none",
						height: "50px",
						borderLeft: isActive ? "4px solid #AE67FA" : "none",
						display: isActive ? "flex" : "flex",
						marginTop: isActive ? "8px" : "8px",
					};
				}}
				to='/keywords'>
				<Hold>
					<IconHold>
						<SlKey />
					</IconHold>
					<Nav> Keyword Ranker</Nav>
				</Hold>
			</NavLink>

			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						background: isActive ? "#EED9FF" : " none",
						height: "50px",
						borderLeft: isActive ? "4px solid #AE67FA" : "none",
						display: isActive ? "flex" : "flex",
						marginTop: isActive ? "8px" : "8px",
					};
				}}
				to='/contentanalyzer'>
				<Hold>
					<IconHold>
						<BsJournalBookmarkFill />
					</IconHold>
					<Nav>Content Analyzer</Nav>
				</Hold>
			</NavLink>

			<NavLink
				style={({ isActive }) => {
					return {
						color: isActive ? "black" : "black",
						textDecoration: isActive ? "none" : " none",
						background: isActive ? "#EED9FF" : " none",
						height: "50px",

						borderLeft: isActive ? "4px solid #AE67FA" : "none",
						display: isActive ? "flex" : "flex",
						marginTop: isActive ? "8px" : "8px",
					};
				}}
				to='/aitools'>
				<Hold>
					<IconHold>
						<MdOutlineBusiness />
					</IconHold>
					<Nav>Ai Tools</Nav>
				</Hold>
			</NavLink>

			<br />
			<br />
			<br />
			<br />
			<br />

			<NavLink style={{ textDecoration: "none" }} to='/'>
				<Hold
					onClick={() => {
						dispatch(logOut());
						dispatch(logOut());
						dispatch(logOut());
						navigate("/");
					}}>
					<IconHold>
						<BiLogOut />
					</IconHold>
					<Nav>LogOut</Nav>
				</Hold>
			</NavLink>
		</Container>
	);
};

export default DashSideBar;

const IconHold = styled.div`
	margin-right: 10px;
	font-size: 20px;
	font-weight: 700;
	display: flex;
	align-items: center;
	color: black;

	margin-top: 15px;
`;
const Nav = styled.div`
	text-decoration: none;
	font-size: 15px;
	color: #3e4581;
	font-weight: 700;
	/* margin-top: 7px; */
`;
const Hold = styled.div`
	text-decoration: none;
	display: flex;
	margin-left: 20px;
	align-items: center;
	/* background-color: red; */
`;

const Container = styled.div`
	width: 240px;
	border-right: 1px solid #f1f1f1;
	height: 100vh;
	position: fixed;
	margin-top: 60px;
	background-color: white;
`;
