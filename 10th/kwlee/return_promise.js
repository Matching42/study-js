
// Promise객체에 파라미터로 넘겨준 익명함수는 즉각 실행!
var _promise = new Promise(function(resolve, reject) {
	
	// 여기에서는 무엇인가 수행 

	// 50프로 확률로 resolve 
    const time = +new Date()
    console.log(time)

	if (time%2 === 0) {
		resolve("Stuff worked!");  
	}
	else {
		reject(Error("It broke"));
	}
});

// 한번 생성된 프로미스객체의 상태는 바뀌지 않습니다.
_promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log("error = "+error.message)
})

_promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log("error = "+error.message)
}).finally(() => {
    console.log("settled - 결론이 난 상태입니다.")
})