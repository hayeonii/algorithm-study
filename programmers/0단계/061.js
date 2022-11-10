// 진료순서 정하기

function solution(emergency) {
    // 내림차순으로 정렬됨
    // slice 쓴 이유: 원본 배열 손대지 않기 위해
    const arr = emergency.slice().sort((a,b) => b-a)
    return emergency.map(el => arr.indexOf(el) + 1)
}