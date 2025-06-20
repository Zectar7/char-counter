import { create } from "zustand";
import GraphemeSplitter from "grapheme-splitter";

interface StoreState {
  text: string;
  length: number;
  lengthNoCR: number;
  lengthNoSpace: number;
  numWords: number;
  setText: (value: string) => void;
  clearText: () => void;
  readClipboard: () => void;
}

const splitter = new GraphemeSplitter();

export const useStore = create<StoreState>((set, get) => ({
  text: "",
  length: 0,
  lengthNoCR: 0,
  lengthNoSpace: 0,
  numWords: 0,
  setText: (value: string) => {
    const length = splitter.countGraphemes(value);
    const textWithoutCR = value.replace(/\n/g, "");
    const lengthNoCR = splitter.countGraphemes(textWithoutCR);
    const textWithoutSpace = textWithoutCR.replace(/\s+/g, "");
    const lengthNoSpace = splitter.countGraphemes(textWithoutSpace);
    const numWords = value === "" ? 0 : value.trim().split(/\s+/).length;
    set({ text: value, length, lengthNoCR, lengthNoSpace, numWords });
  },
  clearText: () => {
    set({ text: "", length: 0, lengthNoCR: 0, lengthNoSpace: 0, numWords: 0 });
  },
  readClipboard: async () => {
    try {
      const data = await navigator.clipboard.readText();
      get().setText(data);
    } catch (e) {
      console.log(e);
    }
  },
}));
