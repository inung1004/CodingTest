function solution(num_list, n) {
  const result = [];
  const length = num_list.length;

  for (let i = 0; i < length; i += n) {
    result.push(num_list.slice(i, i + n));
  }

  return result;
}
