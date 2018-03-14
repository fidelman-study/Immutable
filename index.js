const Immutable = window.Immutable;

const array = ['Apple', 'Banana', 'Cherry', 'Durian'];
const list = Immutable.List(array);

console.log('list', list.toJS());

// find
const listFind = list.find(item => item[0].toLowerCase() === 'b');
console.log('item with b', listFind);

// find index
const listFindIndex = list.findIndex(item => item[0].toLowerCase() === 'b');
console.log('index item with b', listFindIndex);

// findEntry
const listFindEntry = list.findEntry(item => item[0].toLowerCase() === 'b');
console.log('b: index – ' + listFindEntry[0] + ' value – ' + listFindEntry[1]);