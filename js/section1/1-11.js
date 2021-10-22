function soluation(str) {
  let arr = str.split("");
  let count = 0;

  arr.forEach((row) => {
    if (row === row.toUpperCase()) {
      count++;
    }
  });

  return count;
}

const str = "KoreaTimeGood";

soluation(str);
