import { i as createServerFn } from "./esm-iTNSyFOE.js";
import { t as createServerRpc } from "./createServerRpc-Cvjxp0f7.js";
import fs from "node:fs";
import path from "node:path";
//#region src/server/wordle/dictionary.ts?tss-serverfn-split
var dictionaryMaker = () => {
	const filePath = path.resolve(process.cwd(), "./src/data/dictionaryData.json");
	const rawData = fs.readFileSync(filePath, "utf-8");
	return new Set(JSON.parse(rawData).map((w) => w));
};
var wordSet = await dictionaryMaker();
/**
* Checks a submitted word against a dictionary and returns true only if it is in the dictionary
* Is a server only function
* 
* @param data - an object like { word: 'bacon' }
* 
* @example 
* ```ts
* isValidWordServer({ word: "blues"})
* // returns true
* ```
*/
var isValidWordServer_createServerFn_handler = createServerRpc({
	id: "c60b13a7858a78e04f882ad84f0361caf72133ff28495ae2720332c65d28e6e4",
	name: "isValidWordServer",
	filename: "src/server/wordle/dictionary.ts"
}, (opts) => isValidWordServer.__executeServer(opts));
var isValidWordServer = createServerFn().validator((word) => word).handler(isValidWordServer_createServerFn_handler, async ({ data: word }) => {
	return wordSet.has(word);
});
//#endregion
export { isValidWordServer_createServerFn_handler };
