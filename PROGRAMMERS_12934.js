function solution(n) {
  let answer = -1;
  let n_root = Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : 0;
  if (n_root !== 0) answer = (n_root + 1) * (n_root + 1);
  return answer;
}
