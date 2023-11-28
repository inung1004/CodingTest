function solution(absolutes, signs) {
  let answer = 0;
  signs.map((value, index) => {
    if (value) {
      answer = answer + absolutes[index];
    } else if (!value) {
      answer = answer + absolutes[index] * -1;
    }
  });
  return answer;
}
