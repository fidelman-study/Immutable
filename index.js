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

// map
const mapNames = map.map(item => item.get('name'));
console.log('map', mapNames.toJS());
// filter
const mapAndrei = map.filter(item => item.includes('Andrei'));
console.log('filter', mapAndrei.toJS());
// map set
const mapFidelman = map.map(item => item.set('surname','Fidelman'));
console.log('map set', mapFidelman.toJS());
// groupBy
const mapGroup = map.groupBy(item => item.get('surname'));
console.log('group', mapGroup.toJS());