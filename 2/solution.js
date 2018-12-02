const ids =
  document.body.textContent
    .split('\n')
    .filter(r => r.length != 0);

const repeats = str => {
  const all = new Map()
  str.split('').forEach(c => all.set(c, all.get(c) + 1 || 1))
  return [...all.entries()].map(([_, n]) => n).filter(n => n == 2 || n == 3)
}

const repeatsOf = whatRepeats =>
  ids.filter(id => repeats(id).some(n => n == whatRepeats)).length

const similar = (a, b) => {
  let similar = '';
  for (let i = 0; i < a.length || i < b.langth; i++) {
    if(a[i] == b[i]) similar += a[i];
  }
  return similar.length == a.length - 1 ? similar : false;
}

console.log('Part 1', repeatsOf(2) * repeatsOf(3))
console.log('Part 2', ids.map(a => ids.map(b => similar(a,b)).filter(n => n)[0]).filter(n => n)[0])
