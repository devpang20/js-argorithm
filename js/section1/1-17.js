function solution(str) {
  const arr = str.split(",");

  //갓성비... Set 키워드
  return [...new Set(arr)].join("");
}

const arr = ["good", "time", "good", "time", "student"];

solution(arr);
