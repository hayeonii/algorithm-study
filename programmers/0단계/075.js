// 잘라서 배열로 저장하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120913

function solution(my_str, n) {
  let arr = [...my_str];
  let result = [];

  while (arr.length > 0) {
    result.push(arr.splice(0, n).join(""));
  }

  return result;
}

// splice는 원본 배열을 변형시킨다는 점을 활용
