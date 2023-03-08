import { Typography } from "@mui/material";
import StoriesList from "./components/storiesList/StoriesList";

const Main = () => {
	return (
		<div>
			<Typography variant="h4" align="center" sx={{ mt: "25px", mb: "15px" }}>
				Latest News
			</Typography>

			<StoriesList />
		</div>
	);
};

export default Main;
