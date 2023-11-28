function solution(n, lost, reserve) {
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < lost.length; i++) {
    answer[lost[i] - 1]--;
  }
  for (let i = 0; i < reserve.length; i++) {
    answer[reserve[i] - 1]++;
  }

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === 0) {
      if (i > 0 && answer[i - 1] === 2) {
        answer[i]++;
        answer[i - 1]--;
      } else if (i < n - 1 && answer[i + 1] === 2) {
        answer[i]++;
        answer[i + 1]--;
      }
    }
  }
  console.log(answer);

  const count = answer.filter((x) => x > 0).length;

  return count;
}
