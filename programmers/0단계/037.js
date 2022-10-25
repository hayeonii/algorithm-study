// 짝수는 싫어요

const solution = (n) => {
    let num = []
    for (let i = 0 ; i <= n; i++){
        if (i%2 ===1){
            num.push(i)
        }
    }
    return num
}
