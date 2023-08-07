import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";
//
interface Iprops {
	summary: any;
}
const BacklinkDetailed: React.FC<Iprops> = ({ summary }) => {
	console.log(summary);

	const CalDomainAuthority = () => {
		const res1 = summary?.topBackLinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});

		const res2 = summary?.lostBacklinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});

		const totalDomainTop = res1?.reduce((a: any, b: any) => {
			return a + b["Domain authority"];
		}, 0);

		const totalDomainLost = res2?.reduce((a: any, b: any) => {
			return a + b["Domain authority"];
		}, 0);

		return totalDomainTop + totalDomainLost;
	};

	const CalPageAuthority = () => {
		const res1 = summary?.topBackLinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});
		const res2 = summary?.lostBacklinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});
		const totalPageTop = res1?.reduce((a: any, b: any) => {
			return a + b["Page authority"];
		}, 0);
		const totalPageLost = res2?.reduce((a: any, b: any) => {
			return a + b["Page authority"];
		}, 0);
		return totalPageTop + totalPageLost;
	};

	const CalSpamCount = () => {
		const res1 = summary?.topBackLinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});
		const res2 = summary?.lostBacklinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});
		const totalSpamTop = res1?.reduce((a: any, b: any) => {
			return a + b["Spam score"];
		}, 0);
		const totalSpamLost = res2?.reduce((a: any, b: any) => {
			return a + b["Spam score"];
		}, 0);
		return totalSpamTop + totalSpamLost;
	};

	const CalExternalLinks = () => {
		const res1 = summary?.topBackLinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});
		const res2 = summary?.lostBacklinkData?.data?.data?.map((props: any) => {
			return props?.Backlink;
		});
		const totalExtTop = res1?.reduce((a: any, b: any) => {
			return a + b["Spam score"];
		}, 0);
		const totalExtLost = res2?.reduce((a: any, b: any) => {
			return a + b["Spam score"];
		}, 0);
		return totalExtTop + totalExtLost;
	};

	return (
		<div>
			<CardHolder>
				<SimpleCard
					BackTitle='Total Top Backlinks'
					count={summary?.topBackLinkData?.data?.data?.length}
				/>
				<SimpleCard
					BackTitle='Total Lost Backlinks'
					count={summary?.lostBacklinkData?.data?.data?.length}
				/>
				<SimpleCard BackTitle='Domain Authority' count={CalDomainAuthority()} />
				<SimpleCard BackTitle='Page Authority' count={CalPageAuthority()} />
			</CardHolder>

			<CardHolder>
				<SimpleCard BackTitle='Spam Count' count={CalSpamCount()} />
				<SimpleCard BackTitle='External_links' count={CalExternalLinks()} />

				<Main>
					<Title>Input Url</Title>
					<MainTitle>{summary?.lostBacklinkData?.data["input URL"]}</MainTitle>
				</Main>
			</CardHolder>
		</div>
	);
};

export default BacklinkDetailed;

const Title = styled.div`
	font-weight: 600;
`;

const MainTitle = styled.div`
	font-weight: 800;
	font-size: 25px;
	margin-top: 8px;
`;

const Main = styled.div`
	width: 400px;
	height: 100px;
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 10px;

	@media screen and (max-width: 320px) {
		width: 95%;
	}
`;

const CardHolder = styled.div`
	/* background-color: red; */
	/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
	width: 98%;
	display: flex;
	/* flex-wrap: wrap; */
	justify-content: center;

	@media screen and (max-width: 768px) {
		flex-wrap: wrap;
	}
`;
