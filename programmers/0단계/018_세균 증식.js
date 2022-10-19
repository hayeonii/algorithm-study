const solution = (n, t) => {
    for (let i = 0; i < t; i++){
        n *= 2
}
    return n
}

// 이게 왜 되는 거지 . . .
// 문제를 잘못 이해하고 있었음 ㅋㅋㅋ 누적합을 받아와야 하는 줄 알았는데 n의 두배씩 반복문 돌리는 거였음 ㅜ

const solution2 = (n, t) => {
    return (2 ** t) * n;
}
