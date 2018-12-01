const resultingFrequency =
  numbers =>
  numbers
    .reduce((a,b)=>a+b)

const firstRepeatingFrequency =
  numbers => {
  const visited = new Set()
  let cnt = 0
  for(let i = 0; !visited.has(cnt); i++) {
    visited.add(cnt)
    cnt += numbers[i % numbers.length]
  }
  return cnt
}


const numbers =
  document.body.textContent
    .split('\n')
    .filter(r => r.length != 0)
    .map(n => +n);

console.log('Part 1', resultingFrequency(numbers))
console.log('Part 2', firstRepeatingFrequency(numbers))
