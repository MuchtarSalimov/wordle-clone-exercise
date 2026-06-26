import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/NotFound.tsx
function NotFound({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "space-y-2 p-2",
		children: [/* @__PURE__ */ jsx("div", {
			className: "text-gray-600 dark:text-gray-400",
			children: children || /* @__PURE__ */ jsx("p", { children: "The page you are looking for does not exist." })
		}), /* @__PURE__ */ jsxs("p", {
			className: "flex items-center gap-2 flex-wrap",
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => window.history.back(),
				className: "bg-emerald-500 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
				children: "Go back"
			}), /* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "bg-cyan-600 text-white px-2 py-1 rounded-sm uppercase font-black text-sm",
				children: "Start Over"
			})]
		})]
	});
}
//#endregion
export { NotFound as t };
