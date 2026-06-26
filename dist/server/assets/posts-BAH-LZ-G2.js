import { i as createServerFn } from "./esm-iTNSyFOE.js";
import { t as createServerRpc } from "./createServerRpc-Cvjxp0f7.js";
import { notFound } from "@tanstack/react-router";
import axios from "redaxios";
//#region src/utils/posts.tsx?tss-serverfn-split
var fetchPosts_createServerFn_handler = createServerRpc({
	id: "cbb8ca69048418e62742f2c511faa56326b80ace384144a35bb3e0bf5e8124be",
	name: "fetchPosts",
	filename: "src/utils/posts.tsx"
}, (opts) => fetchPosts.__executeServer(opts));
var fetchPosts = createServerFn({ method: "GET" }).handler(fetchPosts_createServerFn_handler, async () => {
	console.info("Fetching posts...");
	return axios.get("https://jsonplaceholder.typicode.com/posts").then((r) => r.data.slice(0, 10));
});
var fetchPost_createServerFn_handler = createServerRpc({
	id: "0029094260fc8f554fa3ac223696de0e9591567ec6420250e896c91244c812c5",
	name: "fetchPost",
	filename: "src/utils/posts.tsx"
}, (opts) => fetchPost.__executeServer(opts));
var fetchPost = createServerFn({ method: "GET" }).validator((d) => d).handler(fetchPost_createServerFn_handler, async ({ data }) => {
	console.info(`Fetching post with id ${data}...`);
	return await axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`).then((r) => r.data).catch((err) => {
		console.error(err);
		if (err.status === 404) throw notFound();
		throw err;
	});
});
//#endregion
export { fetchPost_createServerFn_handler, fetchPosts_createServerFn_handler };
