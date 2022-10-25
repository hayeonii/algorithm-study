// 중앙값 구하기

const solution = (array) => {
    const newArr = array.sort((a,b) => a-b)
    return newArr[Math.floor(newArr.length / 2)]
}