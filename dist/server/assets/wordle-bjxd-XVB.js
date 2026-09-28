import { i as createServerFn } from "./esm-iTNSyFOE.js";
import { a as createSsrRpc, i as submitGuessToServer, n as getNewSecretWordIndexServer, r as showFinalAnswer, t as Route } from "./wordle-CCWwRXAn.js";
import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Button, Center, Container, Flex, Grid, Text, Title } from "@mantine/core";
//#region src/server/wordle/dictionary.ts
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
var isValidWordServer = createServerFn().validator((word) => word).handler(createSsrRpc("c60b13a7858a78e04f882ad84f0361caf72133ff28495ae2720332c65d28e6e4"));
//#endregion
//#region src/routes/wordle.tsx?tsr-split=component
var startingLetterPool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var startingState = {
	pastWords: [],
	futureWords: Array(5).fill("     ")
};
var isSubmitting = false;
function RouteComponent() {
	const [guessesTaken, setGuessesTaken] = useState(0);
	const [board, setBoard] = useState(startingState);
	const [currentWord, setCurrentWord] = useState("");
	const [gameState, setGameState] = useState("playing");
	const [remainingLetterPool, setRemainingLetterPool] = useState(startingLetterPool);
	const [secretWordIndex, setSecretWordIndex] = useState(Route.useLoaderData());
	const [finalAnswer, setFinalAnswer] = useState("");
	async function resetGame() {
		setSecretWordIndex(await getNewSecretWordIndexServer());
		setGuessesTaken(0);
		setBoard(startingState);
		setGameState("playing");
		setRemainingLetterPool(startingLetterPool);
		setFinalAnswer("");
	}
	function pressBackspace() {
		if (gameState !== "playing") return;
		setCurrentWord((prev) => prev.slice(0, -1));
	}
	function pressEnter() {
		if (gameState !== "playing") return;
		if (currentWord.length === 5) submitWord(currentWord);
	}
	function guessLetter(letter) {
		if (gameState !== "playing") return;
		setCurrentWord((prev) => prev.length < 5 ? prev + letter.toUpperCase() : prev);
	}
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Enter") {
				pressEnter();
				return;
			}
			if (event.key === "Backspace") {
				pressBackspace();
				return;
			}
			if (/^[a-zA-Z]$/.test(event.key)) {
				guessLetter(event.key);
				return;
			}
		};
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [gameState, currentWord]);
	async function submitWord(submittedWord) {
		if (isSubmitting) return;
		isSubmitting = true;
		if (!await isValidWordServer({ data: submittedWord })) {
			document.getElementById("board")?.classList.toggle("shaking");
			await setTimeout(() => {
				document.getElementById("board")?.classList.toggle("shaking");
			}, 1e3);
		} else {
			const guessResponse = await submitGuessToServer({ data: {
				wordIndex: secretWordIndex,
				wordGuess: submittedWord
			} });
			if (guessResponse.correct) setGameState("win");
			else if (guessesTaken === 5) {
				setGameState("gameover");
				setFinalAnswer(await showFinalAnswer({ data: { wordIndex: secretWordIndex } }));
			} else setRemainingLetterPool((prev) => prev.split("").filter((l) => submittedWord.indexOf(l) === -1).join());
			setGuessesTaken((prev) => prev + 1);
			setCurrentWord("");
			setBoard((prevBoard) => {
				return {
					pastWords: [...prevBoard.pastWords, guessResponse.guessBreakdown],
					futureWords: [...prevBoard.futureWords.slice(0, -1)]
				};
			});
		}
		isSubmitting = false;
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(Center, {
			maw: "100%",
			children: /* @__PURE__ */ jsx(Title, { children: "Wordle Clone" })
		}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(Board, {}),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx(Text, {
			display: gameState !== "playing" ? "block" : "none",
			children: gameState === "win" ? "WIN" : `The word was ${finalAnswer}`
		}) }),
		/* @__PURE__ */ jsx("br", {}),
		/* @__PURE__ */ jsx(Center, { children: /* @__PURE__ */ jsx(Button, {
			display: gameState !== "playing" ? "block" : "none",
			onClick: () => resetGame(),
			children: " Play Again"
		}) }),
		/* @__PURE__ */ jsx(VisualKeyboardComponent, {})
	] });
	function Board() {
		return /* @__PURE__ */ jsx(Container, {
			strategy: "grid",
			size: "30rem",
			children: /* @__PURE__ */ jsxs(Grid, {
				id: "board",
				type: "container",
				columns: 5,
				rowGap: "0.3rem",
				columnGap: "0.2rem",
				children: [
					board.pastWords.map((word, rowIndex) => {
						return word.map((letter, colIndex) => {
							return /* @__PURE__ */ jsx(LetterBlock, {
								status: letter.status,
								letter: letter.letter
							}, `${rowIndex}-${colIndex}`);
						});
					}),
					guessesTaken < 6 && currentWord.split("").map((letter, index) => /* @__PURE__ */ jsx(LetterBlock, {
						status: "black",
						letter
					}, `current-${index}`)),
					guessesTaken < 6 && Array(5 - currentWord.length).fill(0).map((_, index) => /* @__PURE__ */ jsx(LetterBlock, {
						status: "black",
						letter: " "
					}, `current-empty-${index}`)),
					Array(Math.max(5 - guessesTaken, 0)).fill(0).map((_, rowIndex) => {
						return Array(5).fill(0).map((_, colIndex) => {
							return /* @__PURE__ */ jsx(LetterBlock, {
								status: "black",
								letter: " "
							}, `${rowIndex}-${colIndex}`);
						});
					})
				]
			})
		});
	}
	function LetterBlock({ status, letter }) {
		return /* @__PURE__ */ jsx(Grid.Col, {
			className: `letter-block guess-${status}`,
			span: 1,
			children: letter
		});
	}
	function VisualKeyboardComponent() {
		return /* @__PURE__ */ jsxs(Container, {
			strategy: "block",
			size: "60rem",
			children: [
				/* @__PURE__ */ jsx(LetterRow, {
					letterSet: "QWERTYUIOP",
					children: /* @__PURE__ */ jsx(Button, {
						disabled: gameState !== "playing",
						size: "lg",
						onClick: () => pressBackspace(),
						children: "⌫"
					})
				}),
				/* @__PURE__ */ jsx(LetterRow, {
					letterSet: "ASDFGHJKL",
					children: /* @__PURE__ */ jsx(Button, {
						disabled: gameState !== "playing",
						size: "lg",
						onClick: () => pressEnter(),
						children: "Submit"
					})
				}),
				/* @__PURE__ */ jsx(LetterRow, { letterSet: "ZXCVBNM" })
			]
		});
	}
	function LetterRow({ letterSet, children }) {
		return /* @__PURE__ */ jsxs(Flex, {
			columnGap: 8,
			m: "lg",
			justify: "center",
			children: [letterSet.split("").map((letter, letterIndex) => {
				return /* @__PURE__ */ jsx(LetterButton, { letter }, letterIndex);
			}), children]
		});
	}
	function LetterButton({ letter }) {
		return /* @__PURE__ */ jsx(Button, {
			disabled: gameState !== "playing",
			color: remainingLetterPool.indexOf(letter) === -1 ? "gray" : "blue",
			size: "lg",
			onClick: () => guessLetter(letter),
			children: letter
		});
	}
}
//#endregion
export { RouteComponent as component };
