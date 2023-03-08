import { Comment } from "@mui/icons-material";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import CommentsList from "./CommentsList";
import ReplayIcon from "@mui/icons-material/Replay";

interface CommentsListContainerProps {
	commentIds?: number[];
	descendants: number;
}

const CommentsListContainer: FC<CommentsListContainerProps> = ({
	commentIds,
	descendants,
}) => {
	const [updateList, setUpdateList] = useState<boolean>(false);

	return (
		<>
			<Box mt={2}>
				<Typography variant="subtitle1">
					<IconButton edge="start">
						<Comment />
					</IconButton>
					{descendants} comments
					<Button
						startIcon={<ReplayIcon />}
						sx={{ ml: "15px" }}
						variant="contained"
						onClick={() => {
							setUpdateList((prev) => !prev);
						}}
					>
						update
					</Button>
				</Typography>
			</Box>

			{commentIds?.length && (
				<CommentsList updateList={[updateList]} commentIds={commentIds} />
			)}
		</>
	);
};

export default CommentsListContainer;
