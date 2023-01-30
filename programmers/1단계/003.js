// 약수의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

function solutionA(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }

  return arr.reduce((a, b) => a + b, 0);
}

function solutionB(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum;
}
