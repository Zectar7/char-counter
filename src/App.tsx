import React from "react";
import { TextField } from "@mui/material";
import "./App.css";
import { OutputForm } from "./components/OutputForm";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { useStore } from "./store";

function App() {
  const {
    text,
    setText,
    clearText,
    readClipboard,
    length,
    lengthNoCR,
    lengthNoSpace,
    numWords,
  } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
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
        <Buttons readClipboard={readClipboard} clearText={clearText} />
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
        <OutputForm
          length={lengthNoSpace}
          desc="改行、空白抜きの文字数"
          unit="文字"
        />
        <OutputForm
          length={numWords}
          desc="空白区切りの(英)単語数"
          unit="単語"
        />
      </div>
    </div>
  );
}

export default App;
