import React, { useState, useEffect } from "react";

function WordCounter() {
  return <WordByWord />;
}
//awz-kxbo-abi
const WordByWord = () => {
  // YOUR CODE HERE
  //states - js variable that can be changed 
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);
  const [word, setWord] = useState(1);

  const onSubmit = (e) => {
    e.preventDefault();
    const wordsArray = input.split(" ");
    if (wordsArray.length <= 1) {
      alert("Enter more than one word.");
    } else {
      setText(wordsArray);
      setWord(1);
      setInput("");
    }
  };
  useEffect(() => {
    if (text && word < text.length) {
      const time = setTimeout(() => setWord(word + 1), 100);
      return () => clearTimeout(time);
    }
  }, [text, word]);

  return (
    <div
      style={{
      display: "flex",
        flexDirection: "column",
    margin:'50px 0'    
  }}
    >
      <form onSubmit={onSubmit}>
        <input
          required
          type={"text"}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {text.slice(0, word).map((item) => (
          <p style={{ paddingRight: 4 }}>{item}</p>
        ))}
      </div>
    </div>
  );
 
};

export default WordCounter;