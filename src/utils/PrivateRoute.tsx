import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import HomeRoutes from "../Components/AllRoutes/HomeRoutes";
import Homescreen from "../Components/HomeScreen";
import { useAppSelector } from "./stateManagement/store";

interface ProtectProps {
	element: JSX.Element;
}

const PrivateRoute = ({ element }: any) => {
	const user = useAppSelector((state: any) => state.currentUser);

	if (user) {
		return element;
	} else {
		<Navigate to='/' replace />;
	}
};

export default PrivateRoute;
