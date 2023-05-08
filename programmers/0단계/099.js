// 카운트 업
// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start, end) {
  return Array(end - start + 1)
    .fill(0)
    .map((_, i) => i + start);
}
