class LinkedList {

    constructor() {
        head = {}
    }

    add(data) {
        const node = { data }
        if (!this.head.next) {
            this.head.next = node
        } else {
            node.next = this.head.next
            this.head.next = node
        }
    }

    remove(data) {
        let pointer = this.head
        while (pointer.next) {
            if (pointer.next.data === data) {
                pointer.next = pointer.next.next
            } else {
                pointer = pointer.next
            }
        }
    }

    size() {
        let count = 0
        let pointer = this.head
        while (pointer.next) {
            count++
            pointer = pointer.next
        }
        return count
    }
}