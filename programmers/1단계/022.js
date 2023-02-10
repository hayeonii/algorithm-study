// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  return n % 2
    ? "수박".repeat(Math.floor(n / 2)) + "수"
    : "수박".repeat(Math.floor(n / 2));
}
