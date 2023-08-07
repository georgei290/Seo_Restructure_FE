import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { iSign } from "../interfaces";

const initialState = {
	currentUser: {} as any | null,
	seoData: {} as any,
	speed: {} as any,
	header: {} as any,
	backlink: {} as any,
	pwa: {} as any,
	research: {} as any,
	difficulty: {} as any,
	fast: {} as any,
	density: {} as any,
	links: {} as any,
	rewrite: {} as any,
	readability: {} as any,
	word: {} as any,
	age: {} as any,
	items: {} as any,
};

const authState = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginUser: (state, { payload }: PayloadAction<iSign>) => {
			state.currentUser = payload;
		},

		SeoSearchData: (state, { payload }: PayloadAction<any>) => {
			state.seoData = payload;
		},

		SpeedTestData: (state, { payload }: PayloadAction<any>) => {
			state.speed = payload;
		},

		HeaderData: (state, { payload }: PayloadAction<any>) => {
			state.header = payload;
		},

		PwaData: (state, { payload }: PayloadAction<any>) => {
			state.pwa = payload;
		},

		ResearchData: (state, { payload }: PayloadAction<any>) => {
			state.research = payload;
		},

		DifficultyData: (state, { payload }: PayloadAction<any>) => {
			state.difficulty = payload;
		},

		FastData: (state, { payload }: PayloadAction<any>) => {
			state.fast = payload;
		},

		densityData: (state, { payload }: PayloadAction<any>) => {
			state.density = payload;
		},

		linkData: (state, { payload }: PayloadAction<any>) => {
			state.links = payload;
		},

		rewriteData: (state, { payload }: PayloadAction<any>) => {
			state.rewrite = payload;
		},

		readabilityData: (state, { payload }: PayloadAction<any>) => {
			state.readability = payload;
		},

		wordData: (state, { payload }: PayloadAction<any>) => {
			state.word = payload;
		},

		ageData: (state, { payload }: PayloadAction<any>) => {
			state.age = payload;
		},

		storeItems: (state, { payload }) => {
			state.items = payload;
		},

		StoreBacklinkData: (state, { payload }: PayloadAction<any>) => {
			state.backlink = payload;
		},

		clearData: (state) => {
			state.seoData = null;
			// state.baiduID = "";
			// state.naverID = "";
			// state.seznamID = "";
		},

		logOut: (state) => {
			state.currentUser = {};
		},
	},
});

export const {
	loginUser,
	logOut,
	SeoSearchData,
	HeaderData,
	PwaData,
	FastData,
	ageData,
	wordData,
	densityData,
	readabilityData,
	rewriteData,
	linkData,
	DifficultyData,
	ResearchData,

	clearData,

	storeItems,
	StoreBacklinkData,

	SpeedTestData,
} = authState.actions;

export default authState.reducer;
