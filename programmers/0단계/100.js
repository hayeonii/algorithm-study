// 더 크게 합치기
// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
  const ab = parseInt([a, b].join(""));
  const ba = parseInt([b, a].join(""));

  return Math.max(ab, ba);
}

function solution2(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
