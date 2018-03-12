const Immutable = window.Immutable;

// lazy array
// order is not important
// chain does not create intermediate collections
const sequence = Immutable.Seq.of(1,2,3);

// sequence
console.log('sequence', sequence.toJS());

// map
const seqMap = sequence.map(item => item * 2);
console.log('seq map', seqMap.toJS())

// take
const taken2 = sequence.take(2);
console.log('take 2', taken2.toArray());
