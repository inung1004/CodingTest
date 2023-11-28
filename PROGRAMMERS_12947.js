function solution(x) {
  let cnt = 0;
  x.toString()
    .split("")
    .map((v) => (cnt = cnt + Number(v)));

  return Number.isInteger(x / cnt);
}
