// 음양 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let result = 0;
  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (result += absolutes[i]) : (result -= absolutes[i]);
  }

  return result;
}
