const solution = (my_string) => {
    return my_string.split('').reverse().join('')
}

const solution2 = (my_string) => {
    return [...my_string].reverse().join('')
}