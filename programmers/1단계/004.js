// 자릿수 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

const solution = (N) => {
  return N.toString()
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);
};
