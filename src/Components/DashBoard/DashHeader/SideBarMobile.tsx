import React from "react";
import { NavLink } from "react-router-dom";
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

interface IData {
	toggleShow: () => void;
}

const SideBarMobile: React.FC<IData> = ({ toggleShow }) => {
	return (
		<MainCont onClick={toggleShow}>
			<Back>
				<Container>
					<br />
					<br />

					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}
						to='/seochecker'>
						<Hold>
							<IconHold>
								<MdOutlineScreenSearchDesktop />
							</IconHold>
							<Nav>Seo Checker</Nav>
						</Hold>
					</NavLink>

					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}
						to='/backlinkchecker'>
						<Hold>
							<IconHold>
								<TbUnlink />
							</IconHold>
							<Nav>BackLink Checker</Nav>
						</Hold>
					</NavLink>

					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}
						to='/businessdata'>
						<Hold>
							<IconHold>
								<RiBarChartFill />
							</IconHold>
							<Nav>Business Data</Nav>
						</Hold>
					</NavLink>

					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
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
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}
						to='/onpagedata'>
						<Hold>
							<IconHold>
								<MdOutlineBusiness />
							</IconHold>
							<Nav>OnPage Data</Nav>
						</Hold>
					</NavLink>

					<NavLink
						style={({ isActive }) => {
							return {
								color: isActive ? "black" : "black",
								textDecoration: isActive ? "none" : " none",
								background: isActive ? "#e3f7fe" : " none",
								height: "50px",

								borderLeft: isActive ? "4px solid #1DA1F2" : "none",
								display: isActive ? "flex" : "flex",
								marginTop: isActive ? "8px" : "8px",
							};
						}}
						to='/keywords'>
						<Hold>
							<IconHold>
								<SlKey />
							</IconHold>
							<Nav> Keywords</Nav>
						</Hold>
					</NavLink>
					<br />
					<br />
					<br />
					<br />
					<br />

					<NavLink style={{ textDecoration: "none" }} to='/'>
						<Hold>
							<IconHold>
								<BiLogOut />
							</IconHold>
							<Nav>LogOut</Nav>
						</Hold>
					</NavLink>
				</Container>
			</Back>
		</MainCont>
	);
};

export default SideBarMobile;

const Back = styled.div`
	background-color: rgba(0, 0, 0, 0.5);
	width: 100%;
`;

const MainCont = styled.div`
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 0.8);
	width: 100%;
	bottom: 0;
`;

const IconHold = styled.div`
	margin-right: 10px;
	font-size: 17px;
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
