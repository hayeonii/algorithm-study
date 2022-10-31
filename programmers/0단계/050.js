// 숫자 찾기

function solution(num, k) {
    const arr = num.toString().split('').map(Number)
    return arr.includes(k) ? arr.indexOf(k)+1 : -1
}