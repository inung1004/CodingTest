function solution(arr, divisor) {
  let answer = [];
  arr.map((v) => {
    if (v % divisor === 0) answer.push(v);
  });
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
