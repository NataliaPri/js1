if (!("a" in window)) {     // alert(a) ������ ������� ��� �������� ����������� �������� a
    var a = 1;
}
alert(a);

var b = function a(x) {     // ������ ���� �������, ���� ������� ��� ������
    x && a(--x);
};
alert(a);

function a(x) {             // ��� ���������� 2�� ��������� � ������� ��������, �.�. � = 10  alert(a)
    return x * 2;
}
var a;
alert(a);

function b(x, y, a) {       // 10 �� ������ �� ��, ��� ��� ������ ������� b() � �������� ��������� (�) ������ �������� 3, 
    arguments[2] = 10;      // ������ ������� ���� ������������ � = 10
    alert(a);
}
b(1, 2, 3);

function a() {              // ������� �������� this = window
    alert(this);
}
a.call(null);
