// 선언과 초기화
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 합니다.
{
	// const foo; // SyntaxError: Missing initializer in const declaration
	// console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
	const foo = 1;
	console.log(foo);
}
console.log(foo); // ReferenceError: foo is not defined 블록 레벨 스코프를 가집니다. 전역에서 사용할 수 없다.

// 재할당 금지
{
	const foo = 1;
	foo = 2; // TypeError: Assignment to constant variable.
}

// 상수
{
	const TAX_RATE = 0.1; // 세율을 의미하는 0.1은 변경할 수 없는 상수

	let preTaxPrice = 100;
	let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

	console.log(afterTaxPrice); // 110
}

// const 키워드와 객체
{
	// const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있습니다.
	// const 키워드는 재할당을 금지할 뿐 불변을 의미하지는 않습니다.
	// 객체가 변경되더라도 참조 값은 변경되지 않습니다.
	const person = {
		name: 'Kim',
	};
	person.name = 'Park';
	console.log(person);
}
