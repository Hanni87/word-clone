import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        const guess = guesses[rowIndex];
        const checkedGuess = checkGuess(guess, answer);
        return (
          <p className="guess" key={rowIndex}>
            {/* Could be game component */}
            {range(0, 5).map((colIndex) => {
              const status = checkedGuess ? checkedGuess[colIndex].status : "";
              return (
                <span className={`cell ${status}`} key={colIndex}>
                  {guess?.charAt(colIndex)}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
