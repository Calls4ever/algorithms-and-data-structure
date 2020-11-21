function Queue(){
    data=[]

    this.enqueue=function(ele){
        data.push(ele)
    }
    this.print=function(){
        let toPrint=''
        data.forEach(element => {
           toPrint+= element+'<-'
        });
        console.log(toPrint)
    }
    this.dequeue=function(){
        data.shift()
    }
    this.front=function(){
        return data[0]
    }
    this.isEmpty=function(){
        return !data.length>0
    }


}

let q=new Queue()
console.log(q.isEmpty())
q.enqueue('tserig')
q.enqueue('Norbu')
q.enqueue('Kapee')
q.enqueue('Lobsang')
q.enqueue('Tenpa')
q.print()
console.log(q.front())
q.dequeue()
q.print()
console.log(q.isEmpty())