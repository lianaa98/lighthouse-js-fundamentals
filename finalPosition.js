const finalPosition = function(moves) {
  let currentPosition = [0, 0];
  for (let i of moves) {
    if(i === 'north') {
      currentPosition[1] += 1;
    } else if(i === 'east') {
      currentPosition[0] += 1;
    } else if(i === 'south') {
      currentPosition[1] -= 1;
    } else if(i === 'west') {
      currentPosition[0] -= 1;
    }
  }
  return currentPosition;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

console.log(finalPosition(moves));