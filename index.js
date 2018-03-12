const Immutable = window.Immutable;

const data = {a:1, b:2};

// A record is similar to a JS object,
// but enforces a specific set of allowed string keys,
// and has default values.

const record = Immutable.Record(data);

// mutate the record
//                         if c: 3 the record will not be mutated
//                                    ||
//                                    \/
const recordMutated = new record({ b: 3 });
console.log('mutated record', recordMutated.toJS()); // {a:1, b:3}

// remove prop from the record
const recordRemoved = recordMutated.remove('b');
console.log('record removed', recordRemoved.toJS()); // {a:1, b:2}