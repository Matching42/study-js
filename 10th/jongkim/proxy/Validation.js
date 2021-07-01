let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // Throws an exception
person.age = 300; // Throws an exception

/**
 * Proxy의 handler에 set이 존재
 * person.age = 100은 set 이므로 [[Set]] 대신 Proxy에 설정된 set handler를 대신 호출합니다.
 * Proxy handler인 validator의 set으로 객체에 전달된 값을 검증합니다.
 */
