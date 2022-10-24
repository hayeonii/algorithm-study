// 특정 문자 제거하기

// 스프레드 문법으로 my_string 펼쳐 배열로 반환 후, letter와 같지 않은 것만 필터링해 join

const solution = (my_string, letter) => {
    return [...my_string].filter(item => item !== letter).join('')
}

const solution2 = (my_string, letter) => {
    return my_string.split(letter).join('')
}