const solution = (age) => {
    return 2022 - age +1;
}

// 만약 년도가 주어지지 않았다면?
const solution2 = (age) => {
    const today = new Date();
    const year = today.getFullYear();
    return year - age +1
}

const solution3 = (age) => {
    return new Date().getFullYear() - age + 1;
}