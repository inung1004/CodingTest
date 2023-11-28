const changeBoard = (board, index) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][index] !== 0) {
      const doll = board[i][index];
      board[i][index] = 0;
      return doll;
    }
  }
};

function solution(board, moves) {
  var answer = 0;
  let basket = [];

  moves.map((index) => {
    const doll = changeBoard(board, index - 1);
    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return answer;
}
