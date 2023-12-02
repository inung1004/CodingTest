function solution(n) {
  n = n.toString();
  let answer = n.split("").reduce((acc, curr) => acc + Number(curr), 0);
  return answer;
}
