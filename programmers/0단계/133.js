// 배열의 원소만큼 추가하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181861

function solution(arr) {
  let X = [];

  arr.forEach((v) => {
    for (let i = 0; i < v; i++) {
      X.push(v);
    }
  });

  return X;
}
