function solution(n) {
  const str = String(n);
  const mapfn = (arg) => Number(arg);
  const newArr = Array.from(str, mapfn);
  return newArr.reverse();
}
