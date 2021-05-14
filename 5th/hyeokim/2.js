function bank(money) {
  var bankAsset = money

  return {
    deposit : function (depositMoney) {
      bankAsset += depositMoney
    },
    withdraw : function (withdrawMoney) {
      bankAsset -= withdrawMoney
    },
    asset : function () {
      console.log(bankAsset);
    }
  }
}

var person1 = bank(1000);
var person2 = bank(5000);
person1.asset();
person2.asset();
person1.withdraw(100);
person2.deposit(100);
person1.asset();
person2.asset();
