// 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
  if (n % Math.sqrt(n)) {
    return -1;
  } else {
    return Math.pow(Math.sqrt(n) + 1, 2);
  }
}

// Math.sqrt() - 제곱근
// Math.pow() - 거듭제곱
