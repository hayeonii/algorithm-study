// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  const string = s.split(" ");

  for (let i = 0; i < string.length; i++) {
    string[i] = string[i]
      .split("")
      .map((v, i) => (i % 2 ? v.toLowerCase() : v.toUpperCase()))
      .join("");
  }

  return string.join(" ");
}
