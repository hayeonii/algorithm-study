// 자연수 뒤집어 배열로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

const solution = (n) => {
  return n
    .toString()
    .split("")
    .map((v) => parseInt(v))
    .reverse();
};
