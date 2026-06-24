import { createFileRoute } from '@tanstack/react-router'
import { Container, Grid } from '@mantine/core';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/wordle')({
  component: RouteComponent,
})

type letterStatus = 'black' | 'yellow' | 'green'
type letterGuess = {
  status: letterStatus;
  letter: string;
}

const secretWord = 'REACT'
const startingLetterPool = 'ABCDEFGHIJKLMNOPQRSTUV'

const startingState: {
  pastWords: letterGuess[][];
  futureWords: string[];
} = {
  pastWords: [],
  futureWords: Array(5).fill("     "),
}

function RouteComponent() {
  const [guessesTaken, setGuessesTaken] = useState(0)
  const [board, setBoard] = useState(startingState)
  const [currentWord, setCurrentWord] = useState("")
  const [remainingLetterPool, setRemainingLetterPool] = useState(startingLetterPool)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Access the key name and check for modifiers
      if (event.key === 'Enter') {
        // submit the current word
        if(currentWord.length === 5) {
          submitWord(currentWord);
        }
        return
      }
      if (event.key === 'Backspace') {
        // remove the last letter from the current word
        setCurrentWord((prev) => prev.slice(0, -1));
        return
      }
      if (/^[a-zA-Z]$/.test(event.key)) {
        // add the letter to the current word if it's less than 5 letters
        setCurrentWord((prev) => (prev.length < 5 ? prev + event.key.toUpperCase() : prev));
        return
      }
    };

    // Add event listener on mount
    document.addEventListener('keydown', handleKeyDown);

    // Clean up event listener on unmount to prevent memory leaks
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentWord]);

  function submitWord(submittedWord: string) {
    setGuessesTaken((prev) => prev + 1);
    setBoard((prevBoard) => {
      const newPastWords = [...prevBoard.pastWords];
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
      newPastWords.push(newWordGuess);
      const newFutureWords = Array(5 - guessesTaken).fill("     ");
      console.log(newPastWords)
      console.log(newFutureWords)
      setCurrentWord(""); // reset the current word after submission
      return {
        pastWords: newPastWords,
        futureWords: newFutureWords,
      };
    })
  }
  
  return (
    <div>
      <Board/>
    </div>
  )
  
  function Board() {
    return (
      <Container strategy="grid" size={"30rem"}>
        <Grid type="container" columns={5} rowGap="0.3rem" columnGap="0.2rem">
          {
            board.pastWords.map((word, rowIndex) => {
              return (
              word.map((letter, colIndex) => {
                return (
                  <LetterBlock key={`${rowIndex}-${colIndex}`} status={letter.status} letter={letter.letter} />
                )
              })
              )
            })
          }
          {currentWord.split('').map((letter, index) => (
            <LetterBlock key={`current-${index}`} status="black" letter={letter} />
          ))}
          {
            Array(5 - currentWord.length).fill(0).map((_, index) => (
              <LetterBlock key={`current-empty-${index}`} status="black" letter={" "} />
            ))
          }
          {
            Array(5 - guessesTaken).fill(0).map((_, rowIndex) => {
              return (
              Array(5).fill(0).map((_, colIndex) => {
                return (
                  <LetterBlock key={`${rowIndex}-${colIndex}`} status="black" letter=" " />
                )
              })
              )
            })
          }
        </Grid>
      </Container>
    )
  }
}


function LetterBlock({ status, letter }: { status: letterStatus; letter: string }) {
  return (
    <Grid.Col className={`letter-block guess-${status}`} span={1}>
      {letter}
    </Grid.Col>
  )
}
