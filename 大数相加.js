let bigInt = function (a, b){
    let len = Math.max(a.length, b.length)
    a = a.padStart(len, "0")
    b = b.padStart(len, "0")
    let temp = 0
    let res = ""
    let t = 0
    for(let i = len-1; i>=0; i--){
        t = parseInt(a[i]) + parseInt(b[i]) + temp
        temp = Math.floor(t/10)
        t = t % 10
        res = t + res
    }
    if(temp == 1){
        res = 1 + res
    }
    return res
}
console.log(bigInt("11111111111111111111","111111111111111111"))