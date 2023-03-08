import BackButton from "@/components/backButton/BackButton";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { useOneItem } from "@/hooks/useOneItem";
import { IStory } from "@/models/Items";
import { useParams } from "react-router-dom";
import styles from "./Story.module.css";
import Content from "./components/content/Content";
import CommentsListContainer from "./components/commentsList/CommentsListContainer";

const Story = () => {
	const { id } = useParams();

	const { error, item: story, loader } = useOneItem<IStory>(id);

	if (error) {
		return <Error>ERROR</Error>;
	}

	if (!id) {
		null;
	}

	if (!story && loader) {
		return (
			<div className={styles.loaderWrapper}>
				<Loader />
			</div>
		);
	}

	return (
		<div>
			<BackButton sx={{ mt: "30px" }} variant="contained">
				back
			</BackButton>

			{story && (
				<Content
					url={story.url}
					title={story.title}
					score={story.score}
					by={story.by}
					time={story.time}
				/>
			)}
			{story && (
				<CommentsListContainer
					descendants={story.descendants}
					commentIds={story.kids}
				/>
			)}
		</div>
	);
};

export default Story;
