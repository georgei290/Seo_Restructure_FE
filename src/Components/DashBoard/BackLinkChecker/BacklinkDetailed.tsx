import React from "react";
import styled from "styled-components";
import SimpleCard from "./SimpleCard";
// 
// interface Iprops {
	// summary: any;
// }
const BacklinkDetailed: React.FC = () => {
	return (
		<div>
			<CardHolder>
				<SimpleCard BackTitle='Ranks' count={0} />
				<SimpleCard BackTitle='BackLinks' count={0} />
				<SimpleCard BackTitle='Crawled Pages' count={0} />
				<SimpleCard BackTitle='Broken_backlinks' count={0} />
			</CardHolder>

			<CardHolder>
				<SimpleCard
					BackTitle='Broken_pages

'
					count={0}
				/>
				<SimpleCard BackTitle='External_links' count={0} />
				<SimpleCard BackTitle='Internal_links' count={0} />
				<SimpleCard BackTitle='Backlinks_spam' count={0} />
			</CardHolder>
		</div>
	);
};

export default BacklinkDetailed;

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
