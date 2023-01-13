const judgeVegetable = (vegetables, metric) => {
  let max = 0;
  let veggie = "";
  for (let i = 0; i < vegetables.length; i++) {

    if(vegetables[i][metric] > max) {
      max = vegetables[i][metric];
      veggie = vegetables[i].submitter;
    };
  }
  console.log(veggie);
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'
judgeVegetable(vegetables, metric);