console.log('------ Set ------');

let studySet = new Set();

studySet.add('jiwonlee');
studySet.add('jongkim');
studySet.add('jongkim');
studySet.add('seomoon');

studySet.forEach((value) => console.log(value));

if (!studySet.has('jiwonlee')) {
    studySet.add('jiwonlee');
    console.log('jiwonlee');
}
if (!studySet.has('snpark')) {
	studySet.add('snpark');
    console.log('snpark');
}
if (!studySet.has('kwlee')) {
	studySet.add('kwlee');
    console.log('kwlee');
}
if (!studySet.has('hyeokim')) {
	studySet.add('hyeokim');
    console.log('hyeokim');
}
if (!studySet.has('seomoon')) {
	studySet.add('seomoon');
    console.log('seomoon');
}

studySet.delete('seomoon');
studySet.size;

studySet.clear();
studySet.size;

console.log('------ WeakSet ------');

let data1 = [1, 2, 3, 4];
let data2 = [5, 6, 7, 8];

let ws = new WeakSet();
let s = new Set();

ws.add(data1);
ws.add(data2);

s.add(data1);
s.add(data2);

data1 = null;

console.log('WeakSet: ', ws.has(data1), ws.has(data2));

ws.add('abc');
ws.add(1);
