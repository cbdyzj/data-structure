export class ArrayList<T> {

    container: T[] = []

    add(data: T) {
        this.container.push(data)
    }

    remove(data: T) {
        this.container = this.container.filter(c => c !== data)
    }

    set(index: number, data: T) {
        this.container[index] = data
    }

    get(index: number) {
        return this.container[index]
    }

    size() {
        return this.container.length
    }
}
