class Queue {

    constructor() {
        this.container = []
    }

    enqueue(data) {
        this.container.push(data)
    }

    dequeue() {
        return this.container.shift()
    }

    front() {
        return this.container[0]
    }

    size() {
        return this.container.length
    }
}