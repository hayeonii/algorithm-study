// 7의 개수

function solution(array) {
    return array.join('').split('').filter(num => num === '7').length
}