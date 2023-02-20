import React from "react";

function WinBanner({ guessesNeeded }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessesNeeded} guesses</strong>.
      </p>
    </div>
  );
}

export default WinBanner;
