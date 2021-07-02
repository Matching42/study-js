//Promise를 반환하는 함수 선언
let _promise = function (param = 0) {

	return new Promise(function (resolve, reject) {

		// 비동기를 표현하기 위해 setTimeout 함수를 사용 
		setTimeout(function () {

			if (param) {

				// 해결됨 
				resolve("해결 완료");
			}

			else if (param === 0) {

				// 실패 
				resolve("defalut param 전달");
			}
            else{
            reject(Error("실패!!"));
            }

		}, 3000);
	});
};


_promise(true)
	.then(JSON.parse)
	.catch(function () { 
		console.log('체이닝 중간에 에러가!!');
	})
	.then(function (text) {
		console.log(text);
	});