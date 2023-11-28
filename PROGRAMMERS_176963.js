function solution(name, yearning, photo) {
  var answer = [];
  photo.map((people, index) => {
    let score = 0;
    people.map((person) => {
      if (name.indexOf(person) != -1) {
        score += yearning[name.indexOf(person)];
      }
    });
    answer.push(score);
  });
  return answer;
}
