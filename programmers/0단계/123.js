// 배열 만들기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % k === 0) result.push(i);
  }

  return result;
}
