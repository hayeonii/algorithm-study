// 조건에 맞게 수열 변환하기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181882

function solution(array) {
  return array.map((v) =>
    v >= 50 && v % 2 === 0 ? v / 2 : v <= 50 && v % 2 === 1 ? v * 2 : v
  );
}
