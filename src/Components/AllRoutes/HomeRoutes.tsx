import { useEffect } from "react";
import { useNavigate, useRoutes } from "react-router";
import { useAppSelector } from "../../utils/stateManagement/store";
import {
	Header,
	Homescreen,
	Signup,
	SignIn,
	ForgetPass,
	ResetPass,
	AfterRegister,
	CongrateComponent,
} from "./Bundled";

const HomeRoutes = () => {
	const navigate = useNavigate();
	const user: any = useAppSelector((state: any) => state.currentUser);

	useEffect(() => {
		if (user?.email) {
			navigate("/seochecker", { replace: true });
		}
	}, [user]);

	let element = useRoutes([
		{
			path: "/",
			element: (
				<>
					<Header />
					<Homescreen />
				</>
			),
		},
		{
			path: "/signup",
			element: <Signup />,
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/forget",
			element: <ForgetPass />,
		},
		{
			path: "/reset",
			element: <ResetPass />,
		},
		{
			path: "/after-register",
			element: <AfterRegister />,
		},
		{
			path: "/:id/congrate-screen",
			element: <CongrateComponent />,
		},
	]);
	return element;
};

export default HomeRoutes;
