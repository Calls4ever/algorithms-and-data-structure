class Stack{
    constructor(){
        this.data=[]
    }
    push(ele){
        this.data.push(ele)
    }
    pop(){
        this.data.pop()
    }
    peak(){
        return this.data[0]
    }
    size(){
        return this.data.length
    }
    isEmpty(){
        return this.data.length>0?false:true
    }
    print(){
        for(let i in this.data){
            console.log(this.data[i],'<')
        }
    }
}
s=new Stack()
console.log(s.isEmpty())
s.push('tsering')
s.push('Norbu')
s.push('what!')
s.print()
console.log(
s.size(),
s.peak()  
)
s.pop()
s.print()
console.log(s.isEmpty())

module.exports=Stack