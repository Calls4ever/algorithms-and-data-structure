class Node{
    constructor(data){
        this.next=null
        this.data=data
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.length=0
    }
    isEmpty(){
        return this.head==null
    }

    add(ele){
       if(this.isEmpty()){
           this.head = new Node(ele)
           
       }else{
           let currentNode=this.head
           while(currentNode.next){
            currentNode=currentNode.next
           }
           
           currentNode.next= new Node(ele)
       }
       this.length++
    }
    print(){
        let currentNode=this.head, res=''
        if(this.isEmpty()){
            res='empty'
        }else{
            while(currentNode){
            res+='data: ['+currentNode.data+']->next: '
            currentNode=currentNode.next
            }
        }
        
        
        console.log(res)
    }
    reverse(){
        if(this.isEmpty()){
            return null
        }
        let currentNode=this.head, stack=[]
        while(currentNode){
            stack.push(currentNode)
            currentNode=currentNode.next
        }
        this.head=null
        while(stack.length>0){
            this.add(stack.pop().data)
        };
        console.log(stack)
    }
}

let l=new LinkedList()
l.print()
console.log(l.isEmpty())
l.add('tsering')
l.add('kalsang')
l.add('god')
l.add('linked list')
l.add('engineering')
l.add('where?')
l.add('nachos')
l.add('Hell')
l.add('merry')
l.add('Holiday')
l.add('but')
l.add('ok')
l.add(12)
l.add(48)
l.add(48)
l.print()
l.reverse()
l.print()
