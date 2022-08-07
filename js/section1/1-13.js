function solution(str) {
  let arr = str.split("");
  let answer = [];

  arr.forEach((row) => {
    if (row === row.toLowerCase()) {
      answer.push(row.toUpperCase());
    } else if (row === row.toUpperCase()) {
      answer.push(row.toLowerCase());
    }
  });

  return answer.join("");
}

const str = "StuDY";

solution(str);
