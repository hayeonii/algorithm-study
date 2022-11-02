// 가위바위보

/*
    가위 2 - 바위 0
    바위 0 - 보 5
    보 5 - 가위 2
*/

function solution(rsp) {
    const win = { 2:0 , 0:5, 5:2 };

    return [...rsp].map(key => win[key]).join('')
}
