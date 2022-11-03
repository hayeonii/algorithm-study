// 배열 회전시키기

function solution(numbers, direction) {
    let result = ''
    if (direction === "right") {
        result.push(numbers.splice(-1).concat(numbers))
    } else if (direction === "left") {
        result.push(numbers.splice(1, numbers.length-1).concat(numbers))
    }
    return result[0]
}