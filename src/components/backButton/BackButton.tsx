import { FC, ReactNode } from "react";
import { Button, ButtonProps } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface BackButtonProps extends ButtonProps {}

const BackButton: FC<BackButtonProps> = ({ children, ...otherProps }) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<Button onClick={goBack} {...otherProps}>
			{children}
		</Button>
	);
};

export default BackButton;
