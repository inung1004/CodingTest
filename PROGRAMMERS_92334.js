function solution(id_list, report, k) {
  const 중복이_없는_신고목록 = [...new Set(report)].map((r) => r.split(" "));
  const map_report = new Map();
  const map_check = new Map();

  for (let r of 중복이_없는_신고목록) {
    map_check.set(r[1], map_check.get(r[1]) + 1 || 1);
  }

  for (let r of 중복이_없는_신고목록) {
    if (map_check.get(r[1]) >= k) {
      map_report.set(r[0], map_report.get(r[0]) + 1 || 1);
    }
  }

  return id_list.map((id) => map_report.get(id) || 0);
}
