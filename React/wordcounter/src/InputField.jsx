import React, { useState } from "react";

const InputField = () => {
  const [text, setText] = useState("");
  const [letterCounts, setLetterCounts] = useState({});

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    const counts = {};
    for (let i = 0; i < text.length; i++) {
      const letter = text[i].toLowerCase();
      if (letter >= "a" && letter <= "z") {
        counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
      }
    }
    setLetterCounts(counts);
  };

  return (
    <div>
      <textarea onChange={handleTextChange} />
      <button onClick={handleButtonClick}>Count letters</button>
      {Object.keys(letterCounts).map((letter) => (
        <div key={letter}>
          {letter}: {letterCounts[letter]}
        </div>
      ))}
    </div>
  );
};

export default InputField;
