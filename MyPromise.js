const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise{
    _status = PENDING
    FULFILLED_CALLBACK_LIST = [];
    REJECTED_CALLBACK_LIST = []
    constructor(fn) {
        this.status = PENDING
        this.value = null
        this.reason = null
        try{
            fn(this.resolve.bind(this),this.reject.bind(this))
        } catch (e){
            this.reject(e)
        }
    }

    resolve(value){
        if(this.status == PENDING){
            this.value = value
            this.status = FULFILLED
        }
    }
    reject(reason){
        if(this.status == PENDING){
            this.reason = reason
            this.status = REJECTED
        }
    }
    get status(){
        return this._status;
    }

    set status(newStaus){
        this._status = newStaus
        switch (newStaus){
            case FULFILLED:{
                this.FULFILLED_CALLBACK_LIST.forEach(callback => {
                    callback(this.value)
                })
                break
            }
            case REJECTED:{
                this.REJECTED_CALLBACK_LIST.forEach(callback => {
                    callback(this.reason)
                })
                break
            }
        }
    }

    then(onFulfilled, onRejected){
        const  realonFulfilled = this.isFunction(onFulfilled)?onFulfilled:(value)=>{return value}
        const  realonRejected = this.isFunction(onRejected)?onFulfilled:(reason)=>{throw reason}
        const  newPromise = new MyPromise((resolve, reject)=>{
            switch (this.status){
                case FULFILLED:
                    realonFulfilled()
                    break
                case REJECTED:
                    realonRejected()
                    break
                case PENDING: {
                    this.FULFILLED_CALLBACK_LIST.push(realOnFulfilled)
                    this.REJECTED_CALLBACK_LIST.push(realOnRejected)
                }
            }

        })
        return newPromise
    }
    isFunction(func){
        return typeof func === "function"
    }

}