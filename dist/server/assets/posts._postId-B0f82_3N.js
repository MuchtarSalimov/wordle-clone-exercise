import { t as postQueryOptions } from "./posts-DKdZRQ5r.js";
import { ErrorComponent, createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
import { jsx } from "react/jsx-runtime";
//#region src/routes/posts.$postId.tsx
var $$splitComponentImporter = () => import("./posts._postId-_XrQBMZW.js");
var $$splitNotFoundComponentImporter = () => import("./posts._postId-CbA_r6FL.js");
var Route = createFileRoute("/posts/$postId")({
	loader: async ({ params: { postId }, context }) => {
		return { title: (await context.queryClient.ensureQueryData(postQueryOptions(postId))).title };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [{ title: loaderData.title }] : void 0 }),
	errorComponent: PostErrorComponent,
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
function PostErrorComponent({ error }) {
	return /* @__PURE__ */ jsx(ErrorComponent, { error });
}
//#endregion
export { Route as n, PostErrorComponent as t };
