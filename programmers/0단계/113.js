// 접두사인지 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
  return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0;
}
