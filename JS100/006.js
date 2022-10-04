// 다음은 자바스크립트 문법 중에서 False로 취급하는 것들 입니다.
// 앗, False로 취급하지 않는 것이 하나 있네요! True를 찾아주세요.

// 1)  NaN
// 2)  1
// 3)  ""
// 4)  0
// 5)  undefined

// 정답 : 2번 (1)

console.log(Boolean(NaN));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));

// 정답
// 참고: false는 불리언값이고
// NaN 포함 개노답 삼형제(NaN,null,undefined)는 falsy한 값입니다
// falsy한 값이란? false한 성질을 가졌지만 논리적으로 false는 아님