// 2차원으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  let result = [];
  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(i * n, i * n + n)];
  }
  return result;
}
