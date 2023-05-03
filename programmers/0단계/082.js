// 이어 붙인 수
// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  const 홀수 = num_list.filter((v) => v % 2 === 1).join("");
  const 짝수 = num_list.filter((v) => v % 2 === 0).join("");

  return parseInt(홀수) + parseInt(짝수);
}
