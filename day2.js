const input = ``;

// Part 1
const checksum = input.split('\n')
    .map(line => line.split('\t'))
    .map(line => Math.max(...line) - Math.min(...line))
    .reduce((a, b) => a + b)

console.log(checksum)

// Part 2
const evenlyDivisibleResult = (line) => {
    for(let i = 0; i < line.length; i++) {
        for(let j = 0; j < line.length; j++) {
            if (i !== j) {
                if (line[i] % line[j] === 0) {
                    return line[i]/line[j];
                }
            }
        }
    }
}

const checksum = input.split('\n')
    .map(line => line.split('\t'))
    .map(evenlyDivisibleResult)
    .reduce((a, b) => a + b)

console.log(checksum)