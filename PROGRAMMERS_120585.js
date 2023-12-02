function solution(array, height) {
  var answer = 0;
  array.map((list) => {
    if (height < list) {
      answer++;
    }
  });
  return answer;
}
