import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import React, { FC } from "react";

interface CommentsItemProps {
	by: string;
	text: string;
}

const CommentsItem: FC<CommentsItemProps> = ({ by, text }) => {
	return (
		<ListItem alignItems="flex-start">
			<ListItemAvatar>
				<Avatar>{by}</Avatar>
			</ListItemAvatar>

			<ListItemText
				primary={by}
				secondary={<span dangerouslySetInnerHTML={{ __html: text }}></span>}
			/>
		</ListItem>
	);
};

export default CommentsItem;
