// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
  let sum = 0;

  x.toString()
    .split("")
    .map((v) => (sum += parseInt(v)));
  return x % sum ? false : true;
}
