import { t as Route$6 } from "./wordle-CCWwRXAn.js";
import { t as deferredQueryOptions } from "./deferred-Biy6mZr8.js";
import "react";
import { ErrorComponent, HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useLocation, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient } from "@tanstack/react-query";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MantineProvider, createTheme } from "@mantine/core";
//#region src/components/DefaultCatchBoundary.tsx
function DefaultCatchBoundary({ error }) {
	const router = useRouter();
	const isRoot = useLocation({ select: (location) => location.pathname === "/" });
	console.error(error);
	return /* @__PURE__ */ jsxs("div", {
		className: "min-w-0 flex-1 p-4 flex flex-col items-center justify-center gap-6",
		children: [/* @__PURE__ */ jsx(ErrorComponent, { error }), /* @__PURE__ */ jsxs("div", {
			className: "flex gap-2 items-center flex-wrap",
			children: [/* @__PURE__ */ jsx("button", {
				onClick: () => {
					router.invalidate();
				},
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				children: "Try Again"
			}), isRoot ? /* @__PURE__ */ jsx(Link, {
				to: "/",
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				children: "Home"
			}) : /* @__PURE__ */ jsx(Link, {
				to: "/",
				className: `px-2 py-1 bg-gray-600 dark:bg-gray-700 rounded-sm text-white uppercase font-extrabold`,
				onClick: (e) => {
					e.preventDefault();
					window.history.back();
				},
				children: "Go Back"
			})]
		})]
	});
}
//#endregion
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
//#region src/styles/app.css?url
var app_default = "/assets/app-Dk6yGw-3.css";
//#endregion
//#region src/routes/__root.tsx
var theme = createTheme({});
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [{ charSet: "utf-8" }, {
			name: "viewport",
			content: "width=device-width, initial-scale=1"
		}],
		links: [
			{
				rel: "stylesheet",
				href: app_default
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png"
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png"
			},
			{
				rel: "manifest",
				href: "/site.webmanifest",
				color: "#fffff"
			},
			{
				rel: "icon",
				href: "/favicon.ico"
			}
		]
	}),
	errorComponent: (props) => {
		return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(DefaultCatchBoundary, { ...props }) });
	},
	notFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {}),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(MantineProvider, {
		defaultColorScheme: "dark",
		theme,
		children: /* @__PURE__ */ jsx(Outlet, {})
	}) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", { children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "p-2 flex gap-2 text-lg",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					activeProps: { className: "font-bold" },
					activeOptions: { exact: true },
					children: "Home"
				}),
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/wordle",
					activeProps: { className: "font-bold" },
					children: "Wordle Clone"
				})
			]
		}),
		/* @__PURE__ */ jsx("hr", {}),
		children,
		/* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
		/* @__PURE__ */ jsx(ReactQueryDevtools, { buttonPosition: "bottom-left" }),
		/* @__PURE__ */ jsx(Scripts, {})
	] })] });
}
//#endregion
//#region src/routes/deferred.tsx
var $$splitComponentImporter$4 = () => import("./deferred-BGsOmOsg.js");
var Route$4 = createFileRoute("/deferred")({
	loader: ({ context }) => {
		context.queryClient.prefetchQuery(deferredQueryOptions());
	},
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$3 = () => import("./routes-B98OUAZ5.js");
var Route$3 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/_pathlessLayout/_nested-layout.tsx
var $$splitComponentImporter$2 = () => import("./_nested-layout-ol4C432z.js");
var Route$2 = createFileRoute("/_pathlessLayout/_nested-layout")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/_pathlessLayout/_nested-layout/route-b.tsx
var $$splitComponentImporter$1 = () => import("./route-b-DlYh_Qlw.js");
var Route$1 = createFileRoute("/_pathlessLayout/_nested-layout/route-b")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/_pathlessLayout/_nested-layout/route-a.tsx
var $$splitComponentImporter = () => import("./route-a-CDBFvAvf.js");
var Route = createFileRoute("/_pathlessLayout/_nested-layout/route-a")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var WordleRoute = Route$6.update({
	id: "/wordle",
	path: "/wordle",
	getParentRoute: () => Route$5
});
var DeferredRoute = Route$4.update({
	id: "/deferred",
	path: "/deferred",
	getParentRoute: () => Route$5
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var PathlessLayoutNestedLayoutRoute = Route$2.update({
	id: "/_pathlessLayout/_nested-layout",
	getParentRoute: () => Route$5
});
var PathlessLayoutNestedLayoutRouteBRoute = Route$1.update({
	id: "/route-b",
	path: "/route-b",
	getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
var PathlessLayoutNestedLayoutRouteChildren = {
	PathlessLayoutNestedLayoutRouteARoute: Route.update({
		id: "/route-a",
		path: "/route-a",
		getParentRoute: () => PathlessLayoutNestedLayoutRoute
	}),
	PathlessLayoutNestedLayoutRouteBRoute
};
var rootRouteChildren = {
	IndexRoute,
	DeferredRoute,
	WordleRoute,
	PathlessLayoutNestedLayoutRoute: PathlessLayoutNestedLayoutRoute._addFileChildren(PathlessLayoutNestedLayoutRouteChildren)
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	const queryClient = new QueryClient();
	const router = createRouter({
		routeTree,
		context: { queryClient },
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => /* @__PURE__ */ jsx(NotFound, {})
	});
	setupRouterSsrQueryIntegration({
		router,
		queryClient
	});
	return router;
}
//#endregion
export { getRouter };
