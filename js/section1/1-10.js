function soluation(str, t) {
  let arr = str.split("");
  let count = 0;

  arr.forEach((row) => {
    if (t === row) {
      count++;
    }
  });

  return count;
}

const str = "COMPUTERPROGRAMMING";
const t = "R";

soluation(str, t);
