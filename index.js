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
    list: [
        1, 2, 3
    ]
};

const map = Immutable.fromJS(data); // transform to Map/List the whole object

// get
console.log('get', map.get('user1').toJS());
// getIn
console.log('get it', map.getIn(['user1', 'name']));
// has
console.log('has', map.has('list')); // keys
// has in
console.log('has in', map.hasIn(['user1', 'name']));
// includes
console.log('includes', map.get('list').includes(3));
// first
console.log('first', map.first().toJS());
// last
console.log('last', map.last().toJS());
// find
console.log('find', map.find(value => value.includes('Andrei')).toJS());