class Stack {

  private topNode?: StackNode
  private bottomNode?: StackNode
  private listSize: number

  constructor() {
    this.topNode = null
    this.bottomNode = null
    this.listSize = 0
  }

  top(): number | void {
    if (this.isEmpty()) {
      return console.log('stack is empty');
    }
    return this.topNode.getData()
  }

  bottom(): number | void {
    if (this.isEmpty()) {
        console.log('stack is empty');
        return 
     }

    return this.bottomNode.getData()
  }

  push(data: number) {
    const isEmpty = this.isEmpty()
    const newNode = new StackNode(data, isEmpty ? null : this.topNode)
    
    if (isEmpty) {
      this.bottomNode = newNode
    }
    
    this.topNode = newNode 
    this.listSize++
  }

  pop(): number {
    if (this.isEmpty()) {
      console.log('stack is empty');
      return
    }

    const poppedNode = this.topNode
    this.topNode = this.topNode.getNext()
    this.listSize--

    return poppedNode.getData()
  }

  size(): number {
    return this.listSize
  }

  isEmpty(): boolean {
    return this.size() === 0
  }
}

class StackNode {

  private data: number
  private next: StackNode | null

  constructor(data: number, next: StackNode) {
    this.data = data;
    this.next = next ? next : null
  }

  getData(): number{
    return this.data
  }

  getNext(): StackNode {
    return this.next
  }

  setNext(nextNode: StackNode) {
    this.next = nextNode
  }
}

const myStack = new Stack()

myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.pop());
console.log(myStack.size())


