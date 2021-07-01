// 변수 중복 선언 금지
{
  var foo = 123;
  var foo = 456;
  let bar = 123;
  let bar = 456; // SyntaxError: Identifier 'bar' has already been declared
}

// 블록 레벨 스코프
{
  let foo = 1;
  {
    let foo = 2;
    let bar = 3;
  }
  console.log(foo); // 1
  console.log(bar); // ReferenceError: bar is not defined
}

// 변수 호이스팅
{
  // let 키워드는 런타임 이전 선언 단계가 실행되지만 초기화는 하지 않습니다.
  // 스코프 시작 지점부터 초기화 단계 시작 지점(선언)까지 변수를 참조할 수 없습니다.
  // 이런 구간을 임시적 사각지대 TDZ(Temporal Dead Zone)라고 부릅니다.
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization

  let foo;
  console.log(foo);

  foo = 1;
  console.log(foo);
}

// 전역 객체와 let
// var 키워드로 선언한 전역 변수와 전역 함수, 그리고 선언하지 않은 변수에 값을 할당한 암무적 전역은 전역 객체 window의 프로퍼티가 됩니다.
var x = 1; // 전역 변수
y = 2; // 암묵적 전역
function boo() {} // 전역 함수
{
  console.log(window.x); // 1
  console.log(x); // 1
  console.log(window.y); // 2
  console.log(y); // 2
  console.log(window.boo); // f boo() {}
  console.log(boo); // f boo() {}
}
// let, const 키워드로 선언한 전역 변수는 전역 객체 window의 프로퍼티가 아닙니다.
// 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경 레코드)에 존재하게 됩니다.
let z = 1;
{
  console.log(window.z); // undefined
  console.log(z); // 1
}
