// 직사각형 별찍기
// https://school.programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [a, b] = data.split(" ");

  console.log(("*".repeat(a) + "\n").repeat(b));
});
