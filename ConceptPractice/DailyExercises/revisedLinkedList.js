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

    append(number) {
        let node = new ListNode(number);
        // treat the scenarios separatly
        // that is 2 separate scenarios, run one or the other, use the return to terminate
        // so that the other scenario does not execute or use an else
        if(!this.head) {
            this.head = node;
            this.tail = node;
            return;
        }
        
        this.tail.next = node;
        this.tail = node;     
    }

    prepend(number) {
        let node = new ListNode(number);
        if (!this.head) {
            // always set tail to the new hode
            this.tail = node;
        }
        node.next = this.head;
        this.head = node; // also setting head to the new node
        // order is important
    }
    print() {
        let current = this.head;
        while(current) {
            console.log(current.number);
            current = current.next;
        }
        // console.log(this.head.next.next.number);
    }
    length() {
        let traversedTimes = 0
        let current = this.head;
        while(current) {
            traversedTimes++
            current = current.next;
        }
        return traversedTimes;
    }
}


//brand new list
let list = new LinkedList();
list.prepend(5);
list.prepend(2);
list.prepend(3);
list.append(8);
list.print();
console.log(list.length());
console.log('tail-->', list.tail);
console.log('head-->', list.head);




