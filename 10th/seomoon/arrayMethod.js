/* 콘솔에 복사 붙여넣기 하면 전체 결과를 한 번에 확인할 수 있습니다 */

console.log('------ 정적 메소드 ------');

// Array.from()

const arr1 = Array.from('hello');
console.log('from: ', arr1);

const arr2 = Array.from({ length: 2, 0: 'a', 1: 'b' });
console.log('from: ', arr2); 

const arr3 = Array.from([1, 2, 3], x => x + x);
console.log('from: ', arr3);


// Array.of()
const arr4 = Array.of(1);
console.log('of: ', arr4);

const arr5 = Array.of(1, 2, 3);
console.log('of: ', arr5);

const arr6 = Array.of('hello');
console.log('of: ', arr6);


console.log('------ 일반 메소드 ------');

// copyWintin()
const copy42 = [1, 3, 4, 2].copyWithin(0, 2, 4);
console.log('copyWithin: ', copy42);

// entries()
const entries = ['H', 'e', 'l', 'l', 'o'].entries();
console.log('entries: ', Array.from(entries));

// fill()
const arrayOfA = [0, 1, 2, 3, 4, 'b', 'c'].fill('A');
console.log('fill: ', arrayOfA);

// find()
let firstNegativeValue = [1, -2, -3].find(x => x < 0);
console.log('find: ', firstNegativeValue);

firstNegativeValue = [1, 2, 3].find(x => x < 0);
console.log('find: ', firstNegativeValue);

// findIndex()
let firstIndexOfnegative = [1, -2, -3].findIndex(x => x < 0);
console.log('findIndex: ', firstIndexOfnegative);

firstIndexOfnegative = [1, 2, 3].findIndex(x => x < 0);
console.log('findIndex: ', firstIndexOfnegative);

// keys()
const keys = Array.from(['a', 'b'].keys());
console.log('keys: ', keys);

// values()
const values = Array.from(['a', 'b'].values());
console.log('values: ', values);