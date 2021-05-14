var prison = []

function bankSafe () {
  var bankAsset = 100;
  var appleTag = 1;

  return {
    backDoor : function (thief) {
      thief.money = bankAsset;
      thief.tag = appleTag;
      bankAsset -= bankAsset;
      appleTag = 0;
      return thief;
    }
  }
}

function policeArrest(people) {
  for (var person of people) {
    if (person.tag === 1) {
      prison.push(person)
    }
  }
}

function person(name, money, tag){
  this.name = name;
  this.money = money;
  this.tag = tag;
  return this
}

var bank = new bankSafe()
var person1 = new person("김춘식", 0.3, 0);
var person2 = new person("오상석", 0.5, 0);
var person3 = new person("곽두팔", 0, 0);
var person4 = new person("육인철", 3, 0);
var people = [person1, person2, person3, person4];

bank.backDoor(person3);
policeArrest(people);
console.log(prison);