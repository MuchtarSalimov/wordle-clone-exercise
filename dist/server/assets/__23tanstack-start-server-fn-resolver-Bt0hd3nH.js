//#region \0%23tanstack-start-server-fn-resolver
var manifest = {
	"0029094260fc8f554fa3ac223696de0e9591567ec6420250e896c91244c812c5": {
		functionName: "fetchPost_createServerFn_handler",
		importer: () => import("./posts-BAH-LZ-G2.js")
	},
	"22c554e8e5671e5e2a0af3540d595934f39387ea77cfa20cadcadead31b984f1": {
		functionName: "showFinalAnswer_createServerFn_handler",
		importer: () => import("./guessing-DMPsmtR-.js")
	},
	"541e1137f0e5fac435de465d3c8fe6f3a2c78bdf3b543f2ed186c503d495bc81": {
		functionName: "getNewSecretWordIndexServer_createServerFn_handler",
		importer: () => import("./guessing-DMPsmtR-.js")
	},
	"c60b13a7858a78e04f882ad84f0361caf72133ff28495ae2720332c65d28e6e4": {
		functionName: "isValidWordServer_createServerFn_handler",
		importer: () => import("./dictionary-Boc97mH_.js")
	},
	"cbb8ca69048418e62742f2c511faa56326b80ace384144a35bb3e0bf5e8124be": {
		functionName: "fetchPosts_createServerFn_handler",
		importer: () => import("./posts-BAH-LZ-G2.js")
	},
	"f59056df974fc572d9700c1db1790f5bf690fec385d2f505480c588afb1840ca": {
		functionName: "submitGuessToServer_createServerFn_handler",
		importer: () => import("./guessing-DMPsmtR-.js")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
