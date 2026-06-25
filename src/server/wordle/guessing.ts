import { createServerFn } from '@tanstack/react-start';
import { wordleList } from '~/data/wordle-list';
import { letterGuess } from '~/routes/wordle';


// Define the RPC (Remote Procedure Call) that the client can call securely
export const getNewSecretWordIndexServer = createServerFn()
  .handler(async () => {
    return Math.floor(Math.random() * wordleList.length)
  })

export const submitGuessToServer = createServerFn()
  .validator((data : { wordIndex: number, wordGuess: string }) => data)
  .handler(async ({ data }) => {
    let answer = wordleList[data.wordIndex]
    const correct = data.wordGuess === answer
    // keeps track of info on the correctness of each letter guessed (including repeats)
    const guessBreakdown: letterGuess[] = []

    // set green if correct, else black
    // green letters are removed from the "pool" as they are placed
    data.wordGuess.split('').forEach((letter, index) => {
      if (letter === wordleList[data.wordIndex][index]) {
        guessBreakdown[index] =  { status: 'green', letter}
        answer = answer.replace(letter, "-")
      } else {
        guessBreakdown[index] = { status: 'black', letter}
      }
    })
    // set wrong-positoned letters to yellow, unless too few copies remain in answer
    // yellow letters removed from the "pool" as they are placed
    guessBreakdown.forEach((breakdown, index) => {
      if (breakdown.status === 'black' && answer.includes(breakdown.letter)) {
        guessBreakdown[index] = { status: 'yellow', letter: breakdown.letter }
        answer = answer.replace(breakdown.letter, "-")
      }
    })

    return {
      correct,
      guessBreakdown
    }
  })

export const showFinalAnswer = createServerFn()
  .validator((data : { wordIndex: number }) => data)
  .handler(async ({ data }) => {
    return wordleList[data.wordIndex] 
  })
