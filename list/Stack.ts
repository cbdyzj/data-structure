export class Stack<T> {

    container: T[] = []

    push(data: T) {
        this.container.push(data)
    }

    pop() {
        return this.container.pop()
    }

    peak() {
        return this.container[this.container.length - 1]
    }

    size() {
        return this.container.length
    }
}