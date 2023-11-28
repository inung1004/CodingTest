function solution(num) {
  let answer = num;
  let cnt = 0;

  while (1) {
    if (cnt >= 500 || answer === 1) break;
    if (answer % 2 === 0) {
      answer = answer / 2;
    } else if (answer % 2 !== 0) {
      answer = answer * 3 + 1;
    }
    cnt++;
  }

  return cnt >= 500 ? -1 : cnt;
}
