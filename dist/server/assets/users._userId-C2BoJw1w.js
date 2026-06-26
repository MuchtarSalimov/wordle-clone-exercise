import { t as userQueryOptions } from "./users-CASbKHBd.js";
import { t as Route } from "./users._userId-DwnQ80uS.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { useSuspenseQuery } from "@tanstack/react-query";
//#region src/routes/users.$userId.tsx?tsr-split=component
function UserComponent() {
	const user = useSuspenseQuery(userQueryOptions(Route.useParams().userId)).data;
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ jsx("h4", {
			className: "text-xl font-bold underline",
			children: user.name
		}), /* @__PURE__ */ jsx("div", {
			className: "text-sm",
			children: user.email
		})]
	});
}
//#endregion
export { UserComponent as component };
