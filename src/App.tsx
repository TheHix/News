import React from "react";

import AppRouter from "./components/appRouter/AppRouter";

import "./styles/normalize.css";
import "./styles/globalStyles.css";

const App = () => {
	return (
		<div className="app">
			<AppRouter />
		</div>
	);
};
export default App;
