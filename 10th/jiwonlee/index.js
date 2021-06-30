const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7];

const foo = () => {
	const sum = arr2.map((v) => v + v);
	console.log(sum);
};

foo();
