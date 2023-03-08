import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface ErrorProps {
	children: ReactNode;
}

const Error: FC<ErrorProps> = ({ children }) => {
	return (
		<Typography
			variant="h4"
			align="center"
			sx={{ mt: "25px", mb: "15px", color: "red" }}
		>
			{children}
		</Typography>
	);
};

export default Error;
