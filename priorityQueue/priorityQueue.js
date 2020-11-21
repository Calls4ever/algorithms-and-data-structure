class PriorityQueue{
    #data=[]
    enqueue(ele){
        if(this.isEmpty()){
            this.#data.push(ele)
        }else{
            let added=false
            for(let i in this.#data){
                if(this.#data[i][1]<ele[1]){
                    added=true
                    this.#data.splice(i,0,ele)
                    break
                }
            }
            if(!added){
                this.#data.push(ele)
            }
        }
    }
    isEmpty(){
        return this.#data.length<1
    }
    print(){
        let toPrint=''
        this.#data.forEach(ele=>{
            toPrint+='['+ele[0]+' priority: '+ele[1]+'] <- '
        })
        console.log(toPrint)
    }
}
pq= new PriorityQueue()
console.log(pq.isEmpty())
pq.enqueue(['Tsering', 3])
pq.enqueue(['Tsenor', 3])
pq.enqueue(['Dorji', 3])
pq.enqueue(['Kapee', 5])
pq.enqueue(['Tenzin', 2])
pq.enqueue(['Dolma', 3])
pq.enqueue(['Kalsang', 3])
pq.enqueue(['Sampa', 4])
pq.print()
