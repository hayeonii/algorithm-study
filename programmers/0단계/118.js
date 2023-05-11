// A 강조하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181874

function solution(myString) {
  return [...myString]
    .map((v) => (v === "a" ? "A" : v !== "A" ? v.toLowerCase() : v))
    .join("");
}
