
function eatRiceCakeSoup() {
	var age = 1;
	return function () {
    return ++age; };
};

var happyNewYearsDay = eatRiceCakeSoup();

console.log(happyNewYearsDay());
console.log(happyNewYearsDay());
console.log(happyNewYearsDay());

// 1st try... -0-;;

//function eatRiceCakeSoup() {
//	var age = 1;
//	return ++age;
//};

//var happyNewYearsDay = eatRiceCakeSoup();

//console.log(happyNewYearsDay());
//console.log(happyNewYearsDay());
//console.log(happyNewYearsDay());

