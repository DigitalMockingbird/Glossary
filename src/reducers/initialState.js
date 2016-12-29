// words: for adding back in duplicate words
// visibleWords: what is currently displayed in the glossary

import words from "./data";

let initialState = {
  glossary: {
    words: words,
    visibleWords: words,
    toggleDuplicates: "SHOW_DUPLICATES",
    toggleAlphabetical: "SORT_NONE"
  }
};

export default initialState;