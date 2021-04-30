var screen = document.querySelector('#screen');
var start_time;
var end_time;
var record = [];
var timeout;
var last_time;
var average_time = 0;


function average(array) {
	var sum = 0.0;

	for (var i = 0; i < array.length; i++)
	sum += array[i];

	return sum / array.length;
}



document.addEventListener('keydown', function(event) {
	let keyName = event.key;
	let event_sub = new Event("keydown");


	// 사용자가 Ctrl 키를 놓으면 키가 더 이상 활성화되지 않습니다.
	// 따라서 event.ctrlKey는 false입니다.
	if (keyName === 'f') {
		if (screen.classList.contains('waiting')) { // 현재 대기 상태인지 파악
			screen.classList.remove('waiting');
			screen.classList.add('ready');
			screen.textContent = '초록색이 되면 입력하세요';
			timeout = setTimeout(function(event) {
			start_time = new Date();
			// screen.classList.remove('ready');
			// screen.classList.add('now');
			// screen.textContent = '입력하세요!';

			if (!start_time) { // 부정 클릭
				clearTimeout(timeout);
				screen.classList.remove('ready');
				screen.classList.add('waiting');
				screen.textContent = '너무 빨라요!';
				} else {
				screen.classList.remove('ready');
				screen.classList.add('now');
				screen.textContent = '입력하세요!';
				}
			console.log(screen.classList);
			}, Math.floor(Math.random() * 1000) + 2000); // 2000 ~ 3000 사이 수
		} else if (screen.classList.contains('ready')) { // 준비 상태
			if (!start_time) { // 부정 클릭
			clearTimeout(timeout);
			screen.classList.remove('ready');
			screen.classList.add('waiting');
			screen.textContent = '너무 빨라요!';
			} else {
			screen.classList.remove('ready');
			screen.classList.add('now');
			screen.textContent = '입력하세요!';
			}
		} else if (screen.classList.contains('now')) { // 시작 상태
			end_time = new Date();
			console.log('반응속도', end_time - start_time, 'ms');
			record.push(end_time - start_time);
			document.getElementById("write").innerHTML = "반응속도 = "+ String(end_time-start_time) + "ms";
			start_time = null;
			end_time = null;
			screen.classList.remove('now');
			screen.classList.add('waiting');
			screen.textContent = '입력해서 시작하세요';
			console.log(record)
			if (record.length > 4) {
				screen.classList.remove('waiting');
				screen.classList.remove('ready');
				screen.classList.remove('now');
				screen.classList.add('end');
				screen.textContent = '반응속도 테스트가 종료되었습니다.';
				last_time = "반응속도 = " + String(record[4]) + "ms" + "<br>";
				average_time = average(record);
				last_average_time = "평균 반응속도 = " + String(average_time) + "ms";
				document.getElementById("write").innerHTML = last_time + last_average_time;
			}
		}

	}
}, true);


