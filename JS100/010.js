// const n = 5;
const n = prompt('숫자를 입력하세요');
let result = "";

for (let i=1; i<=n; i++) {
    let star = "";
    for (let j=1; j<=n-i; j++){
        star += " ";
    }
    for (let k=1; k <= 2*i-1; k++){
        star += "*";
    }
    result += star + "\n";
}

console.log(result);