function solution(sides) {
  const [a, b, c] = sides.sort((x, y) => x - y);

  if (a + b > c) {
    return 1;
  } else {
    return 2;
  }
}
