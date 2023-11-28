function solution(arr) {
  var answer = [];
  let min = arr[0];
  if (!arr.length || (arr.length === 1 && arr[0] === 10)) {
    return [-1];
  }
  arr.map((number) => {
    if (number < min) {
      min = number;
    }
  });
  answer = arr.filter((element) => element !== min);
  return answer;
}
