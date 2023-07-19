import { useRoutes } from "react-router-dom";
import PrivateRoute from "../../utils/PrivateRoute";
import {
	BackLinkChecker,
	BusinessData,
	ContentAnalyzer,
	Keywords,
	OnPageData,
	SeoChecker,
	SeoSearchEngine,
	DetaildOnpage,
	KewWordTable,
	AiTools,
	SiteFlow,
	MobileSupport,
	SpeedTest,
	Headers,
	PWA
} from "./Bundled";

const DashBoardRoutes = () => {
	let element = useRoutes([
		{
			path: "/seochecker",
			children: [
				{
					index: true,
					element: <SeoSearchEngine />,
				},
				{
					path: "search",
					element: <SeoChecker />,
				},
			],
		},

		{
			path: "/backlinkchecker",
			element: <BackLinkChecker />,
		},
		{
			path: "/businessdata",
			element: <BusinessData />,
		},
		{
			path: "/contentanalyzer",
			element: <ContentAnalyzer />,
		},

		{
			path: "/siteflow",
			children: [
				{
					index: true,
					element: <SiteFlow />,
				},
				{
					path: "mobile-support",
					element: <MobileSupport/>
				},
				{
					path: "speed-test",
					element: <SpeedTest/>
				},
				{
					path: "headers",
					element: <Headers/>
				},
				{
					path: "pwa",
					element: <PWA/>
				},
			]
		},

		{
			path: "/aitools",
			element: <AiTools />,
		},

		{
			path: "/onpagedata",
			children: [
				{
					index: true,
					element: <OnPageData />,
				},

				{
					path: "detail/:id",
					element: <DetaildOnpage />,
				},
			],
		},
		{
			path: "/keywords",
			children: [
				{
					index: true,
					element: <KewWordTable />,
				},

				{
					path: ":id",
					element: <Keywords />,
				},
			],
		},
	]);

	return element;
};

export default DashBoardRoutes;
