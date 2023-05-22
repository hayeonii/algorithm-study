// 두 수의 연산값 비교하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181938

function solution(a, b) {
  const first = parseInt(`${a}${b}`);
  const second = 2 * a * b;

  return first === second ? first : Math.max(first, second);
}
