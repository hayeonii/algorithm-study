// 문자열 계산하기

// string을 split 써서 나눈 후 배열에 담은 후 return
    // 연산이 길어진다면?
    // 홀수번째 index가 연산자
    const solution = (my_string) => {
        // const arr = my_string.split(' ').join('')
        // return arr[1] === "+" ? parseInt(arr[0]) + parseInt(arr[2]) : parseInt(arr[0]) - parseInt(arr[2])
        return eval(my_string)
    }