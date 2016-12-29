// Button logic for which glossary entries to display

import initialState from "./initialState";
import removeDuplicates from "../utility/duplicateRemover";
import sortAlphabetically from "../utility/alphabeticalSorter";

const visibleGlossary = (state = initialState, action) => {
  switch (action.filter) {
    case "SHOW_DUPLICATES": {
      let sorted = state.glossary.words;
      if (state.glossary.toggleAlphabetical === "SORT_ENGLISH") {
        sorted = sortAlphabetically(sorted, "english");
      }
      return Object.assign({}, state,
        {
          glossary: Object.assign({}, state.glossary,
            {
              toggleDuplicates: "SHOW_DUPLICATES",
              visibleWords: sorted
            }
          )
        }
      );
    }
    case "HIDE_DUPLICATES": {
      return Object.assign({}, state,
        {
          glossary: Object.assign({}, state.glossary,
            {
              toggleDuplicates: "HIDE_DUPLICATES",
              visibleWords: removeDuplicates(state.glossary.visibleWords)
            }
          )
        }
      );
    }
    case "SORT_NONE": {
      return Object.assign({}, state,
        {
          glossary: Object.assign({}, state.glossary,
            {
              toggleAlphabetical: "SORT_NONE",
              visibleWords: sortAlphabetically(state.glossary.visibleWords, "french")
            }
          )
        }
      );
    }
    case "SORT_ENGLISH": {
      return Object.assign({}, state,
        {
          glossary: Object.assign({}, state.glossary,
            {
              toggleAlphabetical: "SORT_ENGLISH",
              visibleWords: sortAlphabetically(state.glossary.visibleWords, "english")
            }
          )
        }
      );
    }
    default: {
      return state;
    }
  }
};

export default visibleGlossary;