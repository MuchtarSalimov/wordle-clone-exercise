import { createFileRoute } from '@tanstack/react-router'
import { Button, Center, Container, Flex, Grid, Title, Text} from '@mantine/core';
import { useEffect, useRef, useState } from 'react';
import { wordleList } from '~/data/wordle-list';
import { isValidWordServer } from '../server/wordle/dictionary'

export const Route = createFileRoute('/wordle')({
  component: RouteComponent,
})

type gameState = 'playing' | 'win' | 'gameover'
type letterStatus = 'black' | 'yellow' | 'green'
type letterGuess = {
  status: letterStatus;
  letter: string;
}

let secretWord = wordleList[Math.floor(Math.random() * wordleList.length)]
const startingLetterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const startingState: {
  pastWords: letterGuess[][];
  futureWords: string[];
} = {
  pastWords: [],
  futureWords: Array(5).fill("     "),
}

let isSubmitting = false

function RouteComponent() {
  const [guessesTaken, setGuessesTaken] = useState(0)
  const [board, setBoard] = useState(startingState)
  const [currentWord, setCurrentWord] = useState("")
  const [gameState, setGameState] = useState<gameState>('playing')
  const [remainingLetterPool, setRemainingLetterPool] = useState(startingLetterPool)

  function resetGame () {
    secretWord = wordleList[Math.floor(Math.random() * wordleList.length)]
    setGuessesTaken(0) 
    setBoard(startingState)
    setGameState('playing')
    setRemainingLetterPool(startingLetterPool)
  }

  function pressBackspace() {
    if ( gameState !== 'playing') { return }
  setCurrentWord((prev) => prev.slice(0, -1));
  }

  function pressEnter() {
    if ( gameState !== 'playing') { return }
    if (currentWord.length === 5) {
      submitWord(currentWord);
    }
  }

  // set up keyboard inputs
  function guessLetter (letter: string) {
    if ( gameState !== 'playing') { return }
    setCurrentWord((prev) => (prev.length < 5 ? prev + letter.toUpperCase() : prev));
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        pressEnter()
        return
      }
      if (event.key === 'Backspace') {
        pressBackspace()
        return
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        guessLetter(event.key)
        return
      }
    };

    // Add event listener on mount
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on unmount to prevent memory leaks
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameState, currentWord]);

  async function submitWord(submittedWord: string) {
    if (isSubmitting) { return }
    isSubmitting = true
    const valid = await isValidWordServer({ data: submittedWord })
    if (!valid) {
      // invalid word shakes board
      document.getElementById("board")?.classList.toggle('shaking')
      await setTimeout(() => { document.getElementById("board")?.classList.toggle('shaking') }, 1000)
    } else {
      if (submittedWord === secretWord) {
        setGameState('win')
      } else if (guessesTaken === 5) {
        setGameState('gameover')
      } else {
        setRemainingLetterPool((prev) => prev.split("").filter((l) => submittedWord.indexOf(l) === -1).join())
      }
      setGuessesTaken((prev) => prev + 1);
      setCurrentWord(""); // reset the current word after submission
      const newWordGuess: letterGuess[] = [];
      submittedWord.split('').forEach((letter, index) => {
        if (letter === secretWord[index]) {
          newWordGuess.push({ status: 'green', letter });
        } else if (secretWord.includes(letter)) {
          newWordGuess.push({ status: 'yellow', letter });
        } else {
          newWordGuess.push({ status: 'black', letter });
        }
      });
      setBoard((prevBoard) => {
        return {
          pastWords: [...prevBoard.pastWords, newWordGuess],
          futureWords:[...prevBoard.futureWords.slice(0, -1)],
        };
      })

    }
    isSubmitting = false
  }
  
  // render wordle game board
  return (
    <>
      <br/>
      <Center maw="100%"><Title>Wordle Clone</Title></Center>
      <br/>
      <Board></Board>
      <br/>
      {<Center><Text display={gameState !=="playing" ? "block" : "none"}>{gameState === "win"? "WIN" : `The word was ${secretWord}`}</Text></Center>}
      <br/>
      {<Center><Button display={gameState !=="playing" ? "block" : "none"} onClick={() => resetGame()}> Play Again</Button></Center>}
      <VisualKeyboardComponent></VisualKeyboardComponent>
    </>
  )

  function Board() {
    return (
      <Container strategy="grid" size={"30rem"}>
        <Grid  id="board" type="container" columns={5} rowGap="0.3rem" columnGap="0.2rem">
          {/*  Already Guessed Words  */}
          { board.pastWords.map((word, rowIndex) => {
              return (word.map((letter, colIndex) => { return (<LetterBlock key={`${rowIndex}-${colIndex}`} status={letter.status} letter={letter.letter} />) }))})
          }
          {/* Current Row Inputs and Placeholders */}
          { guessesTaken < 6 && currentWord.split('').map((letter, index) => (<LetterBlock key={`current-${index}`} status="black" letter={letter} />))}
          { guessesTaken < 6 && Array(5 - currentWord.length).fill(0).map((_, index) => ( <LetterBlock key={`current-empty-${index}`} status="black" letter={" "} />))}
          {/*  Future Guess Placeholders   */}
          { Array(Math.max(5 - guessesTaken, 0)).fill(0).map((_, rowIndex) => {
              return ( Array(5).fill(0).map((_, colIndex) => {
                return ( <LetterBlock key={`${rowIndex}-${colIndex}`} status="black" letter=" " /> )
              }))
            })
          }
        </Grid>
      </Container>
    )
  }

  function LetterBlock({ status, letter }: { status: letterStatus; letter: string }) {
    return (
      <Grid.Col className={`letter-block guess-${status}`} span={1}>
        {letter}
      </Grid.Col>
    )
  }

  function VisualKeyboardComponent () {
    return (
        <Container strategy="block" size={"60rem"}>
          <LetterRow letterSet="QWERTYUIOP"><Button disabled={gameState !== "playing"} size="lg" onClick={() => pressBackspace()}>⌫</Button></LetterRow>
          <LetterRow letterSet="ASDFGHJKL"><Button disabled={gameState !== "playing"} size="lg" onClick={() => pressEnter()}>Submit</Button></LetterRow>
          <LetterRow letterSet="ZXCVBNM"></LetterRow>
        </Container>
    )
  }

  function LetterRow ({ letterSet, children } : { letterSet: string, children?: React.ReactNode }) {
    return (
      <Flex columnGap={8} m="lg" justify={"center"}>
        {
          letterSet.split("").map((letter, letterIndex) => {
            return <LetterButton key={letterIndex} letter={letter}></LetterButton>
          })        
        } 
        {children}
      </Flex>
    )
  }

  function LetterButton ({ letter }: { letter : string }) {
    return (
      <Button disabled={gameState !== "playing"} color={remainingLetterPool.indexOf(letter) === -1 ? "gray" : "blue"} size="lg" onClick={() => guessLetter(letter)}>{letter}</Button>
    )
  }
}
