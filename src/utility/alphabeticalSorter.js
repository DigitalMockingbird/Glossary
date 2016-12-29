function sortAlphabetically(theArray, sortLanguage) {
  let sorted = theArray.concat();
  sorted.sort(function (a, b) {
    let sortStatus = 0;
    if (a[sortLanguage] < b[sortLanguage]) {
      sortStatus = -1;
    }
    if (a[sortLanguage] > b[sortLanguage]) {
      sortStatus = 1;
    }
    return sortStatus;
  });
  return sorted;
}

export default sortAlphabetically;