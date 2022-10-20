// 삼각형의 완성 조건
const solution = (sides) => {
    const max = Math.max(...sides)
    return max < sides.reduce((a,b) => a + b, 0) - max ? 1 : 2
}