// 문자열 섞기
// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
  let result = [];

  str1.split("").map((v, i) => result.push(v, str2[i]));

  return result.join("");
}
