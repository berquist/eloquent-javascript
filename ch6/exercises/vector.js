class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    // We define the length of a vector as the distance between it and the
    // Cartesian origin.
    get length() {
        return distance(this.x, 0.0, this.y, 0.0);
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

function distance(xa, xb, ya, yb) {
    return Math.sqrt(Math.pow(xa - xb, 2.0) + Math.pow(ya - yb, 2.0));
}

const v1 = new Vec(2, 3);
const v2 = new Vec(4, 6);
const v3 = v1.plus(v2);
const v4 = v1.minus(v2);

console.log(v3.toString());
console.log(v4.toString());

console.log(v1.length);
console.log(v2.length);
console.log(v3.length);
console.log(v4.length);
