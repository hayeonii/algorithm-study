// 가운데 글자 가져오기
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  if (s.length % 2) {
    return [...s].splice(s.length / 2, 1).toString();
  } else {
    return [...s]
      .splice(s.length / 2 - 1, 2)
      .join("")
      .toString();
  }
}
