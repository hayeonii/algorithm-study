// 로그인 성공?

function solution(id_pw, db) {
  db = db.filter((v) => v[0] === id_pw[0]);

  if (!db.length) return "fail";

  for (i of db) {
    if (i[1] === id_pw[1]) return "login";
  }

  return "wrong pw";
}
