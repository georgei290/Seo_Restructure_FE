import loaded from "@loadable/component";

//reducing the bundle size by spliting the code size

export const Header = loaded(() => import("../LandingPage/Header/Header"));
export const Homescreen = loaded(() => import("../HomeScreen"));
export const Signup = loaded(() => import("../Auth/Signup"));
export const SignIn = loaded(() => import("../Auth/SignIn"));
export const ForgetPass = loaded(() => import("../Auth/ForgetPass"));
export const ResetPass = loaded(() => import("../Auth/ResetPass"));
export const AfterRegister = loaded(() => import("../Auth/AfterRegister"));

export const CongrateComponent = loaded(
	() => import("../Auth/CongrateComponent"),
);

// dashboard loadable components
export const SeoChecker = loaded(
	() => import("../DashBoard/SeoChecker/SeoChecker"),
);

export const BackLinkChecker = loaded(
	() => import("../DashBoard/BackLinkChecker/BackLinkChecker"),
);
export const BusinessData = loaded(
	() => import("../DashBoard/BusinessData/BusinessData"),
);
export const ContentAnalyzer = loaded(
	() => import("../DashBoard/ContentAnalyzer/ContentAnalyzer"),
);
export const OnPageData = loaded(
	() => import("../DashBoard/OnPageData/OnPageData"),
);

export const DetaildOnpage = loaded(
	() => import("../DashBoard/OnPageData/DetailsOnpage"),
);

export const Keywords = loaded(() => import("../DashBoard/Keywords/KeyWords"));
export const KewWordTable = loaded(
	() => import("../DashBoard/Keywords/KewWordTable"),
);

export const SeoSearchEngine = loaded(
	() => import("../DashBoard/SeoChecker/SeoSearchEngines"),
);

export const AiTools = loaded(() => import("../DashBoard/AiTools/AiTools"));
export const SiteFlow = loaded(() => import("../DashBoard/SiteFlow/SiteFlow"));
