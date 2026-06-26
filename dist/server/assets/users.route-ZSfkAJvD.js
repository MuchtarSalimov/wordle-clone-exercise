import { n as usersQueryOptions } from "./users-CASbKHBd.js";
import { Link, Outlet } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
//#region src/routes/users.route.tsx?tsr-split=component
function UsersComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "p-2 flex gap-2",
		children: [
			/* @__PURE__ */ jsx("ul", {
				className: "list-disc pl-4",
				children: [...useSuspenseQuery(usersQueryOptions()).data, {
					id: "i-do-not-exist",
					name: "Non-existent User",
					email: ""
				}].map((user) => {
					return /* @__PURE__ */ jsx("li", {
						className: "whitespace-nowrap",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/users/$userId",
							params: { userId: String(user.id) },
							className: "block py-1 text-blue-800 hover:text-blue-600",
							activeProps: { className: "text-black font-bold" },
							children: /* @__PURE__ */ jsx("div", { children: user.name })
						})
					}, user.id);
				})
			}),
			/* @__PURE__ */ jsx("hr", {}),
			/* @__PURE__ */ jsx(Outlet, {})
		]
	});
}
//#endregion
export { UsersComponent as component };
