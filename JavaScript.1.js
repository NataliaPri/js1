function div(val, by) {
    return (val - val % by) / by;
}

function CutNumber(Number) {
    this.init = function (Num) {
        if (0 < Num && Num < 1000) {
            this.hunderds = div(Num, 100);
            this.dozens = div((Num - this.hunderds * 100), 10);
            this.units = Num - this.dozens * 10 - this.hunderds * 100;
        } else {
            if (typeof (this.units) != undefined) {
                delete this.hunderds;
                delete this.dozens;
                delete this.units;
            }
        }
    }
    this.init(Number);
}

testNumber = prompt()
cutNumberElement = new CutNumber(parseInt(testNumber, 10))
console.log("hunderds: " + this.hunderds);
console.log("dozens: " + this.dozens);
console.log("units: " + this.units);
