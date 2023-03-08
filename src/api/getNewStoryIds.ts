import { firebaseDatabaseURL } from "@/constants/api";
export const getNewStoryIds = async (): Promise<number[]> => {
	try {
		const response = await fetch(`${firebaseDatabaseURL}/newstories.json`);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const storyIds = await response.json();
		return storyIds;
	} catch (error) {
		console.error(`Error fetching story IDs: ${error}`);
		throw error;
	}
};
