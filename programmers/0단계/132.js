// 홀수 vs 짝수
// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
  const odd = num_list
    .filter((_, i) => (i + 1) % 2 === 1)
    .reduce((a, c) => a + c, 0);
  const even = num_list
    .filter((_, i) => (i + 1) % 2 === 0)
    .reduce((a, c) => a + c, 0);

  return odd === even ? odd : Math.max(odd, even);
}
