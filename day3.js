// // Part 1
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
if (num === q.bottomLeft || num === q.bottomRight || num === q.topLeft || num == q.topRight) {
    console.log('Result', size - 1)
}

let offset;

if (num < q.bottomRight && num > q.bottomLeft) {
    //bottom
    offset = Math.abs(num - q.middleBottom)
} else if (num < q.bottomLeft && num > q.topLeft) {
    //left
    offset = Math.abs(num - q.middleLeft)
} else if (num < q.topLeft && num > q.topRight) {
    //top
    offset = Math.abs(num - q.midddleTop)
} else {
    //right
    offset = Math.abs(num - q.middleRight)
}

console.log('Result', (half - 1) + offset)

//Part 2
const matrix = {};

const key = (x, y) => `${x}${y}`
const value = (x, y) => matrix[key(x, y)] || 0
const set = (x, y, v) =>  {
    matrix[key(x, y)] = matrix[key(x, y)] || v
}

matrix[key(0, 0)] = 1;

const computeSquare = (x, y) => {
    let v = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if(i ===0 && j ===0) {
                continue
            } 
            v += value(x + i, y + j)
        }
    }
    return v;
}

let max = 361527
let maxX = 1;
let minX = -1;
let maxY = 1;
let minY = -1;

let x = 0;
let y = 0;

while (true) {
    // Move right
    x++;
    for(; y < maxY; y++) {
        const v = computeSquare(x, y)
        if(v > max) {
            console.log('Result', v)
            return
        }
        set(x, y, v)
    }
    // We're top right, moving to the left
    for (; x > minX; x--){
        const v = computeSquare(x, y)
        if(v > max) {
            console.log('Result', v)
            return
        }
        set(x, y, v)
    }
    // We're top left, moving bottom
    for(; y > minY; y--) {
        const v = computeSquare(x, y)
        if(v > max) {
            console.log('Result', v)
            return
        }
        set(x, y, v)
    }
    // We're bottom left, moving right
    for(; x < maxX; x++) {
        const v = computeSquare(x, y)
        if(v > max) {
            console.log('Result', v)
            return
        }
        set(x, y, v)
    }
    // Computing last position before resetting
    const v = computeSquare(x, y)
    if(v > max) {
        console.log('Result', v)
        return
    }
    set(x, y, v)

    maxX++
    minX--
    maxY++
    minY--
}