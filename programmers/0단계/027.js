// 짝수 홀수 개수

const solution = (num_list) => {
    const evenNum = num_list.filter(x => (x % 2) === 0).length
    return [evenNum, num_list.length-evenNum]
}