// 평균 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
