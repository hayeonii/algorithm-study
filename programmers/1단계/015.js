// 콜라츠 추측
// https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  let result = 0;
  while (result <= 500) {
    if (num === 1) return result;
    num % 2 ? (num = num * 3 + 1) : (num = num / 2);
    result++;
  }
  return -1;
}
