// 원소들의 곱과 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  const sum = num_list.reduce((a, c) => a + c, 0);
  const multiply = num_list.reduce((a, c) => a * c, 1);

  return multiply < sum * sum ? 1 : 0;
}
