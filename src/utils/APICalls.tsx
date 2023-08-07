import axios from "axios";
import Swal from "sweetalert2";
import { iRegister, iSign, iEmail, iPassword } from "./interfaces";

const url = "https://dom-ranker-2487.onrender.com";
// const url = "http://localhost:2244";

export const registerUser = async (data: iRegister) => {
	try {
		const mainURL = `${url}/api/v1/create-user`;

		await axios
			.post(mainURL, data)
			.then((res) => {
				return res.data.message;
			})
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title:
						"You account has been created, please go to your email to finished up!",
					showConfirmButton: false,
					timer: 3500,
				});
			})
			.catch((error: any) => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: error.response.data.data.split(" ")[0]
						? "Email already exist, please use another Email"
						: "Something want wrong",
					showConfirmButton: false,
					timer: 3500,
				});
			});
	} catch (error: any) {
		return error;
	}
};

export const signinUser = async (data: iSign) => {
	try {
		const mainURL = `${url}/api/v1/login`;
		return await axios
			.post(mainURL, data)
			.then((res) => res.data)

			.catch((error: any) => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: error.response.data.message,
					showConfirmButton: false,
					timer: 3500,
				});
			});
	} catch (error: any) {
		Swal.fire({
			position: "center",
			icon: "error",
			title: error.response.data.message,
			showConfirmButton: false,
			timer: 3500,
		});
	}
};

export const changeUsersPassword = async (data: iPassword, id: string) => {
	try {
		const mainURL = `${url}/api/user/${id}/change-password`;
		await axios
			.patch(mainURL, data)
			.then((res) => {
				return res.data.data;
			})
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Your Password has been changed!",
					showConfirmButton: false,
					timer: 3500,
				});
			})
			.catch((error: any) => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: error.response.data.message,
					showConfirmButton: false,
					timer: 3500,
				});
			});
	} catch (error: any) {
		return error;
	}
};

export const congrateCall = async (id: string) => {
	try {
		const mainURL = `${url}/api/v1/${id}/verified-user`;
		await axios.get(mainURL);
	} catch (error: any) {
		return error;
	}
};

export const resetUsersPassword = async (data: iEmail) => {
	try {
		const mainURL = `${url}/api/user/reset-password`;
		await axios
			.post(mainURL, data)
			.then((res) => {
				return res.data.data;
			})
			.then((res) => {
				Swal.fire({
					position: "center",
					icon: "success",
					title: "Check Your Email to continue this process!",
					showConfirmButton: false,
					timer: 3500,
				});
			})
			.catch((error: any) => {
				Swal.fire({
					position: "center",
					icon: "error",
					title: error.response.data.message,
					showConfirmButton: false,
					timer: 3500,
				});
			});
	} catch (error: any) {
		return error;
	}
};

// google search Request
export const SeoSearchRanking = async (
	keyword: any,
	id: string,
	language: string,
	location: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/ranking`;
		return await axios
			.post(
				mainURL,
				{
					keyword,
					language,
					location,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// google search Request
export const SeoSearchAnalyzer = async (
	keyword: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/serp-analyzer`;
		return await axios
			.post(
				mainURL,
				{
					keyword,
					location: "US",
					language: "en",
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Search Backlink
export const BackLinkSearch = async (data: any, id: string, token: string) => {
	try {
		const mainURL = `${url}/api/v1/${id}/get-backlink`;
		return await axios
			.post(
				mainURL,
				data,

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Mobile Support Searcg
export const MobileSupportSearch = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/mobile-support`;
		return await axios
			.post(
				mainURL,
				{ keyword: data },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Page Speed Search
export const PageSpeedSearch = async (data: any, id: string, token: string) => {
	try {
		const mainURL = `${url}/api/v1/${id}/speed/result`;
		return await axios
			.post(
				mainURL,
				{ keyword: data },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Headers Search
export const HeadersSearch = async (data: any, id: string, token: string) => {
	try {
		const mainURL = `${url}/api/v1/${id}/headings-data`;
		return await axios
			.post(
				mainURL,
				{ keyword: data },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// PWA Search
export const PWASearch = async (data: any, id: string, token: string) => {
	try {
		const mainURL = `${url}/api/v1/${id}/pwa`;
		return await axios
			.post(
				mainURL,
				{ keyword: data },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// ai-keyword Search
export const AiKeywordResearch = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/ai-keyword`;
		return await axios
			.post(
				mainURL,
				{ keyword: data, language: "English" },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// ai-keyword Search
export const KeywordDifficultiesSuggession = async (
	data: any,
	id: string,
	token: string,
	language: string,
	location: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/difficulty/suggestion`;
		return await axios
			.post(
				mainURL,
				{
					keyword: data,
					language,
					location,
				},

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// ai-keyword Search
export const KeywordFast = async (data: any, id: string, token: string) => {
	try {
		const mainURL = `${url}/api/v1/${id}/keyword/fast`;
		return await axios
			.post(
				mainURL,
				{ keyword: data, countryCode: "us" },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// ai-keyword Search
export const ContentDensitySearch = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/destiny-keyword`;
		return await axios
			.post(
				mainURL,
				{ keyword: data },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// ai-keyword Search
export const ContentLinksSearch = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/onpage-link`;
		return await axios
			.post(
				mainURL,
				{ keyword: data },

				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// ai-keyword Search
export const AiRewrittingSearch = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/rewrite-content`;
		return await axios
			.post(
				mainURL,
				{
					audience: "Copywriters|Content creators",
					content_format: "blog",
					style: "Persuasive",
					tone: "Assertive",
					language: "English",
					data: data,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// ai-keyword Search
export const AiRedabilityScore = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/readability-score`;
		return await axios
			.post(
				mainURL,
				{
					keyword: data,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};



// ai-keyword Search
export const AiWordCount = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/word-count`;
		return await axios
			.post(
				mainURL,
				{
					keyword: data,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};


// ai-keyword Search
export const AiWebsiteAgeSearch = async (
	data: any,
	id: string,
	token: string,
) => {
	try {
		const mainURL = `${url}/api/v1/${id}/website-age`;
		return await axios
			.post(
				mainURL,
				{
					keyword: data,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				},
			)
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};


// google search Request
export const SeoCheckerGoogle = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/get-google-search`;
		return await axios
			.post(mainURL, {
				keywords: keywords,
			})
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//bing search request
export const SeoCheckerBing = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/get-bing-search`;
		return await axios
			.post(mainURL, { keywords: keywords })
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//yahoo search request
export const SeoCheckerYahoo = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/get-yahoo-search`;
		return await axios
			.post(mainURL, { keywords: keywords })
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//yahoo search request
export const SeoCheckerBaidu = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/get-baidu-search`;
		return await axios
			.post(mainURL, { keywords: keywords })
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//reading baidu data
export const ReadBaiduData = async (id: string, myID: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/${myID}/get-baidu-search`;
		return await axios.get(mainURL).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//searching naver data
export const SeoCheckerNaverData = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/get-naver-search`;
		return await axios
			.post(mainURL, { keywords: keywords })
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//reading naver data
export const ReadNaverData = async (id: string, myID: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/${myID}/get-naver-search`;
		return await axios.get(mainURL).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//searching seznam data
export const SeoCheckerSeznamData = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/get-seznam-search`;
		return await axios
			.post(mainURL, { keywords: keywords })
			.then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//reading sezam data
export const ReadSeznamData = async (id: string, myID: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/${myID}/get-seznam-search`;
		return await axios.get(mainURL).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Request for Business Data
export const businessDataCall = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/business-data-search`;
		return await axios.post(mainURL, keywords).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Reading the Requested Business Data
export const readingBusinessDataCall = async (id: string, myID: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/${myID}/business-data-search`;
		return await axios.get(mainURL).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Request for Business Data
export const onPageCall = async (keywords: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/on-page-search`;
		return await axios.post(mainURL, keywords).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

// Reading the Requested Business Data
export const readingOnPageCall = async (id: string, myID: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/read-on-page-search`;
		return await axios.post(mainURL, { dataID: myID }).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//content-summary
export const ContentSummary = async (data: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/content-summary`;
		return await axios.post(mainURL, data).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//content-search
export const ContentSearch = async (data: any, id: string) => {
	try {
		const mainURL = `${url}/api/usage/${id}/content-search`;
		return await axios.post(mainURL, data).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};

//content-summary
export const KeyWordSearch = async (data: any) => {
	try {
		const mainURL = `${url}/api/usage/keyword`;
		return await axios.post(mainURL, data).then((res) => res.data);
	} catch (error: any) {
		return error;
	}
};
