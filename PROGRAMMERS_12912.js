function solution(a, b) {
  let answer = 0;
  let max_num = a > b ? a : b;
  let min_num = a > b ? b : a;

  for (let i = min_num; i <= max_num; i++) {
    answer = answer + i;
  }
  return answer;
}
