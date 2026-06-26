import { i as createServerFn } from "./esm-iTNSyFOE.js";
import { t as createSsrRpc } from "./createSsrRpc-B6upmxDP.js";
import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";
//#region src/server/wordle/guessing.ts
var getNewSecretWordIndexServer = createServerFn().handler(createSsrRpc("541e1137f0e5fac435de465d3c8fe6f3a2c78bdf3b543f2ed186c503d495bc81"));
var submitGuessToServer = createServerFn().validator((data) => data).handler(createSsrRpc("f59056df974fc572d9700c1db1790f5bf690fec385d2f505480c588afb1840ca"));
var showFinalAnswer = createServerFn().validator((data) => data).handler(createSsrRpc("22c554e8e5671e5e2a0af3540d595934f39387ea77cfa20cadcadead31b984f1"));
//#endregion
//#region src/routes/wordle.tsx
var $$splitComponentImporter = () => import("./wordle-DjoAHHIr.js");
var Route = createFileRoute("/wordle")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: async () => {
		return await getNewSecretWordIndexServer();
	}
});
//#endregion
export { submitGuessToServer as i, getNewSecretWordIndexServer as n, showFinalAnswer as r, Route as t };
