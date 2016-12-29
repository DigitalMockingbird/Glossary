import {connect} from "react-redux";
import GlossaryTable from "../components/GlossaryTable";

const mapStateToProps = (state) => ({
  words: state.glossary.words,
  visibleWords: state.glossary.visibleWords,
  toggleDuplicates: state.glossary.toggleDuplicates,
  toggleAlphabetical: state.glossary.toggleAlphabetical
});

const VisibleGlossary = connect(
    mapStateToProps
)(GlossaryTable);

export default VisibleGlossary;