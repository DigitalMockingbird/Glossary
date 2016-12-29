import {connect} from "react-redux";
import {changeFilter} from "../actions/actions";
import Link from "../components/Link";

const mapStateToProps = (state, ownProps) => ({
  activeDuplicateButton: ownProps.filter === state.glossary.toggleDuplicates,
  activeSortButton: ownProps.filter === state.glossary.toggleAlphabetical
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(changeFilter(ownProps.filter));
  }
});

const DuplicateFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);

export default DuplicateFilterLink;