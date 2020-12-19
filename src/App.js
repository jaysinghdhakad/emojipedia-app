import React, { useState } from "react";
import "./styles.css";
var emojiDictionary = {
  "🤣": "Rolling on the floor laughing",
  "🙈": "Gandhi's seeing no evil monkey",
  "❤️": "Heart",
  "😟": "Worried",
  "😂": "Face with tears of joy",
  "😊": "Smilling"
  // you can add more at your convinence
};
var emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We dont have this in our data base";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojiHandler} />
      <h1> {meaning} </h1>
      <h3> Emoji's in the database</h3>
      {emojiList.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
