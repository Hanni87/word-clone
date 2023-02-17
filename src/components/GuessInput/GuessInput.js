import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={(event) => {
      event.preventDefault();
    
      if(guess.length===5){
        console.info({ guess });
        setGuess('')
      }

    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" pattern="[A-Za-z]{5}" maxLength="5" title="5 letters required" value={guess} onChange={(event) => {
        const guessUpperCase = event.target.value.toUpperCase();
        setGuess(guessUpperCase)
      }}/>
    </form>
  );
}

export default GuessInput;
