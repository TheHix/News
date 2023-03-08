import { IStory } from "@/models/Items";
import { formatDate } from "@/utils/formatDate";
import { Comment, ThumbUp } from "@mui/icons-material";
import {
	Box,
	Divider,
	IconButton,
	Link as LinkBlock,
	Typography,
} from "@mui/material";
import { FC } from "react";
import styles from "./Content.module.css";

interface ContentProps extends Omit<IStory, "descendants" | "id" | "type"> {}

const Content: FC<ContentProps> = ({ url, title, score, by, time }) => {
	const formattedDate = formatDate(time);

	return (
		<div className={styles.storyContent}>
			<Box className={styles.header}>
				<Typography variant="h4">
					{title} <LinkBlock href={url}>link</LinkBlock>
				</Typography>

				<div className={styles.rating}>
					<IconButton edge="start">
						<ThumbUp className={styles.icon} />
					</IconButton>
					{score}
				</div>
			</Box>

			<Typography variant="subtitle1" className={styles.author}>
				By {by} on {formattedDate}
			</Typography>
			<Divider />
		</div>
	);
};

export default Content;
