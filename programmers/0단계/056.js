// 외계행성의 나이

function solution(age) {
    const invert = ['a','b','c','d','e','f','g','h','i','j']
    return age.toString().split('').map(x => invert[x]).join('')
}

