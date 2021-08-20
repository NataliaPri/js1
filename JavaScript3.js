var a = 5;
var b = 3;
if (a > 0 && b > 0) {
	x = a - b;
	alert(x);
} else if (a < 0 && b < 0) {
	x = a * b;
	alert(x);
}
else if (a > 0 && b < 0 || a < 0 && b > 0) {
	x = a + b;
	alert(x);
}
