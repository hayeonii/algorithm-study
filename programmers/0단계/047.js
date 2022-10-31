// 숨어있는 숫자의 덧셈(1)

function solution(my_string) {
    return [...my_string].map(data => parseInt(data)).filter(data => isNaN(data) === false).reduce((a,b) => a+b, 0)
}