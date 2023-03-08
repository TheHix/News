import Error from "@/components/error/Error";
import { useAllItems } from "@/hooks/useAllItems";
import { IComment } from "@/models/Items";
import { Box, Button, List, Typography } from "@mui/material";
import React, { DependencyList, FC, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CommentsItem from "../commentsItem/CommentsItem";
import NestedCommentsList from "../nestedCommentsList/NestedCommentsList";

interface CommentsListProps {
	commentIds: number[];
	updateList?: DependencyList;
}

const CommentsList: FC<CommentsListProps> = ({ commentIds, updateList }) => {
	const {
		error,
		items: comments,
		loader,
	} = useAllItems<IComment>(commentIds, updateList);

	if (error) {
		return <Error>ERROR</Error>;
	}

	if (loader) {
		return <Typography>...Loading</Typography>;
	}

	return (
		<List>
			{comments.map((comment) => {
				if (comment.dead || comment.deleted) return null;

				return (
					<NestedCommentsList
						by={comment.by}
						text={comment.text}
						kids={comment.kids}
						key={comment.id}
					/>
				);
			})}
		</List>
	);
};

export default CommentsList;
