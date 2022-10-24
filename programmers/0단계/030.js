// 아이스 아메리카노

// money = 머쓱이가 가지고 있는 돈
// 1. 먹을 수 있는 아메리카노의 잔 수 = (머쓱이가 가지고 있는 돈 / 5500)을 내림
// 2. 머쓱이가 가지고 있는 돈 - 아메리카노 잔 수 * 5500

const solution = (money) => {
    const coffee = Math.floor(money / 5500)
    const changes = money % 5500
    return [coffee, changes]
}