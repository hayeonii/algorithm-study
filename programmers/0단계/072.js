// 한 번만 등장한 문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  let result = [];

  [...s].forEach((item) => {
    if (s.indexOf(item) === s.lastIndexOf(item)) {
      result.push(item);
    }
  });

  return result.sort().join("");
}
