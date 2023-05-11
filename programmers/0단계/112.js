// 글자 이어 붙여 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string, index_list) {
  return index_list.map((v) => [...my_string][v]).join("");
}
