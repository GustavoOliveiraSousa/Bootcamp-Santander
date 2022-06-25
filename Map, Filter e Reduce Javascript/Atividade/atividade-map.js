// //SEM THIS
// const array = [10, 10.75, 10.5, 10.25, 10.125];

// const multiplicado =  array.map((item) => item * 2);

// console.log(multiplicado);
// //---------------------------------------------

//COM THIS
const orange = {
	price: 2,
};

const apple = {
	price: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.price;
	}, apple);
}

console.log(mapArray());