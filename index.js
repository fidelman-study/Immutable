const Immutable = window.Immutable;

const data = {
    user1: {
        name: 'Andrei',
        surname: 'Fidelman'
    },
    user2: {
        name: 'Karina',
        surname: 'Anisimova'
    },
    user3: {
        name: 'Karina',
        surname: 'Fidelman'
    }
};

const map = Immutable.fromJS(data); // transform to Map/List the whole object

// slice
const mapSliced = map.slice(-2); //last 2
console.log('slice', mapSliced.toJS());
// skip
const mapSkipped = map.skip(1); //last 2
console.log('skip', mapSkipped.toJS());
// skip until
const mapSkippedUntil = map.skipUntil(item => item.get('name') !== 'Andrei'); // skip until true
console.log('skip until', mapSkippedUntil.toJS());
// skip while
const mapSkippedWhile = map.skipWhile(item => item.get('name') === 'Andrei'); // skip while true
console.log('skip while', mapSkippedWhile.toJS());
// take
const mapTaken = map.take(2); //first 2
console.log('take', mapTaken.toJS());
// take until
const mapTakenUntil = map.takeUntil(item => item.get('name') !== 'Andrei'); // stop take until false
console.log('take until', mapTakenUntil.toJS());
// take until
const mapTakenWhile = map.takeWhile(item => item.get('name') === 'Andrei'); // stop take while false
console.log('take while', mapTakenWhile.toJS());