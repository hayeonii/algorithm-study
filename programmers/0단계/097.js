// 문자열 곱하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181940

function solution(my_string, k) {
  return Array(k).fill(my_string).join("");
}

function solution2(my_string, k) {
  return my_string.repeat(k);
}
