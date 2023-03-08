import { IStory } from "@/models/Items";
import { formatDate } from "@/utils/formatDate";
import {
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from "@mui/material";
import React, { FC, memo } from "react";
import { ThumbUp } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface StoriesItemProps
	extends Omit<IStory, "descendants" | "url" | "type"> {}

const StoriesItem: FC<StoriesItemProps> = ({ time, by, score, title, id }) => {
	const formattedDate = formatDate(time);

	return (
		<ListItem>
			<Link to={`news/${id}`}>
				<ListItemText primary={title} secondary={`${by} | ${formattedDate}`} />
			</Link>

			<ListItemSecondaryAction>
				<div style={{ display: "flex", alignItems: "center" }}>
					{score}
					<IconButton>
						<ThumbUp />
					</IconButton>
				</div>
			</ListItemSecondaryAction>
		</ListItem>
	);
};

export default memo(StoriesItem);
