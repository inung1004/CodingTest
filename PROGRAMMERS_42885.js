function solution(people, limit) {
  let 구명보트_갯수 = 0;
  people.sort((a, b) => b - a); //내림차순
  for (let i = 0, j = people.length - 1; i <= j; i++) {
    if (people[i] + people[j] <= limit) {
      j--;
    }
    구명보트_갯수++;
  }
  return 구명보트_갯수;
}
