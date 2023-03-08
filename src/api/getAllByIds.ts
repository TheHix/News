import { getOneById } from "./getOneById";

export const getAllByIds = async <T>(ids: number[]): Promise<T[]> => {
	try {
		const promises = ids.map((id) => getOneById<T>(id));

		const items = await Promise.all(promises);

		return items;
	} catch (error) {
		console.error(`Error fetching latest stories: ${error}`);
		throw error;
	}
};
