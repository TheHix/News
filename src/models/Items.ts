interface Item {
	id: number;
	type: "job" | "story" | "comment" | "poll" | "pollopt";
	by: string;
	time: number;
	deleted?: boolean;
	dead?: boolean;
}

export interface IStory extends Item {
	title: string;
	url: string;
	score: number;
	descendants: number;
	kids?: number[];
	text?: string;
}

export interface IComment extends Item {
	parent: number;
	kids?: number[];
	text: string;
}
