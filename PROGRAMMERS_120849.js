function solution(my_string) {
  var answer = my_string.replace(/a/g, "");
  answer = answer.replace(/e/g, "");
  answer = answer.replace(/i/g, "");
  answer = answer.replace(/o/g, "");
  answer = answer.replace(/u/g, "");
  return answer;
}
