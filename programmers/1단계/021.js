// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  let result = 0;
  for (let i = 0; i < 10; i++) {
    // includes 때문에 계속 numbers의 인덱스 0부터 찾기 때문에 비효율 적일 수 있음
    if (!numbers.includes(i)) result += i;
  }
  return result;
}

function solution2(numbers) {
  const allSum = (9 * 10) / 2;
  return allSum - numbers.reduce((a, b) => a + b, 0);
}
