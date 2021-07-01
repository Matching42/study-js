// 문제점2

var x = 1;

if (true) {
	var x = 10; // 전역 변수 x를 중복 선언
}

console.log(x); // 10
/** */
var i = 10;

for (var i = 0; i < 5; i++) { // for문도 위와 동일
	console.log(i); // 0 1 2 3 4
}

console.log(i); // 5
