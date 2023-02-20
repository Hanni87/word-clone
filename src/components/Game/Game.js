import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import WinBanner from "../WinBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function addGuess(guess) {
    let nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      {gameStatus === "won" && <WinBanner guessesNeeded={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addGuess={addGuess} disabled={gameStatus !== "running"} />
    </>
  );
}

export default Game;
