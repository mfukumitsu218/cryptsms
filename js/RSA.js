const PMod = (g, x, n) => {
    var rst = 1n;
    var bas = g;
    while (x > 0) {
        if (x % 2n == 1n) { rst = (rst * bas) % n; }
        bas = (bas * bas) % n;
        x /= 2n;
    }
    return rst;
};

const gcd = (a, b) => {
    if (a < b) {
        const tmp = a;
        a = b;
        b = tmp;
    }

    if (b == 0n) { return a; }
    const r = a % b;
    return gcd(b, r);
};

// function Cal () {
// 	// body...
// 	var g = document.getElementById("g").value;
// 	var x = document.getElementById("x").value;
// 	var n = document.getElementById("n").value;
// 	document.getElementById("rst").innerHTML = "result:" + PowerMod(g,x,n);
// }

