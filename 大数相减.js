let bigInt = function (a, b,len){
    let res = ""
    let temp = 0;
    let t = 0;
    for(let i = len-1; i>=0; i-- ){
        t = parseInt(a[i]) - parseInt(b[i])-temp
        if(t < 0){
            t = t+10
            temp = 1
        }
        res = t + res;
    }
    return res
}
let minus = function (a,b){
    let len =  Math.max(a.length, b.length)
    a = a.padStart(len, "0")
    b = b.padStart(len, "0")
    if(parseInt(a[0])-parseInt(b[0])>=0){
        return bigInt(a,b,len)
    }else {
        return "-" + bigInt(b,a,len)
    }

}
console.log(minus("20000","200"))