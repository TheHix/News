export const formatDate = (unixTimestamp: number): string => {
	const date = new Date(unixTimestamp * 1000);
	const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
	return formattedDate;
};
