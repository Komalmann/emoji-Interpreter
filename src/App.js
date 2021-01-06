import React, { useState } from "react";
import "./styles.css";

const dictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅":
    "ntended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead. ",
  "🤣":
    "A yellow face with a big grin and scrunched, X-shaped eyes, tilted on its side as if rolling on the floor laughing (the internet acronym ROFL)",
  "😂":
    "A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing. ",
  "🙂":
    "A yellow face with simple, open eyes and a thin, closed smile. Conveys a wide range of positive, happy, and friendly sentiments. Its tone can also be patronizing, passive-aggressive, or ironic, as if saying This is fine when it’s really not.",
  "🙃":
    "Commonly used to convey irony, sarcasm, joking, or a sense of goofiness or silliness.",
  "😉":
    "A yellow face with a slight smile shown winking, usually its left eye. May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic.",
  "😊":
    "A yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and warm, positive feelings.",
  "😇":
    "A yellow face with smiling eyes, closed smile, and halo, usually blue, overhead. Often represents angels, prayers, and blessings"
};

var emojisweknow = Object.keys(dictionary);
export default function App() {
  const [meaning, setmeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = dictionary[userInput];

    if (meaning === undefined)
      meaning =
        "We don't have this in our database, Please try out some emojis below";

    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = dictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outtt</h1>
      <input onChange={emojiInputHandler}></input>
      <p>{meaning}</p>

      <h3>emojis we know</h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
