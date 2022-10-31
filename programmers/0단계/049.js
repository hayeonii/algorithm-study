// 369게임

function solution(order) {
    const arr = order.toString().split('')
    let clap = 0
    for (i of arr) {
        if (i != 0 && i % 3 === 0) {
            clap ++
        }
    }
    return clap
}

function solution2(order) {
    return order.toString().split('').filter(n => ['3', '6', '9'].includes(n)).length;
}
