// 주사위 게임 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  const length = Array.from(new Set([a, b, c])).length;

  switch (length) {
    case 3:
      return a + b + c;
      break;
    case 2:
      return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
      break;
    case 1:
      return (
        (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
      );
  }
}
