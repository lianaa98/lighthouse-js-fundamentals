const chooseStations = function(stations) {
  const finalArray = [];

  for (let i of stations) {
    if(i[1] >= 20) {
      if((i[2] === 'school') || (i[2] === 'community centre')) {
        finalArray.push(i[0]);
      }
    }
  }
  console.log(finalArray); 
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

chooseStations(stations);