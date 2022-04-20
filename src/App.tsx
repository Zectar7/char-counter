import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./App.css";
import { OutputForm } from "./components/OutputForm";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";

function App() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);
  const [lengthNoCR, setLengthNoCR] = useState(0);
  const [lengthNoSpace, setLengthNoSpace] = useState(0);
  const [numWords, setNumWords] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const changeLength = () => {
    setLength(text.length);
    let textWithoutCR = text.replace(/\n/g, "");
    setLengthNoCR(textWithoutCR.length);
    let textWithoutSpace = textWithoutCR.replace(/\s+/g, "");
    setLengthNoSpace(textWithoutSpace.length);
    let textNumWords = text === "" ? 0 : text.trim().split(/\s+/).length;
    setNumWords(textNumWords);
  };

  useEffect(() => {
    changeLength();
  }, [text]);

  const clearText = () => {
    setText("");
  };

  const readClipBord = () => {
    navigator.clipboard
      .readText()
      .then((data) => {
        setText(data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <Header />
      <TextField
        id="outlined-multiline-static"
        label="文字を入力してください"
        multiline
        rows={9}
        sx={{ width: "80%" }}
        onChange={handleChange}
        value={text}
      />
      <div className="buttons">
        <Buttons readClipBord={readClipBord} clearText={clearText} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <OutputForm length={length} desc="改行込みの文字数" unit="文字" />
        <OutputForm length={lengthNoCR} desc="改行抜きの文字数" unit="文字" />
        <OutputForm length={lengthNoSpace} desc="改行、空白抜きの文字数" unit="文字" />
        <OutputForm length={numWords} desc="空白区切りの(英)単語数" unit="単語" />
      </div>
    </div>
  );
}

export default App;
