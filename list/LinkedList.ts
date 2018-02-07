export interface ListNode<T> {
    next?: ListNode<T>
    data?: T
}

export class LinkedList<T> {

    head: ListNode<T> = {}

    add(data: T) {
        const node: ListNode<T> = { data }
        if (!this.head.next) {
            this.head.next = node
        } else {
            node.next = this.head.next
            this.head.next = node
        }
    }

    remove(data: T) {
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