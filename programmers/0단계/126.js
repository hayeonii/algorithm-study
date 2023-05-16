// 주사위 게임 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
  const result = (a % 2) + (b % 2);

  switch (result) {
    case 2:
      return a * a + b * b;
      break;
    case 1:
      return 2 * (a + b);
      break;
    case 0:
      return Math.abs(a - b);
    default:
      return;
  }
}
