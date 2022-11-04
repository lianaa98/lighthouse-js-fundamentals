const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

// Write a for loop that prints out the contents of ingredients:

for(let num = 0; num < ingredients.length; num++) {
  console.log(ingredients[num]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

for(let a = (ingredients.length - 1); a >= 0; a--) {
  console.log(ingredients[a]);
}
