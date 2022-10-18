const solution = (array, height) => {
    return array.filter(result => result > height).length
}