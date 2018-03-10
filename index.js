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
console.log('get name', map.getIn(['user1', 'name']));
// set
const mapSet = map.setIn(['user1', 'name'], 'Andy');
console.log('map set', mapSet.toJS());
// delete
const mapDelete = map.delete('user1');
console.log('map delete', mapDelete.toJS());
// update
const mapUpdate = map.update('list', list => list.map(item => item + '💩'));
console.log('map update', mapUpdate.toJS());
// clear
const mapClear = map.clear();
console.log('map clear', mapClear.toJS());
// merge
const additionalData = {
    user3: {
        name: 'Veronika',
        surname: 'Kopchuk'
    }
};
const mapMerge = map.merge(additionalData);
console.log('map merge', mapMerge.toJS());