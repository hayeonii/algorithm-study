// 원하는 문자열 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181878

function solution(myString, pat) {
  return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}
