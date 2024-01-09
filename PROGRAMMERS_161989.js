function solution(n, m, section) {
  var answer = 0;
  let wall = Array.from({ length: n }, (_, idx) => idx + 1);

  wall.forEach((value) => {
    if (section.length == 0) return answer;
    if (section.includes(value)) {
      if (value + m > n) {
        for (let i = value + m; i > value; i--) {
          if (section.includes(i)) {
            section.splice(section.indexOf(i));
          }
        }
      } else {
        for (let i = value; i <= value + m - 1; i++) {
          if (section.includes(i)) {
            section.splice(section.indexOf(i), section.indexOf(i) + 1);
          }
        }
      }
      answer++;
    }
  });

  return answer;
}
