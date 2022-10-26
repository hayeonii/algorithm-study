// 개미 군단

const solution = (hp) => {
    const king = Math.floor(hp / 5)
    const middle = Math.floor(hp % 5 / 3)
    const small = Math.floor(hp % 5 % 3 / 1)

    return king + middle + small
}