const solution = (n) => {
    return (n % 7) === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1
}

const solution2 = (n) => {
    return Math.ceil(n / 7);
}

// Math.ceil : 올림
// Math.floor : 내림
// Math.around : 반올림