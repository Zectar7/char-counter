import React from "react";
import { Button } from "@mui/material";

type Props = {
  readClipboard: VoidFunction;
  clearText: VoidFunction;
};

export const Buttons: React.VFC<Props> = ({ readClipboard, clearText }) => {
  return (
    <div className="buttons">
      <Button
        variant="outlined"
        color="primary"
        sx={{ marginRight: "5px" }}
        onClick={readClipboard}
      >
        クリップボードの内容を貼り付ける
      </Button>
      <Button variant="outlined" color="error" onClick={clearText}>
        文字をクリアする
      </Button>
    </div>
  );
};
