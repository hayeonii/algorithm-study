// 가까운 수
// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  const minDiff = Math.min(...array.map((a) => Math.abs(a - n)));
  return array.sort((a, b) => a - b).find((a) => Math.abs(a - n) === minDiff);
}
