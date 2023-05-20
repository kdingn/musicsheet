const roots = [
  { C: 1 },
  { "C#": 2 },
  { Db: 2 },
  { D: 3 },
  { "D#": 4 },
  { Eb: 4 },
  { E: 5 },
  { F: 6 },
  { "F#": 7 },
  { Gb: 7 },
  { G: 8 },
  { "G#": 9 },
  { Ab: 9 },
  { A: 10 },
  { "A#": 11 },
  { Bb: 11 },
  { B: 0 },
];
const ctypes = [
  { "": [1, 5, 8] },
  { m: [1, 4, 8] },
  { dim: [1, 4, 7] },
  { aug: [1, 5, 9] },
  { sus4: [1, 4, 8] },
  { 7: [1, 5, 8, 11] },
  { m7: [1, 4, 8, 11] },
  { "△7": [1, 5, 8, 12] },
  { 69: [1, 5, 10, 15] },
  { m69: [1, 4, 10, 15] },
  { φ: [1, 4, 7, 11] },
];

let chordAll = [];
for (let root of roots) {
  for (let ctype of ctypes) {
    let notes = [];
    for (let note of ctype[Object.keys(ctype)]) {
      notes.push((root[Object.keys(root)] + note - 1) % 12);
    }
    chordAll.push({
      root: String(Object.keys(root)),
      ctype: String(Object.keys(ctype)),
      notes: notes,
    });
  }
}

const rootAll = {
  C: 1,
  "C#": 2,
  D: 3,
  Eb: 4,
  E: 5,
  F: 6,
  "F#": 7,
  G: 8,
  Ab: 9,
  A: 10,
  Bb: 11,
  B: 0,
};

const rootAllInverse = Object.fromEntries(
  Object.entries(rootAll).map(function (value) {
    return [value[1], value[0]];
  })
);

export default {
  chordAll,
  rootAll,
  rootAllInverse,
};
