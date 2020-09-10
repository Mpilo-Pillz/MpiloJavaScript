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
list.print();
console.log(list.length());


// 3
// 2
// 5