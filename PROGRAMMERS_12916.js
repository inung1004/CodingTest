function solution(s) {
  let p_cnt = 0;
  let y_cnt = 0;

  s.split("").map((v) => {
    if (v === "p" || v === "P") {
      p_cnt++;
    } else if (v === "y" || v === "Y") {
      y_cnt++;
    }
  });

  return p_cnt === y_cnt;
}
