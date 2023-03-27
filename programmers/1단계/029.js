// 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

function checkNum(number) {
  let count = 0;

  for (let i = 1; i <= number; i++) {
    if (!(number % i)) count++;
  }
  return count;
}

function solution2(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    checkNum(i) % 2 ? (answer -= i) : (answer += i);
  }

  return answer;
}
