const 큰수의인덱스구하는함수 = (계단점수) => {
  let maxIndex = 0;
  계단점수.forEach((점수, i) => {
    if (계단점수[maxIndex] < 점수) maxIndex = i;
  });
  return maxIndex;
};

const 큰수의인덱스가연속인지확인하는함수 = (큰수의인덱스배열, maxIndex) => {
  if (
    (큰수의인덱스배열.includes(maxIndex - 1) &&
      큰수의인덱스배열.includes(maxIndex - 2)) ||
    (큰수의인덱스배열.includes(maxIndex + 1) &&
      큰수의인덱스배열.includes(maxIndex + 2)) ||
    (큰수의인덱스배열.includes(maxIndex - 1) &&
      큰수의인덱스배열.includes(maxIndex + 1))
  ) {
    return false;
  } else {
    return true;
  }
};

const solution = (n, score) => {
  let 계단점수 = score;
  let 합계 = 계단점수[n - 1];
  let 큰수의인덱스배열 = [n - 2];
  계단점수.pop();
  while (true) {
    if (큰수의인덱스배열.length === n - 2) break;
    let maxIndex = 큰수의인덱스구하는함수(계단점수);
    if (큰수의인덱스가연속인지확인하는함수(큰수의인덱스배열, maxIndex))
      큰수의인덱스배열.push(maxIndex);
    else break; // 연속하지 않을 경우 루프 종료
  }
  큰수의인덱스배열.forEach((v) => {
    합계 = 합계 + 계단점수[v];
  });

  return 합계;
};

console.log(solution(6, [10, 20, 15, 25, 10, 20]));
