import React, { memo } from "react";
import { Button } from "@mui/material";
type props = {
  readClipBord: VoidFunction;
  clearText: VoidFunction;
};

export const Buttons: React.VFC<props> = memo(({ readClipBord, clearText }) => {
  return (
    <div className="buttons">
      <Button
        variant="outlined"
        color="primary"
        sx={{ marginRight: "5px" }}
        onClick={() => readClipBord()}
      >
        クリップボードの内容を貼り付ける
      </Button>
      <Button variant="outlined" color="error" onClick={() => clearText()}>
        文字をクリアする
      </Button>
    </div>
  );
});
