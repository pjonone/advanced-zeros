module.exports = function getZerosCount(number, base) {
    var arr = [];
    var sumArr = [];
    for (var i = 2; i <= base; i++) {
        while (base % i === 0) {
            arr.push(i);
            base /= i;
        }
        if (base / i === 1) {
            arr.push(base);
        }
    }
    var z = Math.max.apply(null, arr);
    for (var y = 1; y < 30; y++) {
        var num = Math.pow(z, y);
        var result = Math.floor(number / num);
        if (result !== 0) sumArr.push(result);
    }
    let summ = sumArr.reduce(function (sum, current) {
        return sum + current;
    });
    var count = 0;
    for(var x = 0; x < arr.length; ++x){
        if(arr[x] == z)
            count++;
    }
    if (count > 1) {
        return Math.floor(summ/count);
    }
    else {
        return summ;
    }

}
