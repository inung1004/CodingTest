function solution(array) {
  var answer = 0;
  array
    .join("")
    .split("")
    .forEach((v) => {
      if (v == "7") answer++;
    });
  return answer;
}
