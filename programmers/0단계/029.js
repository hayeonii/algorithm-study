// 최대값 만들기 (1)
const solution = (numbers) => {
    const newArr = numbers.sort((a,b) => a-b)
    return newArr[newArr.length-1] * newArr[newArr.length-2]
}

const solution2 = (numbers) => {
    numbers.sort((a,b)=>b-a);
    return numbers[0]*numbers[1];
}