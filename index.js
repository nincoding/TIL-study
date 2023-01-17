const arr = [];
console.time('Array Perforance Test');
for (let i = 0; i < 100000000; i++) {
    arr[i] = i;
}
console.timeEnd('Array Perforance Test'); //1.888s

const obj = {};
console.time('Object Perforance Test');
for (let i = 0; i < 100000000; i++) {
    obj[i] = i;
}
console.timeEnd('Object Perforance Test'); //2.216s

/**
 * 얕은 복사 , 깊은 복사, 완전한 깊은 복사
딥다이브 => 얕은 복사를 깊은 복사 / 완전한 깊은복사 깊은복사
 */