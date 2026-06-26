import { i as createServerFn } from "./esm-iTNSyFOE.js";
import { t as createSsrRpc } from "./createSsrRpc-B6upmxDP.js";
import { queryOptions } from "@tanstack/react-query";
//#region src/utils/posts.tsx
var fetchPosts = createServerFn({ method: "GET" }).handler(createSsrRpc("cbb8ca69048418e62742f2c511faa56326b80ace384144a35bb3e0bf5e8124be"));
var postsQueryOptions = () => queryOptions({
	queryKey: ["posts"],
	queryFn: () => fetchPosts()
});
var fetchPost = createServerFn({ method: "GET" }).validator((d) => d).handler(createSsrRpc("0029094260fc8f554fa3ac223696de0e9591567ec6420250e896c91244c812c5"));
var postQueryOptions = (postId) => queryOptions({
	queryKey: ["post", postId],
	queryFn: () => fetchPost({ data: postId })
});
//#endregion
export { postsQueryOptions as n, postQueryOptions as t };
