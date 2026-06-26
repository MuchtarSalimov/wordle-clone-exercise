import { t as postQueryOptions } from "./posts-DKdZRQ5r.js";
import { t as Route } from "./posts_._postId.deep-DQF14nXS.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
//#region src/routes/posts_.$postId.deep.tsx?tsr-split=component
function PostDeepComponent() {
	const { postId } = Route.useParams();
	const postQuery = useSuspenseQuery(postQueryOptions(postId));
	return /* @__PURE__ */ jsxs("div", {
		className: "p-2 space-y-2",
		children: [
			/* @__PURE__ */ jsx(Link, {
				to: "/posts",
				className: "block py-1 text-blue-800 hover:text-blue-600",
				children: "← All Posts"
			}),
			/* @__PURE__ */ jsx("h4", {
				className: "text-xl font-bold underline",
				children: postQuery.data.title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-sm",
				children: postQuery.data.body
			})
		]
	});
}
//#endregion
export { PostDeepComponent as component };
