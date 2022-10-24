// n의 배수 고르기

// filter 사용해서 n으로 나눈 나머지가 0인 것만 남기기

const solution = (n, numlist) => {
    return numlist.filter(num => num % n === 0)
}