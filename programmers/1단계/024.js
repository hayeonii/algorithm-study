// 내적
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    newArr.push(a[i] * b[i]);
  }

  return newArr.reduce((a, b) => a + b, 0);
}

function solution2(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// reduce의 인자에는 누산값, 현재값, 인덱스, 원본배열 4가지 인자를 가질 수 있다
