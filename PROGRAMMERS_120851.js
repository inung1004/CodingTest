function solution(my_string) {
  var answer = 0;
  let num = my_string.replace(/[^0-9]/g, "");
  for (let i = 0; i < num.length; i++) {
    answer = answer + Number(num[i]);
  }
  return answer;
}
