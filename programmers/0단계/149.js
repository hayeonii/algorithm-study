// 가까운 1 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181898

function solution(arr, idx) {
  return arr.findIndex((v, i) => i >= idx && v === 1);
}
