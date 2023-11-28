function solution(s) {
  var arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      arr.push(s[i]);
    } else if (s[i] == ")") {
      if (arr[arr.length - 1] == "(") {
        arr.pop();
      } else if (arr.length == 0) {
        return False;
      }
    }
  }
  return arr.length == 0;
}
