import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import HomeRoutes from "./Components/AllRoutes/HomeRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollToTop from "./utils/ScrollToTop";
import MainDashBoard from "./Components/DashBoard/MainDashBoard";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PrivateRoute from "./utils/PrivateRoute";
import axios from "axios";

const myClient = new QueryClient();

function App() {
	useEffect(() => {
		axios.get("https://dom-ranker.onrender.com/");
	}, []);
	return (
		<div>
			<QueryClientProvider client={myClient}>
				<ScrollToTop>
					<HomeRoutes />

					<PrivateRoute element={<MainDashBoard />} />
					<ReactQueryDevtools />
				</ScrollToTop>
			</QueryClientProvider>
		</div>
	);
}

export default App;
