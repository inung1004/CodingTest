function solution(n) {
  let compositeCount = 0;

  for (let num = 4; num <= n; num++) {
    let divisorCount = 0;

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        divisorCount++;

        if (i !== num / i) {
          divisorCount++;
        }
      }
    }

    if (divisorCount >= 3) {
      compositeCount++;
    }
  }

  return compositeCount;
}
