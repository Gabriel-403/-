let onWatch = function (obj, setBind, getLogger){
    let handler = {
        get (target, property, receiver){
            getLogger(target, property)
            return Reflect.get(target, property, receiver)
        },
        set (target, property, value, receiver){
            setBind(value, property);
            return Reflect.set(target, property, value)
        }
    }
    return new Proxy(obj, handler)
}
let obj = {a:1}
let a = onWatch ( obj ,(v, property)=>{
    console.log (`更改${v}, ${property}`)
},(target,property) => {
    console.log (`捕获到${ target[property]}, ${property}`)
    }
)
a.a=5
