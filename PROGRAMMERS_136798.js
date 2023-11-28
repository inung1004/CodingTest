function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let cnt = 0;
    for (let j = 1; j * j <= i; j++) {
      if (i % j == 0) {
        cnt += j * j == i ? 1 : 2;
      }
    }
    answer += cnt > limit ? power : cnt;
  }
  return answer;
}
