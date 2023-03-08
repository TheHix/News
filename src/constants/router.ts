enum AppRoutes {
	MAIN = "main",
	STORY = "story",
}

type RoutePath = Readonly<Record<AppRoutes, string>>;

export const routePath: RoutePath = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.STORY]: "/news/:id",
};
