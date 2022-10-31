// 문자열 정렬하기 (1)

function solution(my_string) {
    return [...my_string].filter(data => !isNaN(parseInt(data)) === true).map(Number).sort()
}