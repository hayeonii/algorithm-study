// 중복된 문자 제거

function solution(my_string) {
    // set 연산자는 이터러블 객체를 반환하기 때문에 스프레드 문법을 쓸 수 있다
    const arr = new Set([...my_string])
    return [...arr].join('')
}