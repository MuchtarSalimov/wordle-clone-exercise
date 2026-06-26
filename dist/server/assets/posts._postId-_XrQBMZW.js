import { t as postQueryOptions } from "./posts-DKdZRQ5r.js";
import { n as Route } from "./posts._postId-B0f82_3N.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
//#region src/routes/posts.$postId.tsx?tsr-split=component
function PostComponent() {
	const { postId } = Route.useParams();
	const postQuery = useSuspenseQuery(postQueryOptions(postId));
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [
			/* @__PURE__ */ jsx("h4", {
				className: "text-xl font-bold underline",
				children: postQuery.data.title
			}),
			/* @__PURE__ */ jsx("div", {
				className: "text-sm",
				children: postQuery.data.body
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/posts/$postId/deep",
				params: { postId: postQuery.data.id },
				activeProps: { className: "text-black font-bold" },
				className: "inline-block py-1 text-blue-800 hover:text-blue-600",
				children: "Deep View"
			})
		]
	});
}
//#endregion
export { PostComponent as component };
