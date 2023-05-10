// 카운트 다운
// https://school.programmers.co.kr/learn/courses/30/lessons/181899

function solution(start, end) {
  let result = [];

  for (let i = start; i >= end; i--) {
    result.push(i);
  }

  return result;
}
