import { t as NotFound } from "./NotFound-Dl6IYNxn.js";
import { t as Route$14 } from "./wordle-DgeANlwZ.js";
import { t as deferredQueryOptions } from "./deferred-Biy6mZr8.js";
import { n as usersQueryOptions } from "./users-CASbKHBd.js";
import { n as postsQueryOptions } from "./posts-DKdZRQ5r.js";
import { t as Route$15 } from "./users._userId-DwnQ80uS.js";
import { n as Route$16 } from "./posts._postId-B0f82_3N.js";
import { t as Route$17 } from "./posts_._postId.deep-DQF14nXS.js";
import "react";
import { ErrorComponent, HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect, useLocation, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient } from "@tanstack/react-query";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { MantineProvider, createTheme } from "@mantine/core";
import axios from "redaxios";
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
//#region src/styles/app.css?url
var app_default = "/assets/app-DYBL35Mc.css";
//#endregion
//#region src/utils/seo.ts
var seo = ({ title, description, keywords, image }) => {
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			name: "keywords",
			content: keywords
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:creator",
			content: "@tannerlinsley"
		},
		{
			name: "twitter:site",
			content: "@tannerlinsley"
		},
		{
			name: "og:type",
			content: "website"
		},
		{
			name: "og:title",
			content: title
		},
		{
			name: "og:description",
			content: description
		},
		...image ? [
			{
				name: "twitter:image",
				content: image
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "og:image",
				content: image
			}
		] : []
	];
};
//#endregion
//#region src/routes/__root.tsx
var theme = createTheme({});
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			...seo({
				title: "TanStack Start | Type-Safe, Client-First, Full-Stack React Framework",
				description: `TanStack Start is a type-safe, client-first, full-stack React framework. `
			})
		],
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
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/posts",
					activeProps: { className: "font-bold" },
					children: "Posts"
				}),
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/users",
					activeProps: { className: "font-bold" },
					children: "Users"
				}),
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/route-a",
					activeProps: { className: "font-bold" },
					children: "Pathless Layout"
				}),
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/deferred",
					activeProps: { className: "font-bold" },
					children: "Deferred"
				}),
				" ",
				/* @__PURE__ */ jsx(Link, {
					to: "/this-route-does-not-exist",
					activeProps: { className: "font-bold" },
					children: "This Route Does Not Exist"
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
//#region src/routes/redirect.tsx
var Route$12 = createFileRoute("/redirect")({ beforeLoad: async () => {
	throw redirect({ to: "/posts" });
} });
//#endregion
//#region src/routes/deferred.tsx
var $$splitComponentImporter$9 = () => import("./deferred-BGsOmOsg.js");
var Route$11 = createFileRoute("/deferred")({
	loader: ({ context }) => {
		context.queryClient.prefetchQuery(deferredQueryOptions());
	},
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
//#endregion
//#region src/routes/_pathlessLayout.tsx
var $$splitComponentImporter$8 = () => import("./_pathlessLayout-BvM-qxIM.js");
var Route$10 = createFileRoute("/_pathlessLayout")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
//#endregion
//#region src/routes/users.route.tsx
var $$splitComponentImporter$7 = () => import("./users.route-ZSfkAJvD.js");
var Route$9 = createFileRoute("/users")({
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(usersQueryOptions());
	},
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
//#endregion
//#region src/routes/posts.route.tsx
var $$splitComponentImporter$6 = () => import("./posts.route-B3oiPuBK.js");
var Route$8 = createFileRoute("/posts")({
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(postsQueryOptions());
	},
	head: () => ({ meta: [{ title: "Posts" }] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$5 = () => import("./routes-B98OUAZ5.js");
var Route$7 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
//#endregion
//#region src/routes/users.index.tsx
var $$splitComponentImporter$4 = () => import("./users.index-BS_YLF-L.js");
var Route$6 = createFileRoute("/users/")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
//#endregion
//#region src/routes/posts.index.tsx
var $$splitComponentImporter$3 = () => import("./posts.index-HwbbsNBt.js");
var Route$5 = createFileRoute("/posts/")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
//#endregion
//#region src/routes/api/users.ts
var Route$4 = createFileRoute("/api/users")({ server: { handlers: { GET: async ({ request }) => {
	console.info("Fetching users... @", request.url);
	const list = (await axios.get("https://jsonplaceholder.typicode.com/users")).data.slice(0, 10);
	return Response.json(list.map((u) => ({
		id: u.id,
		name: u.name,
		email: u.email
	})));
} } } });
//#endregion
//#region src/routes/_pathlessLayout/_nested-layout.tsx
var $$splitComponentImporter$2 = () => import("./_nested-layout-ol4C432z.js");
var Route$3 = createFileRoute("/_pathlessLayout/_nested-layout")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
//#endregion
//#region src/routes/api/users.$id.ts
var Route$2 = createFileRoute("/api/users/$id")({ server: { handlers: { GET: async ({ request, params }) => {
	console.info(`Fetching users by id=${params.id}... @`, request.url);
	try {
		const res = await axios.get("https://jsonplaceholder.typicode.com/users/" + params.id);
		return Response.json({
			id: res.data.id,
			name: res.data.name,
			email: res.data.email
		});
	} catch (e) {
		console.error(e);
		return Response.json({ error: "User not found" }, { status: 404 });
	}
} } } });
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
var WordleRoute = Route$14.update({
	id: "/wordle",
	path: "/wordle",
	getParentRoute: () => Route$13
});
var RedirectRoute = Route$12.update({
	id: "/redirect",
	path: "/redirect",
	getParentRoute: () => Route$13
});
var DeferredRoute = Route$11.update({
	id: "/deferred",
	path: "/deferred",
	getParentRoute: () => Route$13
});
var PathlessLayoutRoute = Route$10.update({
	id: "/_pathlessLayout",
	getParentRoute: () => Route$13
});
var UsersRouteRoute = Route$9.update({
	id: "/users",
	path: "/users",
	getParentRoute: () => Route$13
});
var PostsRouteRoute = Route$8.update({
	id: "/posts",
	path: "/posts",
	getParentRoute: () => Route$13
});
var IndexRoute = Route$7.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var UsersIndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => UsersRouteRoute
});
var PostsIndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => PostsRouteRoute
});
var UsersUserIdRoute = Route$15.update({
	id: "/$userId",
	path: "/$userId",
	getParentRoute: () => UsersRouteRoute
});
var PostsPostIdRoute = Route$16.update({
	id: "/$postId",
	path: "/$postId",
	getParentRoute: () => PostsRouteRoute
});
var ApiUsersRoute = Route$4.update({
	id: "/api/users",
	path: "/api/users",
	getParentRoute: () => Route$13
});
var PathlessLayoutNestedLayoutRoute = Route$3.update({
	id: "/_nested-layout",
	getParentRoute: () => PathlessLayoutRoute
});
var PostsPostIdDeepRoute = Route$17.update({
	id: "/posts_/$postId/deep",
	path: "/posts/$postId/deep",
	getParentRoute: () => Route$13
});
var ApiUsersIdRoute = Route$2.update({
	id: "/$id",
	path: "/$id",
	getParentRoute: () => ApiUsersRoute
});
var PathlessLayoutNestedLayoutRouteBRoute = Route$1.update({
	id: "/route-b",
	path: "/route-b",
	getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
var PathlessLayoutNestedLayoutRouteARoute = Route.update({
	id: "/route-a",
	path: "/route-a",
	getParentRoute: () => PathlessLayoutNestedLayoutRoute
});
var PostsRouteRouteChildren = {
	PostsPostIdRoute,
	PostsIndexRoute
};
var PostsRouteRouteWithChildren = PostsRouteRoute._addFileChildren(PostsRouteRouteChildren);
var UsersRouteRouteChildren = {
	UsersUserIdRoute,
	UsersIndexRoute
};
var UsersRouteRouteWithChildren = UsersRouteRoute._addFileChildren(UsersRouteRouteChildren);
var PathlessLayoutNestedLayoutRouteChildren = {
	PathlessLayoutNestedLayoutRouteARoute,
	PathlessLayoutNestedLayoutRouteBRoute
};
var PathlessLayoutRouteChildren = { PathlessLayoutNestedLayoutRoute: PathlessLayoutNestedLayoutRoute._addFileChildren(PathlessLayoutNestedLayoutRouteChildren) };
var PathlessLayoutRouteWithChildren = PathlessLayoutRoute._addFileChildren(PathlessLayoutRouteChildren);
var ApiUsersRouteChildren = { ApiUsersIdRoute };
var rootRouteChildren = {
	IndexRoute,
	PostsRouteRoute: PostsRouteRouteWithChildren,
	UsersRouteRoute: UsersRouteRouteWithChildren,
	PathlessLayoutRoute: PathlessLayoutRouteWithChildren,
	DeferredRoute,
	RedirectRoute,
	WordleRoute,
	ApiUsersRoute: ApiUsersRoute._addFileChildren(ApiUsersRouteChildren),
	PostsPostIdDeepRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
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
