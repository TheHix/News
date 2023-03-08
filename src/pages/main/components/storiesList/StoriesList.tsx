import Error from "@/components/error/Error";
import Loader from "@/components/loader/Loader";
import { Button, List } from "@mui/material";
import StoriesItem from "../storiesItem/StoriesItem";
import styles from "./StoriesList.module.css";
import ReplayIcon from "@mui/icons-material/Replay";
import { useStories } from "@/hooks/useStories";

const StoriesList = () => {
	const { stories, loader, error, setUpdateList } = useStories();

	if (error) {
		return <Error>ERROR</Error>;
	}

	if (loader) {
		return (
			<div className={styles.loaderWrapper}>
				<Loader />
			</div>
		);
	}

	return (
		<>
			<Button
				startIcon={<ReplayIcon />}
				variant="contained"
				onClick={() => {
					setUpdateList((prev) => !prev);
				}}
			>
				Показать новые
			</Button>
			<List>
				{stories.map((story) => {
					if (story.dead || story.deleted) return null;
					return <StoriesItem key={story.id} {...story} />;
				})}
			</List>
		</>
	);
};

export default StoriesList;
