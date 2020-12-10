class ArrayList {

    constructor() {
        this.container = []
    }

    add(data) {
        this.container.push(data)
    }

    remove(data) {
        this.container = this.container.filter(c => c !== data)
    }

    set(index, data) {
        this.container[index] = data
    }

    get(index) {
        return this.container[index]
    }

    size() {
        return this.container.length
    }
}
