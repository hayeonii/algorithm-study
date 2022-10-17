const solution = (array, n) => {
    let result = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] === n){
            result++
        }
    }
    return result;
}

const solution2 = (array,n) => {
    let result = array.filter(item => item === n).length;
    return result;
}