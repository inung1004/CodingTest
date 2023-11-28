function solution(numbers) {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let cnt = 0;

  numbers.map((v) => {
    arr.splice(arr.indexOf(v), 1);
    console.log(arr);
  });
  arr.map((v) => {
    cnt += v;
  });

  return cnt;
}
