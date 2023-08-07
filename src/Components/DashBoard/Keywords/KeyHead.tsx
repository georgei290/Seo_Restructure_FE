import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiFillDashboard } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdSnippetFolder } from "react-icons/md";
import { FaShopware } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const KeyHead = () => {
	return (
		<Container>
			<NavBack>
				<NavCon>
					<NavLinkStyled to='/keywords/aI-keyword-research'>
						<FirstNav>
							<div>
								<BsFillPhoneFill
									style={{
										fontSize: "22px",
										marginTop: "10px",
									}}
								/>
							</div>
							<p>Ai Keyword Research</p>
						</FirstNav>
					</NavLinkStyled>
					<NavLinkStyled to='/keywords/suggestion-difficulty'>
						<FirstNav>
							<div>
								<AiFillDashboard
									style={{
										fontSize: "22px",
										marginTop: "10px",
										marginRight: "5px",
									}}
								/>
							</div>
							<p>Difficult/Suggession</p>
						</FirstNav>
					</NavLinkStyled>

					<NavLinkStyled to='/keywords/suggestion-fast'>
						<FirstNav>
							<div>
								<MdSnippetFolder
									style={{
										fontSize: "22px",
										marginTop: "10px",
										marginRight: "5px",
									}}
								/>
							</div>
							<p> Suggestion (Fast)</p>
						</FirstNav>
					</NavLinkStyled>
				</NavCon>

				<BackNv>
					<div>
						<AiOutlineArrowLeft
							style={{
								fontSize: "20px",
								marginTop: "15px",
							}}
						/>
					</div>
					<p>Back</p>
				</BackNv>
			</NavBack>
		</Container>
	);
};

export default KeyHead;

const NavLinkStyled = styled(NavLink)`
	color: black;
	text-decoration: none;
	display: flex;
	border-bottom: none;

	&.active {
		color: black;
		text-decoration: none;
		display: flex;
		border-bottom: 4px solid #3e4581;
	}

	@media screen and (max-width: 768px) {
		/* Add styles specific to screens with max-width: 768px */
		/* For example, you can change the font size or padding for smaller screens */
	}
`;

const FirstNav = styled.div`
	width: auto;
	display: flex;
	border-right: 1px solid grey;
	height: 100%;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;

		align-items: center;
	}

	div {
		margin-left: 5px;
	}
	p {
		font-weight: 600;
		padding-right: 4px;
		font-size: 13px;
		color: #3e4581;
	}
`;

const NavBack = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;
const NavCon = styled.div`
	width: 45%;

	display: flex;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`;

const BackNv = styled.div`
	width: 10%;
	border-left: 1px solid grey;
	height: 100%;
	display: flex;
	align-items: center;
	cursor: pointer;

	div {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 6px;
	}
	p {
		margin-left: 6px;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const Container = styled.div`
	width: calc(100vw - 240px);
	height: 40px;
	display: flex;
	border-bottom: 1px solid grey;
	border-top: 1px solid grey;
	overflow: hidden;

	/* justify-content: space-between; */
	/* align-items: center; */
	flex-direction: column;
	background-color: #f8f8ff;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: auto;
	}
	/* flex-direction: column; */
`;
