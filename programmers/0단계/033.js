// 대문자와 소문자

// string을 대문자로 변환한 것과 같다면?
    // 대문자이므로 소문자로 변환하자!
    // 아니라면 대문자로 변환하자!
const solution = (my_string) => {
    return [...my_string].map(str => str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()).join('')
}