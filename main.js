import DoubleLinkedList from './doublelinkedlist.js';

const dll = new DoubleLinkedList()
dll.push(1)
dll.push(2)
dll.push(3)

console.log(dll.printList())

dll.pop()

console.log(dll.printList())

dll.shift()

console.log(dll.printList())

dll.unshift(4)

console.log(dll.printList())

dll.get(2)

dll.push(5)
dll.push(6)
dll.push(7)

console.log(dll.printList())

dll.set(3,10)

console.log(dll.printList())

dll.insert(3,11)

console.log(dll.printList())

dll.remove(3)

console.log(dll.printList())