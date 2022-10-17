const solution = (n) => {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0){
            result += i;
        }       
    }
    return result;
}

const solution2 = (n) => {
    let result = 0;
    for (let i = 0; i <= n; i+=2) {
        result += i    
    }
    return result;
}