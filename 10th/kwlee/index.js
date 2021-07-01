//Promise 선언
var kwleePromise = function (param = 0) {

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
const array = [true, 0, false]
for (let i = 0; i<3; i++){
    kwleePromise(array[i])
    .then(function (text) {
        // 성공시
        console.log(text+'\n');
    }, function (error) {
        // 실패시 
        console.error(error);
    });
}