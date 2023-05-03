// n 번째 원소까지
// https://school.programmers.co.kr/learn/courses/30/lessons/181889

function solution(num_list, n) {
  return num_list.filter((_, i) => i <= n - 1);
}

function solution2(num_list, n) {
  return num_list.slice(0, n);
}
