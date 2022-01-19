class Group {
    constructor() {
        // A Set is more reasonable but is "cheating"
        this._container = new Array();
    }

    static from(iterable) {
        let grp = new Group();
        for (const item of iterable) {
            grp.add(item);
        }
        return grp;
    }

    add(element) {
        if (!this.has(element)) {
            this._container.push(element);
        }
    }

    delete(element) {
        const existingIdx = this._container.indexOf(element);
        if (existingIdx != -1) {
            this._container.splice(existingIdx, 1);
        }
    }

    has(element) {
        return this._container.includes(element);
    }
}

class GroupIterator {
    constructor(group) {
        this.idx = 0;
        this.group = group;
    }

    next() {
        if (this.idx === this.group._container.length) {
            return {done: true};
        }

        const value = {
            idx: this.idx,
            value: this.group._container[this.idx]
        };
        this.idx++;

        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

const iterable = [9, 10, 1, 2, 4, 3, 4, 4, 1, 5];
const grp = Group.from(iterable);
console.log(grp);
console.log(grp.has(4));
console.log(grp.has(12));
grp.delete(4);
console.log(grp);
for (const i of grp) {
    console.log(i);
}
