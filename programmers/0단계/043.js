// 순서쌍의 개수

const solution = (n) => {
    const result = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            result.push([i, n/i])
        }
    }
    return result.length
}