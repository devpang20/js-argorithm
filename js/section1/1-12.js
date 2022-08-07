function solution(str) {
  let arr = str.split("");
  let answer = [];

  arr.forEach((row) => {
    if (row === row.toLowerCase()) {
      answer.push(row.toUpperCase());
    } else {
      answer.push(row);
    }
  });

  return answer.join("");
}

const str = "ItisTimeToStudy";

solution(str);
