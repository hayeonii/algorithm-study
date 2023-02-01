// 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

function solution(s) {
  let p = 0;
  let y = 0;

  s.toLowerCase()
    .split("")
    .map((v) => {
      if (v === "p") {
        p++;
      } else if (v === "y") {
        y++;
      }
    });

  if (p === y) {
    return true;
  } else {
    return false;
  }
}
