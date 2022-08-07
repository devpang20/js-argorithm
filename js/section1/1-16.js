function solution(str) {
  const arr = str.split("");

  //갓성비... Set 키워드
  return [...new Set(arr)].join("");
}

solution("ksekkset");
