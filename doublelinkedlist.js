class Node {
    constructor(val) {
      this.val = val
      this.next = null
      this.prev = null
    }
  }
  
  class DoubleLinkedList {
    constructor() {
      this.head = null
      this.tail = null
    }
  
    push(val) {
      const newNode = new Node(val)
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      }
    }
  
    pop (){
        let currentNode = this.head

        if (currentNode === null) {
            return "Doublelinkedlist is empty."
        }
        else if (this.head === this.tail) {

            this.head = null
            this.tail = null
        } else {

            this.tail = this.tail.prev
            this.tail.next = null
        }
    }

    shift (){
        let currentNode = this.head

        if (currentNode === null) {
            return "Doublelinkedlist is empty."
        }
        else if (this.head === this.tail) {

            this.head = null
            this.tail = null
        } else {

          this.head = currentNode.next;
          this.head.prev = null
        }
    }
  
    unshift(val) {
      const newNode = new Node(val)
      if (this.head === null) {
        this.head = newNode
        this.tail = newNode
      } else {
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }
    }

    get(index) {
      let currentNode = this.head;

      while (currentNode !== null && index > 0) {

        currentNode = currentNode.next
        if (currentNode === null) return console.log("Error: Index Out of Bound.")

        index--;
      }

      if (currentNode === null) return null

      return console.log(currentNode.val)
    }

    set(index, val) {
      if (index < 0) return console.log("Error: Index Out of Bound.")

      let currentNode = this.head

      while (currentNode !== null && index > 0) {

        currentNode = currentNode.next
        if (currentNode === null) return console.log("Error: Index Out of Bound.")

        index--;
      }

        currentNode.val = val
    }

    insert(index, val) {
      if (index < 0) return false

      const newNode = new Node(val)

      if (index === 0) {
        newNode.next = this.head
        if (this.head) {
          this.head.prev = newNode
        }
        this.head = newNode
  
        if (this.tail === null) {
          this.tail = newNode
        }
  
        return true
      }

      let currentNode = this.head
      let currentIndex = 0
  
      while (currentNode !== null && currentIndex < index - 1) {
        currentNode = currentNode.next
        currentIndex++
      }
  
      if (currentNode === null) {
        return false
      }
  
      newNode.prev = currentNode
      newNode.next = currentNode.next
  
      if (currentNode.next) {
        currentNode.next.prev = newNode
      } else {
        this.tail = newNode
      }
  
      currentNode.next = newNode
  
      return true;
    
    }

    remove(index) {

      if (index < 0) return console.log("Error: Index Out of Bound.")

      let currentNode = this.head

      while (currentNode !== null && index > 0) {

        currentNode = currentNode.next
        if (currentNode === null) return console.log("Error: Index Out of Bound.")

        index--;
      }

      if (currentNode === null) return console.log("Error: Index Out of Bound.")

      if (currentNode === this.head && currentNode === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (currentNode === this.head) {
        this.head = currentNode.next;
        this.head.prev = null;
      } else if (currentNode === this.tail) {
        this.tail = currentNode.prev;
        this.tail.next = null;
      } else {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      }

    }
  
    printList() {
      let currentNode = this.head
      let result = [];
  
      while (currentNode !== null) {
        result.push(currentNode.val)
        currentNode = currentNode.next
      }
  
      return result.join(" <-> ")
    }
  }
  
export default DoubleLinkedList
