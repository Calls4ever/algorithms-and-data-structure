class Stack{
    constructor(){
        let data=[]
    }
    push=(ele)=>{
        data.push(ele)
    }
    pop=()=>{
        data.pop()
    }
    peak(){
        return data[0]
    }
    size(){
        return data.length
    }
    isEmpty(){
        return data.length>0?false:true
    }
}

