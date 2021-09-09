if (!("a" in window)) {     // alert(a) просто выводит все значения глобального значения a
    var a = 1;
}
alert(a);

var b = function a(x) {     // Выдаст тело функции, сама функция без смысла
    x && a(--x);
};
alert(a);

function a(x) {             // Это присвоение 2му параметру в функции значения, т.е. а = 10  alert(a)
    return x * 2;
}
var a;
alert(a);

function b(x, y, a) {       // 10 не смотря на то, что при вызове функции b() в качестве аргумента (а) задано значение 3, 
    arguments[2] = 10;      // внутри функции есть присваивание а = 10
    alert(a);
}
b(1, 2, 3);

function a() {              // функция получает this = window и выводит Wimdow
    alert(this);
}
a.call(null);
