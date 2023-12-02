function solution(rsp) {
  let rspWinner = {
    2: 0,
    0: 5,
    5: 2,
  };

  var answer = rsp
    .split("")
    .map((v) => rspWinner[v])
    .join("");
  return answer;
}
