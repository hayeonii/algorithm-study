// 문자열 정렬하기 (2)

function solution(my_string) {
    const str = my_string.toLowerCase()
    return [...str].sort().join('')
}