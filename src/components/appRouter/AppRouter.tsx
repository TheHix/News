import { routePath } from "@/constants/router";
import Main from "@/pages/main/Main";
import Story from "@/pages/story/Story";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loader from "../loader/Loader";

const routeConfig = createBrowserRouter([
	{
		path: routePath.main,
		element: <Main />,
		loader: Loader,
	},
	{
		path: routePath.story,
		element: <Story />,
		loader: Loader,
	},
]);

const AppRouter = () => {
	return <RouterProvider router={routeConfig} />;
};

export default AppRouter;
