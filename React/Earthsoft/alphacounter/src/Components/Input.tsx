import React, { useState } from "react";
import "../index.css";
type LetterCounts = {
  [letter: string]: number;
};


const Input = () => {
  const [userText, setUserText] = useState<string>("");
  const [letterCounts, setLetterCounts] = useState<LetterCounts>({});
  const [searchedWord, setSearchedWord] = useState<string>("");
  const [showFullCount, setShowFullCount] = useState<boolean>(false);
  const [nonAlphaChars, setNonAlphaChars] = useState<string[]>([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserText(e.target.value);
  };
  
  const handleAnalyzeButton = () => {
    const counts: LetterCounts = {};
    const nonAlphaChars: string[] = [];
    const lowerCaseText = userText.toLowerCase();
    for (let i = 0; i < lowerCaseText.length; i++) {
      const letter = lowerCaseText[i];
      if (letter >= "a" && letter <= "z") {
        counts[letter] = counts[letter] ? counts[letter] + 1 : 1;
      } else if (!letter.match(/[a-z]/i))
        if (!nonAlphaChars.includes(letter)) nonAlphaChars.push(letter);
    }
    setLetterCounts(counts);
    setSearchedWord(userText);
    setNonAlphaChars(nonAlphaChars);
  };
  const handleClearButton = () => {
    setLetterCounts({});
    setUserText("");
    setSearchedWord("");
    setNonAlphaChars([])
  };

  const handleShowFullCountClick = () => {
    setShowFullCount(!showFullCount);
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <div className="bg-gray-200 p-4 rounded-md">
        <h1 className="text-xl font-bold text-center mb-20">Alphabet Counter</h1>
        <textarea onChange={handleTextChange} value={userText} className="w-full p-2 rounded-lg bg-white" />
        <button onClick={handleAnalyzeButton} type="submit" className="ml-5 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" disabled={userText === ""}>
          Analyze text
        </button>
        <button onClick={handleClearButton} className="ml-5 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Clear Results
        </button>
        <button onClick={handleShowFullCountClick} className="ml-5 mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg" disabled={Object.keys(letterCounts).length === 0}>
          Show full count
        </button>
        <div className="mt-4">
          {searchedWord !== "" && <h2>Showing results for "{searchedWord}"</h2>}
          {(showFullCount ? alphabet : Object.keys(letterCounts).sort()).map((letter) => (
            <div key={letter} className="inline-block p-2 rounded-lg mr-2">
              {letter}: {letterCounts[letter] || 0}
            </div>
          ))}
        </div>
        <div>
          {nonAlphaChars.length > 0 && <h2>Non-Alphabet Characters that appear:</h2>}
          {nonAlphaChars.map((nonAlpha) => (
            <div key={nonAlpha} className="inline-block p-2 rounded-lg mr-2">
              {nonAlpha}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Input;
