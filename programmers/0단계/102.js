// 첫 번째로 나오는 음수
// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function solution(num_list) {
  return num_list.findIndex((v) => v < 0);
}
