const str = "BANANA";

const solution = function (str) {
  const arr = str.split("");
  const changeArr = arr.map((row) => (row === "A" ? "#" : row));
  const changeStr = changeArr.join("");

  return changeStr;
};

console.log(solution(str));
