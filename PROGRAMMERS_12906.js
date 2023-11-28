function solution(arr) {
  var answer = arr.filter((v, i) => v != arr[i - 1]);
  return answer;
}
