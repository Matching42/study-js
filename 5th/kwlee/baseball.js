var num = [7,4,2]
function numberBaseball(num) {
	//여기에 작성하세요

	function game(list) {
		var strike = 0;
		var ball = 0
		var res = "";

		for (var i=0; i<3; i++){
			if (list[i] === num[i]){
				strike++;
			}
			else if (num.includes(list[i])){
					ball++;
			}
		}
		if (strike === 0 && ball ===0){
			res = "OUT";
		}
		else{
			res = strike+"S "+ ball +"B";
		}
		if (strike === 3){
			res += " \n WIN!!";
		}
		return res;
	}(num);
	return game;
  }

  var baseballGame = numberBaseball(num);


  // ex : 생성된 랜덤 숫자는 7 4 2
  console.log(baseballGame([8,3,1])); // OUT
  console.log(baseballGame([3,2,1])); // 0S 1B
  console.log(baseballGame([3,4,1])); // 1S 0B
  console.log(baseballGame([2,4,7])); // 1S 2B
  console.log(baseballGame([7,4,2])); // 3S 0B \n WIN!!
