import { t as userQueryOptions } from "./users-CASbKHBd.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/users.$userId.tsx
var $$splitNotFoundComponentImporter = () => import("./users._userId-CqJgeTC8.js");
var $$splitComponentImporter = () => import("./users._userId-C2BoJw1w.js");
var $$splitErrorComponentImporter = () => import("./users._userId-foRRr9at.js");
var Route = createFileRoute("/users/$userId")({
	loader: async ({ context, params: { userId } }) => {
		await context.queryClient.ensureQueryData(userQueryOptions(userId));
	},
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
//#endregion
export { Route as t };
