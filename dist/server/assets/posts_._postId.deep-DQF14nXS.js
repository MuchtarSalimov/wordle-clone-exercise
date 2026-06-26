import { t as postQueryOptions } from "./posts-DKdZRQ5r.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/routes/posts_.$postId.deep.tsx
var $$splitComponentImporter = () => import("./posts_._postId.deep-CsrshOzu.js");
var $$splitErrorComponentImporter = () => import("./posts_._postId.deep-DlZIopv7.js");
var Route = createFileRoute("/posts_/$postId/deep")({
	loader: async ({ params: { postId }, context }) => {
		return { title: (await context.queryClient.ensureQueryData(postQueryOptions(postId))).title };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [{ title: loaderData.title }] : void 0 }),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
