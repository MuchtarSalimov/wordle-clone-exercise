import { n as postsQueryOptions } from "./posts-DKdZRQ5r.js";
import { Link, Outlet } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
//#region src/routes/posts.route.tsx?tsr-split=component
function PostsComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "p-2 flex gap-2",
		children: [
			/* @__PURE__ */ jsx("ul", {
				className: "list-disc pl-4",
				children: [...useSuspenseQuery(postsQueryOptions()).data, {
					id: "i-do-not-exist",
					title: "Non-existent Post"
				}].map((post) => {
					return /* @__PURE__ */ jsx("li", {
						className: "whitespace-nowrap",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/posts/$postId",
							params: { postId: post.id },
							className: "block py-1 text-blue-800 hover:text-blue-600",
							activeProps: { className: "text-black font-bold" },
							children: /* @__PURE__ */ jsx("div", { children: post.title.substring(0, 20) })
						})
					}, post.id);
				})
			}),
			/* @__PURE__ */ jsx("hr", {}),
			/* @__PURE__ */ jsx(Outlet, {})
		]
	});
}
//#endregion
export { PostsComponent as component };
