import styled from "styled-components";

// interface Iprops {
	// summary: any;
// }
const BacklinkLevel: React.FC = () => {
	return (
		<div>
			<Main>
				<TopMain>
					<TopHolder>
						<MainTop>
							<Title>referring_domains</Title>
							<Build>
								<MainTitle>{0}</MainTitle>
								<Bar>
									<ColorBar color='#0da1e3' val={`${(46 / 120) * 100}px`} />
								</Bar>
							</Build>
						</MainTop>
						<MainTop>
							<Title>referring_ips</Title>
							<Build>
								<MainTitle>{0}</MainTitle>
								<Bar>
									<ColorBar color='#0da1e3' val={`${(46 / 120) * 100}px`} />
								</Bar>
							</Build>
						</MainTop>
						<MainTop>
							<Title>referring_pages</Title>
							<Build>
								<MainTitle>{0}</MainTitle>
								<Bar>
									<ColorBar color='#0da1e3' val={`${(46 / 120) * 100}px`} />
								</Bar>
							</Build>
						</MainTop>
						<MainTop>
							<Title>referring_subnets</Title>
							<Build>
								<MainTitle>{0}</MainTitle>
								<Bar>
									<ColorBar
										color='#0da1e3'
										// val={`${Math.min(summary?.referring_subnets / 1000, 95)}%`}
										val={`0`}
									/>
								</Bar>
							</Build>
						</MainTop>
					</TopHolder>
					<TopHolder2>
						<Section>
							<Text>referring_links_types</Text>
							<Number>{0}</Number>
							<Space />
							<Detail>
								<InnerDetail>
									<SmallText>Anchor</SmallText>
									<Numb>0</Numb>
									<SmallBar />
								</InnerDetail>
							</Detail>
						</Section>
						<Section>
							<Text>referring_links_attributes</Text>
							<Number>
								{" "}
								{0}
							</Number>
							<Space />
							<Detail>
								<InnerDetail>
									<SmallText>Anchor</SmallText>
									<Numb>0</Numb>
									<SmallBar />
								</InnerDetail>
							</Detail>
						</Section>
					</TopHolder2>
				</TopMain>

				<SideMain>
					<Holder3>
						<HolderText>DOFOLLOW | NOFOLLOW</HolderText>
						<Space />
						<BarColor>
							<BarColorOther />
						</BarColor>
						<TextNumb>
							<Numbed>34.4%</Numbed>
							<Numbed>64.4%</Numbed>
						</TextNumb>
					</Holder3>
					<Holder4>
						<Hoz>
							<Card>
								<Edu>TARGET</Edu>
								<Space />
								<EduNumb style={{ fontSize: "12px", color: "blue" }}>
								any
								</EduNumb>
							</Card>
							<Card>
								<Edu>Server</Edu>
								<Space />
								<EduNumb>0</EduNumb>
							</Card>
						</Hoz>
						<Hoz>
							<Card>
								<Edu>IPS</Edu>
								<Space />
								<EduNumb>12</EduNumb>
							</Card>
							<Card>
								<Edu>SUBNETS</Edu>
								<Space />
								<EduNumb>50</EduNumb>
							</Card>
						</Hoz>
					</Holder4>
				</SideMain>
			</Main>
		</div>
	);
};
// #5BD9B5

export default BacklinkLevel;

{
	/* {Object.entries(summary?.referring_links_types)?.map( */
}
// ([key, value]: any) => (
// <InnerDetail>
{
	/* <SmallText>{key}</SmallText> */
}
{
	/* <Numb>{value}</Numb> */
}
{
	/* <SmallBar /> */
}
{
	/* </InnerDetail> */
}
// ),
// )}

const TopHolder = styled.div`
	width: 100%;
	margin: 0 10px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	@media screen and (max-width: 768px) {
		width: 95%;
		flex-wrap: wrap;
	}
`;

const TopHolder2 = styled.div`
	width: 100%;
	margin: 0 10px;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;

	@media screen and (max-width: 768px) {
		width: 95%;
		flex-wrap: wrap;
	}
`;

const Holder4 = styled.div`
	margin-top: 10px;
`;

const EduNumb = styled.div`
	font-weight: 700;
	font-size: 25px;
`;

const Edu = styled.div`
	font-weight: 500;
	font-size: 15;
`;

const Card = styled.div`
	background-color: white;
	width: 45%;
	height: 60px;
	margin-right: 10px;
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

const Hoz = styled.div`
	display: flex;
	margin: 10px 0 0 0;
`;

const Numbed = styled.div`
	font-weight: 600;
	font-size: 15px;
	margin-bottom: 6px;
`;

const TextNumb = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
`;

const BarColorOther = styled.div`
	width: 40%;
	height: 100%;
	border-radius: 30px;
	background-color: #5bd9b5;
`;

const BarColor = styled.div`
	width: 90%;
	height: 6px;
	border-radius: 30px;
	background-color: #ff8e00;
`;

const HolderText = styled.div`
	font-size: 15px;
	font-weight: 600;
`;

const Holder3 = styled.div`
	height: 150px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 0;
`;

const SmallBar = styled.div`
	width: 20px;
	background-color: #0da1e3;
	height: 3px;
	margin-top: -6px;
	margin-bottom: 10px;
	border-radius: 30px;
`;

const Numb = styled.div`
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 7px;
	margin-right: 20px;
`;

const SmallText = styled.div`
	font-size: 12px;
	margin-bottom: 0px;
	min-width: 60px;
	font-weight: 600;
	height: 30px;

	@media screen and (max-width: 425px) {
		font-size: 010px;
	}
`;

const InnerDetail = styled.div`
	width: 100px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	margin-right: 20px;

	@media screen and (max-width: 425px) {
		margin-top: -40px;
		justify-content: flex-start;
	}
`;

const Detail = styled.div`
	display: flex;
	margin: 0 10px;
	overflow-x: scroll;
`;
const Space = styled.div`
	flex: 1;
`;

const Number = styled.div`
	font-weight: 800;
	font-size: 35px;
	margin-bottom: 50px;
`;

const Text = styled.div`
	font-size: 12px;
	margin-top: 10px;
	margin-bottom: 15px;
	font-weight: 600;
`;

const Section = styled.div`
	width: 300px;
	height: 220px;
	background-color: white;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	margin: 10px;

	@media screen and (max-width: 425px) {
		margin: 5px 0;
		width: 90%;
		height: 190px;
	}
`;

const Holder2 = styled.div`
	display: flex;
	margin: 10px;
`;

const Holder1 = styled.div`
	display: flex;
	flex-wrap: wrap;
	background-color: blueviolet;
	justify-content: center;
`;

const ColorBar = styled.div<{ color: string; val: string }>`
	background-color: ${({ color }) => color};
	width: ${({ val }) => val};
	height: 100%;
	border-radius: 10px;
`;

const Bar = styled.div`
	background-color: #d6d8e3;
	width: 120px;
	height: 7px;
	border-radius: 10px;
	margin-left: 10px;
	overflow: hidden;
	margin-top: 6px;
`;

const Build = styled.div`
	display: flex;
	align-items: center;
	height: 50px;
	flex-wrap: wrap;
`;

const Title = styled.div`
	font-weight: 600;
	font-size: 12px;
`;

const MainTitle = styled.div`
	font-weight: 800;
	font-size: 25px;
	margin-top: 8px;
	min-width: 30px;
`;

const MainTop = styled.div`
	width: 270px;
	height: 80px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin: 10px;
	padding-left: 10px;

	@media screen and (max-width: 425px) {
		margin: 5px;
		width: 90%;
	}
`;

const SideMain = styled.div`
	width: 460px;
	display: flex;
	flex-direction: column;
	padding: 10px;
`;

const TopMain = styled.div`
	width: 700px;
	display: flex;
	flex-wrap: wrap;

	@media screen and (max-width: 425px) {
		width: 100%;
	}
`;

const Main = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	width: 99%;
	justify-content: center;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
