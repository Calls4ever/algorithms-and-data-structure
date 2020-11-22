class Node{
    
    constructor(data, right=null, left=null){
        this.data=data
        this.right=right
        this.left=left
    }
}
class BST{
    constructor(){
        this.root=null
    }
    add(data){
        let currentNode
        let previousNode
        if(this.isEmpty()){
            this.root=new Node(data)
        }else{
            currentNode=this.root
            while(currentNode){
                if(data>currentNode.data){
                    previousNode=currentNode
                    currentNode=currentNode.right
                }else if(data<currentNode.data){
                    previousNode=currentNode
                    currentNode=currentNode.left
                }else {
                    return
                }
            }
            if(previousNode.data>data){
                previousNode.left=new Node(data)
            }else{
                previousNode.right= new Node(data)
            }
        }
    }
    isEmpty(){
        return !this.root
    }
    findMin(){
        let previousNode
        let currentNode=this.root
        while(currentNode){
            previousNode=currentNode
            currentNode=currentNode.left 
        }
        return previousNode.data
    }
    findMax(){
        
        let currentNode=this.root
        while(currentNode.right){
            currentNode=currentNode.right
        }
        return currentNode.data
    }
    search(data){
        let currentNode=this.root
        
        while(currentNode){
            if(currentNode.data==data){
                return currentNode
                
            }else if(currentNode.data>data){
                console.log('searching left: ', currentNode.data)
                currentNode=currentNode.left
            }else {
                console.log('searching right: ', currentNode.data)
                currentNode=currentNode.right
            }
        }
        return null
    }
    isPresent(data){
        let currentNode=this.root
        while(currentNode){
            if(currentNode.data==data){
                return true
            }else if(currentNode.data>data){
                currentNode=currentNode.left
            }else{
                currentNode=currentNode.right
            }
        }
        return false
    }
    remove(data){
        let currentNode=this.root, leftNode, rightNode, previousNode=this.root.right
        while(currentNode){
            if(currentNode.data==data){
                if(!)
            }
        }
    }

}

let bst=new BST()
console.log(bst)
bst.add(56)
bst.add(50)
bst.add(53)
bst.add(51)
bst.add(20)
bst.add(17)
bst.add(47)
bst.add(57)
bst.add("boy i missed")
bst.add(87)
bst.add(97)
console.log(bst.findMin(), bst.findMax(), bst.search(87))
