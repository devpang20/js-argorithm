const str = "BANANA";

const soluation = function (str) {
  const arr = str.split("");
  const changeArr = arr.map((row) => (row === "A" ? "#" : row));
  const changeStr = changeArr.join("");

  return changeStr;
};

console.log(soluation2(str));
