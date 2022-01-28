import { useState } from "react";
import { TextField } from "@mui/material";
import "./App.css";
import { OutputForm } from "./components/OutputForm";
import { Header } from "./components/Header";

function App() {
  const [text, setText] = useState("");
  const [length, setLength] = useState(0);
  const [lengthNoCR, setLengthNoCR] = useState(0);
  const [lengthNoSpace, setLengthNoSpace] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const changeLength = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setLength(text.length);
    let textWithoutCR = text.replace(/\n/g, "");
    setLengthNoCR(textWithoutCR.length);
    let textWithoutSpace = textWithoutCR.replace(/\s+/g, "");
    setLengthNoSpace(textWithoutSpace.length);
  };

  return (
    <div className="App">
      <Header/>
      <TextField
        id="outlined-multiline-static"
        label="文字を入力してください"
        multiline
        rows={9}
        sx={{ width: "80%" }}
        onChange={handleChange}
        onKeyUp={changeLength}
      >
        {text}
      </TextField>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <OutputForm length={length} desc="改行込みの文字数" />
        <OutputForm length={lengthNoCR} desc="改行抜きの文字数" />
        <OutputForm length={lengthNoSpace} desc="改行、空白抜きの文字数" />
      </div>
    </div>
  );
}

export default App;
