import { Box, Button } from "@mui/material";
import React, { FC, useState } from "react";
import CommentsItem from "../commentsItem/CommentsItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CommentsList from "../commentsList/CommentsList";

interface NestedCommentsListProps {
	by: string;
	text: string;
	kids?: number[];
}

const NestedCommentsList: FC<NestedCommentsListProps> = ({
	by,
	text,
	kids,
}) => {
	const [isNestedCommentsVisible, setIsNestedCommentsVisible] =
		useState<boolean>(false);

	const toggleAnswer = () => {
		setIsNestedCommentsVisible((prev) => !prev);
	};

	const hasKids = !!kids?.length;

	return (
		<div>
			<CommentsItem by={by} text={text} />

			{hasKids && (
				<Button
					endIcon={!isNestedCommentsVisible ? <ArrowForwardIcon /> : undefined}
					sx={{ ml: "30px" }}
					variant="text"
					size="small"
					onClick={toggleAnswer}
				>
					{isNestedCommentsVisible ? "Hide answers" : "Show answers"}
				</Button>
			)}

			{isNestedCommentsVisible && hasKids && (
				<Box
					sx={{
						ml: "30px",
						padding: "5px",
						borderLeft: "1px solid grey",
					}}
				>
					{kids && <CommentsList commentIds={kids} />}
				</Box>
			)}
		</div>
	);
};

export default NestedCommentsList;
