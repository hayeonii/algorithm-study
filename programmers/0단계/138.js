// 배열 비교하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return arr1.length > arr2.length ? 1 : -1;
  } else {
    return arr1.reduce((a, c) => a + c, 0) > arr2.reduce((a, c) => a + c, 0)
      ? 1
      : arr1.reduce((a, c) => a + c, 0) === arr2.reduce((a, c) => a + c, 0)
      ? 0
      : -1;
  }
}
