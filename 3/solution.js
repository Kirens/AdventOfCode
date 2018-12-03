const input =
  document.body.textContent
    .split('\n')
    .filter(r => r.length != 0)
    .map(l => (/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/g).exec(l))
    .map(([,id, left, top, width, height]) => (
      { id: +id
      , left: +left
      , top: +top
      , width: +width
      , height: +height
      }));

const forEachCoord = performer => {
  input.forEach(({id, left, top, width, height}) => {
    for (var x = left; x < left + width; x++) {
      for (var y = top; y < top + height; y++) {
        performer(x, y, id)
      }
    }
  })
}

const countOverlaps = () => {
  const fabric = new Map
  forEachCoord((x, y) =>
    fabric.set(`${x},${y}`, fabric.get(`${x},${y}`) + 1 || 1)
  )
  let count = 0;
  for (var [, v] of fabric.entries()) {
    if (v > 1) count++;
  }
  return count
}

const singleClaims = () => {
  const fabric = new Map
  const claims = input.map(() => true)
  forEachCoord((x, y, id) => {
    let other = fabric.get(`${x},${y}`)
    if(other) {
      claims[other] = false;
      claims[id-1] = false;
    }
    fabric.set(`${x},${y}`, id-1);
  })
  return claims
    .map((v, i) => [v, i+1])
    .filter(([v]) => v)
    .map(([,id]) => id)
}

console.log('Part 1', countOverlaps())
console.log('Part 2', singleClaims())
