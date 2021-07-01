function extend(sup,base) { // sup = Person
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype,"constructor" // base.prototype의 contructor 프로퍼티 디스크립터
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype); // sup.prototype 현재는 Person 프로토타입
      this.apply(target,obj,args); // handler의 apply 호출.
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that,args); // sup에 that 바인딩, args를 인자로
      base.apply(that,args); // sup에 that 바인딩, args를 인자로
    }
  };
  var proxy = new Proxy(base,handler); // Boy의 function에 handler가 적용됨.
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, "constructor", descriptor); // base.prototype에 constuctor를 새로 정의 descriptor 내용
  return proxy;
}

var Person = function(name){ // prototype은 빈 객체 {}
  this.name = name;
};

var Boy = extend(Person, function(name, age) { // Boy는 proxy 객체
  this.age = age; // prototype이 Person.prototype으로 교체
});

Boy.prototype.sex = "M";

var Peter = new Boy("Peter", 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13
