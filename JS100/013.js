// 문제13 : 몇 번째 행성인가요?

const planet = [
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성",
  "해왕성",
];

const n = prompt("몇 번째 행성인가요?");
console.log(planet[n - 1]);
