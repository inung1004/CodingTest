function solution(my_string) {
  let uniqueChars = "";

  for (let i = 0; i < my_string.length; i++) {
    if (uniqueChars.indexOf(my_string[i]) === -1) {
      uniqueChars += my_string[i];
    }
  }

  return uniqueChars;
}
