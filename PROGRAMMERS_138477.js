function solution(k, score) {
  let 명예의_전당 = [score[0]];
  let 발표_점수 = [score[0]];

  for (let i = 1; i < score.length; i++) {
    if (명예의_전당[명예의_전당.length - 1] < score[i]) {
      if (명예의_전당.length === k) {
        명예의_전당[명예의_전당.length - 1] = score[i];
      } else {
        명예의_전당.push(score[i]);
      }
    } else if (명예의_전당.length < k) {
      명예의_전당.push(score[i]);
    }
    명예의_전당.sort((a, b) => b - a);
    발표_점수.push(명예의_전당[명예의_전당.length - 1]);
  }
  return 발표_점수;
}
