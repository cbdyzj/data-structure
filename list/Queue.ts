export class Queue<T> {

    container: T[] = []

    enqueue(data: T) {
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