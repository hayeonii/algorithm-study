// 길이에 따른 연산
// https://school.programmers.co.kr/learn/courses/30/lessons/181879

function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((a, c) => a + c, 0)
    : num_list.reduce((a, c) => a * c, 1);
}
