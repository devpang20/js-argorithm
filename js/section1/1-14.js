function soluation(n, strArr) {
  let longWordCount = 0;
  let answer = "";

  strArr.map((row) => {
    const wordLength = row.split("").length;

    if (!longWordCount) {
      longWordCount = wordLength;
    } else if (wordLength > longWordCount) {
      longWordCount = wordLength;
      answer = row;
    }
  });
  return answer;
}
const arr = ["teacher", "time", "student", "beautiful", "good"];

soluation(arr.length, arr);
