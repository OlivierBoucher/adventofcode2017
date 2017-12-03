// Part 1
const num = 361527

let size = Math.ceil(Math.sqrt(num))
size = size % 2 === 0 ? size + 1 : size;
const half = Math.floor(size / 2) + 1

const q = {
    get bottomRight() {
        return Math.pow(size, 2)
    },
    get bottomLeft() {
        return this.bottomRight - (size - 1)
    },

    get topLeft() {
        return this.bottomLeft - (size - 1)
    },

    get topRight() {
        return this.topLeft - (size - 1)
    },

    get middleBottom() {
        return this.bottomRight - (half - 1)
    },

    get middleLeft() {
        return this.bottomLeft - (half - 1)
    },
    get midddleTop() {
        return this.topLeft - (half - 1)
    },
    get middleRight() {
        return this.topRight - (half - 1)
    }
}

//Check if it is a straight path
if (num === q.middleBottom || num === q.midddleTop || num === q.middleLeft || num === q.middleRight) {
    console.log('Result', half - 1)
    return
}

//Check if it is one of the corners
if(num === q.bottomLeft || num === q.bottomRight || num === q.topLeft || num == q.topRight) {
    console.log('Result', size -1)
}

let offset;

if(num < q.bottomRight && num > q.bottomLeft) {
    //bottom
    offset = Math.abs(num - q.middleBottom)
} else if(num < q.bottomLeft && num > q.topLeft ) {
    //left
    offset = Math.abs(num - q.middleLeft)
} else if(num < q.topLeft && num > q.topRight) {
    //top
    offset = Math.abs(num - q.midddleTop)
} else {
    //right
    offset = Math.abs(num - q.middleRight)
}

console.log('Result', (half -1) + offset)


//Part 2

