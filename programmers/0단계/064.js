// kė ę°ė

function solution(i, j, k) {
    let arr = []
    for (let x = i; x <=j; x++){
        arr.push(x)
    }
    return arr.join('').split('').filter(item => item === k.toString()).length
}