// 간단한 식 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");

  switch (op) {
    case "+":
      return Number(a) + Number(b);
      break;
    case "-":
      return a - b;
      break;
    case "*":
      return a * b;
      break;
    default:
  }
}
