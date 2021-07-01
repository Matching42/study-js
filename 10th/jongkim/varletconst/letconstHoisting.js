// var의 호이스팅
console.log(boo); // undefined
var boo = 5;

// const에서 호이스팅의 역할
const foo = 1; // 2
{
  console.log(foo); // 3, ReferenceError: Cannot access 'foo' before initialization
  const foo = 2; // 1
}

/**
 * 만약 블록안 1이 호이스팅되지 않았다면 참조 에러는 발생하지 않고
 * 전역에 선언한 2가 출력될 것입니다.
 * 1의 호이스팅 때문에 3은 1을 참조하게 됩니다. 그리고 1번 변수는 TDZ 임시적 사각지대여서 참조 에러가 발생합니다.
 * 만약 호이스팅이 없다면 2를 참조하고 에러는 발생하지 않을 것입니다.
 */
