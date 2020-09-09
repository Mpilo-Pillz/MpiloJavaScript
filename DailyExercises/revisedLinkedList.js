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
}


//brand new list
let list = new LinkedList();
list.prepend(5);
list.prepend(2);
console.log(list.head);
console.log(list.tail);