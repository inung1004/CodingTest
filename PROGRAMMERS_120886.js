function solution(before, after) {
  const beforeMap = new Map();

  for (let i = 0; i < before.length; i++) {
    const char = before[i];
    if (beforeMap.has(char)) {
      beforeMap.set(char, beforeMap.get(char) + 1);
    } else {
      beforeMap.set(char, 1);
    }
  }

  for (let j = 0; j < after.length; j++) {
    const char = after[j];
    if (!beforeMap.has(char)) {
      return 0;
    }

    const count = beforeMap.get(char);

    if (count === 1) {
      beforeMap.delete(char);
    } else {
      beforeMap.set(char, count - 1);
    }
  }

  return beforeMap.size === 0 ? 1 : 0;
}
