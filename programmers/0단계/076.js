// 2차원으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/120842

function solution(num_list, n) {
  let result = [];
  while (num_list.length > 0) {
    result.push(num_list.splice(0, n));
  }
  return result;
}
