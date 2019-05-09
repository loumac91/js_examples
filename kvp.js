// How to loop through KeyValue Pairs

const test = {
    x: '123',
    y: '456',
    abc: '789'
}

const entries = Object.entries(ttest)

for (const [key, value] of entries) {
    console.log(`The value of ${key} is ${value}`)
}

const result = Object.fromEntries(
    Object.entries(test)
        .filter(([key, value]) => key.length === 1)
        .map(([key, value]) => [ key, value * 2])
)

console.log('result', result)