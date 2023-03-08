import { getLatestStories } from "@/api/getLatestStories";
import { IStory } from "@/models/Items";
import { useEffect, useState } from "react";

export const useStories = () => {
	const [updateList, setUpdateList] = useState(true);

	const [stories, setStories] = useState<IStory[]>([]);
	const [loader, setLoader] = useState(false);
	const [error, setError] = useState(false);

	const fetchStories = async () => {
		try {
			setLoader(true);

			const data = await getLatestStories(100);
			setStories(data);
		} catch (error) {
			console.error(`Error fetching data: ${error}`);
			setError(true);
		} finally {
			setLoader(false);
		}
	};

	useEffect(() => {
		fetchStories();
	}, [updateList]);

	useEffect(() => {
		const interval = setInterval(() => {
			setUpdateList((prev) => !prev);
		}, 60 * 1000);

		return () => clearInterval(interval);
	}, []);

	return {
		stories,
		loader,
		error,
		updateList,
		setUpdateList,
	};
};
