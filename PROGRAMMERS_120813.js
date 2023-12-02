function solution(n) {
  var answer = [];
  var cnt = n;
  while (cnt != 0) {
    if (cnt % 2 != 0) {
      answer.push(cnt);
    }
    cnt--;
  }
  answer.sort((a, b) => a - b);
  return answer;
}
