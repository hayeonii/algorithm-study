// 홀짝에 따라 다른 값 반환하기s
// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  const result = [];
  if (n % 2 === 0) {
    for (let i = n; i > 0; i--) {
      if (i % 2 === 0) result.push(i);
    }
    return result.reduce((acc, cur) => acc + cur ** 2, 0);
  } else {
    for (let i = n; i > 0; i--) {
      if (i % 2 === 1) result.push(i);
    }
    return result.reduce((acc, cur) => acc + cur, 0);
  }
}
