function solution(phone_number) {
  let answer = phone_number
    .split("")
    .reverse()
    .map((v, i) => {
      return i > 3 ? "*" : v;
    })
    .reverse()
    .join("");
  return answer;
}
