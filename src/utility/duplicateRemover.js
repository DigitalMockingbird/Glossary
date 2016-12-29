function removeDuplicates(words) {
  let arr = {};
  let cleanedWords = [];

  for (let i = 0; i < words.length; i++) {
    arr[words[i]["english"]] = words[i];
  }

  for (let key in arr)
    cleanedWords.push(arr[key]);

  return cleanedWords;
}

export default removeDuplicates;