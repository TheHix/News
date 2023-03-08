import { getOneById } from "@/api/getOneById";
import { useEffect, useState } from "react";

export const useOneItem = <T>(id: string | undefined) => {
	const [item, setItem] = useState<T | null>(null);
	const [loader, setLoader] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const fetchItem = async () => {
		if (!id) return;
		if (isNaN(+id)) {
			setError(true);
			return;
		}

		try {
			setLoader(true);

			const data = await getOneById<T>(+id);

			setItem(data);
		} catch (error) {
			console.error(`Error fetching data: ${error}`);
			setError(true);
		} finally {
			setLoader(false);
		}
	};

	useEffect(() => {
		fetchItem();
	}, []);

	return {
		item,
		loader,
		error,
		setError,
	};
};
