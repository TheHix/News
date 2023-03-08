import { firebaseDatabaseURL } from "@/constants/api";

export const getOneById = async <T>(id: number): Promise<T> => {
	try {
		const response = await fetch(`${firebaseDatabaseURL}/item/${id}.json`);
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}
		const item = await response.json();

		return item;
	} catch (error) {
		console.error(`Error fetching story ${id}: ${error}`);
		throw error;
	}
};
