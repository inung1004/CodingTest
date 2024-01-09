function solution(bandage, health, attacks) {
  let attack_times = [];
  let bonus = 0;
  let max = health;

  //공격시간 담아놓은 배열
  attacks.forEach((attack) => {
    attack_times.push(attack[0]);
  });

  //게임 시작
  for (let time = 1; time <= attacks[attacks.length - 1][0]; time++) {
    //체력이 0보다 작거나 0이면 죽은 거임 return -1;
    if (health <= 0) {
      return -1;
    }
    //공격이 있는지 확인
    if (attack_times.includes(time)) {
      //있으면 체력에서 해당 공격의 피해량만큼 감소
      health = health - attacks[attack_times.indexOf(time)][1];
      //공격을 받았으므로 bonus 초기화
      bonus = 0;
    }
    //공격 없으면
    else {
      //연속 스택 하나 쌓고
      bonus++;
      //연속 횟수 추가 회복량 조건과 같으면
      if (bonus === bandage[0]) {
        //추가 회복량 획득
        health = health + bandage[2];
        //bonus 초기화
        bonus = 0;
      }
      //회복
      health = health + bandage[1];
      //만약 max를 넘어가면 max 초과로는 체력을 못 갖기 때문에 max로 제한.
      if (health > max) {
        health = max;
      }
    }
  }
  //마지막으로 체력 확인
  if (health <= 0) return -1;
  return health;
}
