const Immutable = window.Immutable;

const set = Immutable.Set.of(1,2,2); // collection of unique items

// check set
console.log('set', set.toJS());

// comparison
const collection = [1,2,3];
const list1 = Immutable.List(collection);
const list2 = Immutable.List(collection);

// plain non-equality
console.log('plain comparison', list1 === list2);

// hashCode comparison
console.log('hashCode comparison', list1.hashCode() === list2.hashCode());