import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        return (
          <p className="guess" key={rowIndex}>
            {range(0, 5).map((colIndex) => {
              return (
                <span className="cell" key={colIndex}>
                  {guesses[rowIndex]?.charAt(colIndex)}
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
