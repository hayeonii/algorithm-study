// 숨어있는 숫자의 덧셈(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120864

function solution(my_string) {
  const arr = my_string
    .replace(/[a-zA-Z]/g, " ")
    .split(" ")
    .filter((i) => i.length > 0);
  return arr.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}
