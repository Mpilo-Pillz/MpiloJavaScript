const listPillz = [12, 99, 37];

console.log(listPillz.reverse());

function ListNode(data) {
    this.data = data;
    this.next = null;
}
function LinkedList(head = null) {
    this.head = head;
}

let node1 = new ListNode(12);
let node2 = new ListNode(99);
let node3 = new ListNode(37);
node1.next = node2;
node2.next = node3



let list2 = new LinkedList(node2)
let list = new LinkedList(node1);


console.log(list.head.next);
console.log(list);
// console.log(list2.head.next.data);


n = new Node(5)
n.next = head //to not break the chain
head = n;

//difference between a refernce and the actual object


///////////////////

class ListNode {
    constructor(number) {
        this.number = number;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    prepend(number) {
        let node = new ListNode(number);
        if (!this.head) {
            this.tail = node;
        }
        node.next = this.head;
        this.head = node;

    }

    append(number) {
        let node = new ListNode(number);
        console.log(node);
        console.log('mpi',this.head);
        console.log('thi',this.tail);
        // if(this.head) {
        //     this.tail = node;
        // }
        // node.next = node;
        // this.head = node;
    }
}


//brand new list
let list = new LinkedList();
// list.prepend(5);
// list.prepend(2);
list.append(3);
console.log(list.head);
console.log(list.tail);