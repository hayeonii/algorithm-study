// 가장 큰 수 찾기

const solution = (array) => {
    const num = Math.max(...array)
    return [num, array.indexOf(num)]
}