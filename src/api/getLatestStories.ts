import { getAllByIds } from "./getAllByIds";
import { IStory } from "@/models/Items";

import { getNewStoryIds } from "./getNewStoryIds";

export const getLatestStories = async (
	storiesNumber: number
): Promise<IStory[]> => {
	try {
		const storyIds = await getNewStoryIds();

		const lastStoryIds = storyIds.slice(0, storiesNumber);

		const stories = getAllByIds<IStory>(lastStoryIds);
		return stories;
	} catch (error) {
		console.error(`Error fetching latest stories: ${error}`);
		throw error;
	}
};
