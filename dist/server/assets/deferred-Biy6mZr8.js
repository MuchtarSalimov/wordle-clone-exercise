import { queryOptions } from "@tanstack/react-query";
//#region src/routes/deferred.tsx?tsr-shared=1
var deferredQueryOptions = () => queryOptions({
	queryKey: ["deferred"],
	queryFn: async () => {
		await new Promise((r) => setTimeout(r, 3e3));
		return {
			message: `Hello deferred from the server!`,
			status: "success",
			time: /* @__PURE__ */ new Date()
		};
	}
});
//#endregion
export { deferredQueryOptions as t };
