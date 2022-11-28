loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

function loopyLighthouse(range, multiples, words) {

	let array = [];

	for (let i = range[0]; i <= range[1]; i++) {
		if ((i % multiples[0] !== 0) && (i % multiples[1] !== 0)) {
			array.push(i);
		} else if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
			array.push(words[0] + words[1]);
		} else if (i % multiples[0] === 0) {
			array.push(words[0]);
		} else if (i % multiples[1] === 0) {
			array.push(words[1]);
		}
	}

	console.log(array);
}