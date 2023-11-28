function solution(participant, completion) {
  let nameObj = {};

  participant.forEach((name) => {
    nameObj[name] = (nameObj[name] || 0) + 1;
    console.log(nameObj);
  });

  completion.forEach((name) => {
    if (nameObj[name]) nameObj[name]--;
    if (nameObj[name] === 0) delete nameObj[name];
  });

  return Object.keys(nameObj)[0];
}
