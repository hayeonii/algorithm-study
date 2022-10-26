// 문자 반복 출력하기

const solution = (my_string, n) => {
    return [...my_string].map(str => str.repeat(n)).join('')
}