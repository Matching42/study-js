function parrot(size) {
	var name = '무새';
	var familyName = '자스';

    this.speak = function (str) {
        for (var i = 0; i < size; i++)
            console.log(str);
    }

    this.shutUp = function (n) {
        size = size - n;
        console.log(size);
    }

    this.introduce = function () {
        for (var i = 0; i < size; i++)
        {
            console.log('나의 이름은 ' + familyName + name + ' 입니다.');
        }
    }

    this.naming = one => two => {
        if (one)
        {
            console.log('앵무새들의 성은 ' + one + ' 입니다.');
            familyName = one;
        }
        else
            console.log('앵무새들의 성은 ' + familyName + ' 입니다.');
        if (two)
        {
            console.log('앵무새들의 이름은 ' + two + ' 입니다.');
            name = two;
        }
        else
            console.log('앵무새들의 이름은 ' + name + ' 입니다.');
    }

    return this;
}

var parrots = parrot(3);
parrots.speak('hello');
parrots.shutUp(2);
parrots.speak('hi');

parrots.introduce();

parrots.naming()();
parrots.naming()('최고');
parrots.naming('파이썬')();
parrots.naming('매칭')('42');
parrots.introduce();