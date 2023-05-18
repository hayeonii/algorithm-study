// 배열의 길이에 따라 다른 연산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181854

function solution(arr, n) {
  if (arr.length % 2 === 1) {
    return arr.map((v, i) => (i % 2 === 0 ? v + n : v));
  } else {
    return arr.map((v, i) => (i % 2 === 1 ? v + n : v));
  }
}
