// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

// solution 1
// 테스트케이스 1번의 속도가 너무 느리다
function solution(arr) {
  const min = Math.min(...arr);
  const result = arr.filter((v) => v !== min);
  return result.length > 0 ? result : [-1];
}

// solution 2
function solution(arr) {
  const index = arr.indexOf(Math.min(...arr));
  arr.splice(index, 1);
  return arr.length === 0 ? [-1] : arr;
}
