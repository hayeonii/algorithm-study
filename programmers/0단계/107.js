// n보다 커질 때까지 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
  let result = 0;

  for (let i = 0; result <= n; i++) {
    result += numbers[i];
  }
  return result;
}
