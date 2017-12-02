
const input = '';

// Part 1
let summable = [];
for (let i = 0; i < input.length; i++) {
    const next = i + 1 === input.length ? 0 : i + 1;

    if (input[i] === input[next]) {
        summable.push(parseInt(input[i]))
    }
}

const sum = (a, b) => a +b

console.log(summable.reduce(sum, 0))


// Part 2
let summable = [];
let step = input.length / 2;
for (let i = 0; i < input.length; i++) {
    const next = i + step >= input.length ? Math.abs((i + step) - input.length) : i + step;
    if (input[i] === input[next]) {
        summable.push(parseInt(input[i]))
    }
}

const sum = (a, b) => a + b
console.log(summable.reduce(sum, 0))