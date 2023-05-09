// 문자열 정수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
  return num_str.split("").reduce((a, b) => a + parseInt(b), 0);
}
