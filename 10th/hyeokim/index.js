/*
Nullish coalescing operator
: 널 병합 연산자 (??) 는 왼쪽 피연산자가 null 또는 undefined일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.
:

Enhanced Object Literal
1. 속성과 값이 같으면 축약 가능
2. 속성에 함수를 정의할 때 function 예약어 생략

Optional Chaining
1. 존재하지 않을 수 있는 매서드를 호출할 때
2. optional chaining 연산자를 속성에 표현식으로 접근할 때 대괄호 표기법을 사용
3. Optional chaining으로 배열 항목에 접근하기
*/

let language = 'javaScript';
let age = 16;
let food;
let num = 0;
let friends = ['keyboard', 'mouse', 'coding'];
let dogName = "Denny";


const hyeokim = {
  // Nullish coalescing operator
  favoriteFood: food ?? "All",
  favoriteNumber: num ?? "All",
  // favoriteNumber: num || "All",

  // Enhanced Object Literal
  age,
  introduce() {
    console.log("안녕하세요! hyeokim 입니다.");
  },

  // Optional Chaining
  friends,
  dogName,
  callDog() {
    console.log(`${this.dogName}~ 이리온`);
  }
}

// const hyeokimCat = hyeokim?.catName ?? "No cat";
// const hyeokimCat = hyeokim.callCat?.() ?? "No cat";

console.log(hyeokim.favoriteFood);
console.log(hyeokim.favoriteNumber);

console.log(hyeokim.age);
console.log(hyeokim.introduce());

console.log(hyeokim.friends?.[4]);
console.log(hyeokim.callDog());
console.log(hyeokim.callCat?.());
console.log(hyeokimCat);