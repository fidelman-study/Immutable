const Immutable = window.Immutable;

const list = Immutable.List();

// empty
console.log('empty', list.toJS());

// set
const listSet = list.set(1, 'hello');
console.log('set', listSet.toJS());

// push
const listPush = list.push('Number one');
console.log('push', listPush.toJS());