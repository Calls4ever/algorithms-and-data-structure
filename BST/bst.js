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
                currentNode=currentNode.left
            }else {
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
        const removeNode=(data, node)=>{
            if(!node.data){
                return null
            }
            if(node.data==data){
                if(!node.left && !node.right){
                    return null
                }
                if(!node.right){
                    return node.left
                }
                if(!node.left){
                   return node.right
                }

                let tempNode=node.right
                while(tempNode.left){
                    tempNode=tempNode.left
                }
                node.data=tempNode.data
                node.right=removeNode(tempNode.data, node.right)
                return node
            }else if(node.data>data){
                node.left=removeNode(data, node.left)
                return node
            }else if(node.data<data){
                node.right=removeNode(data, node.right)
                return node
            }else return node
        }

        this.root=removeNode(data, this.root)
    }
    minHeight(node=this.root){
        if(!node){
            return -1
        }
        let left=this.minHeight(node.left)
        let right=this.minHeight(node.right)
        if(left<right){
          return  left+1
        }else{
          return  right+1
        }
    }
    maxHeight(node=this.root){
        if(!node){
            return -1
        }
        let right=this.maxHeight(node.right)
        let left=this.maxHeight(node.left)
        if(left<right){
            return right+1
        }else return left+1
    }
    inOder(){
        if(!this.root){
            return null
        }
        let res=[]
       const traverseInOrder=(node)=>{
            node.left && traverseInOrder(node.left)
            res.push(node.data)
            node.right && traverseInOrder(node.right)
        }
        traverseInOrder(this.root)
        return res
    }
    postOrder(){
        if(!this.root){
            return null
        }
        let res=[]
        const traversePostOrder=node=>{
            node.left && traversePostOrder(node.left)
            node.right && traversePostOrder(node.right)
            res.push(node.data)
        }
        traversePostOrder(this.root)
        return res
    }
    preOrder(){
        if(!this.root){
            return null
        }
        let res=[]
        const traversePreOrder=node=>{
            res.push(node.data)
            node.left && traversePreOrder(node.left)
            node.right && traversePreOrder(node.right)
        }
        traversePreOrder(this.root)
        return res
    }
}

let bst=new BST()
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
console.log(bst.findMin(), bst.findMax(), bst.isPresent(50))
// bst.remove(56)
console.log(bst)
console.log(bst.minHeight(), bst.maxHeight())
console.log(bst.inOder(), bst.postOrder(), bst.preOrder())
