// 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  const result = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  return result.length ? result : [-1];
}
