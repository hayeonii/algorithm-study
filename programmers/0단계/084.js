// 조건에 맞게 수열 변환하기 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181835

function solution(arr, k) {
  if (k % 2) {
    return arr.map((v) => v * k);
  } else {
    return arr.map((v) => v + k);
  }
}
