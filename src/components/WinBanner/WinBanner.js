import React from "react";
import Banner from "../Banner";

function WinBanner({ guessesNeeded }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guessesNeeded} guesses</strong>.
      </p>
    </Banner>
  );
}

export default WinBanner;
