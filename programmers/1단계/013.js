// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
  let sum = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }
  return sum;
}
