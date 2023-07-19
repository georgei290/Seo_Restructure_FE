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
	PWA,
	AiRewritting,
	AiReadability,
	AiWorldCounts,
	AiWebsiteAge,
	MainContent,
	ContentDensity,
	ContentMetatags,
	ContentTitle,
	ContentLinks,
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
			children: [
				{
					index: true,
					element: <MainContent />,
				},

				{
					path: "density",
					element: <ContentDensity />,
				},

				{
					path: "extract-metatags",
					element: <ContentMetatags />,
				},

				{
					path: "title-tags",
					element: <ContentTitle />,
				},

				{
					path: "links",
					element: <ContentLinks />,
				},
			],
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
					element: <MobileSupport />,
				},
				{
					path: "speed-test",
					element: <SpeedTest />,
				},
				{
					path: "headers",
					element: <Headers />,
				},
				{
					path: "pwa",
					element: <PWA />,
				},
			],
		},

		{
			path: "/aitools",
			children: [
				{
					index: true,
					element: <AiTools />,
				},

				{
					path: "text-rewritting",
					element: <AiRewritting />,
				},

				{
					path: "readability-score",
					element: <AiReadability />,
				},

				{
					path: "word-count",
					element: <AiWorldCounts />,
				},

				{
					path: "website-age",
					element: <AiWebsiteAge />,
				},
			],
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
