import { getAllByIds } from "./../api/getAllByIds";
import { DependencyList, useEffect, useState } from "react";

export const useAllItems = <T>(
	ids: number[],
	effectDeps: DependencyList = []
) => {
	const [items, setItems] = useState<T[]>([]);
	const [loader, setLoader] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const fetchItems = async () => {
		try {
			setLoader(true);

			const data = await getAllByIds<T>(ids);

			setItems(data);
		} catch (error) {
			console.error(`Error fetching data: ${error}`);
			setError(true);
		} finally {
			setLoader(false);
		}
	};

	useEffect(() => {
		fetchItems();
	}, effectDeps);

	return {
		items,
		loader,
		error,
		setError,
	};
};
