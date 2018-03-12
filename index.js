const Immutable = window.Immutable;

const data1 = {
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
    },
    list: [1,2,3]
};

const map1 = Immutable.fromJS(data1);

// isMap
console.log('isMap', Immutable.Map.isMap(map1));

// isList
console.log('isList', Immutable.List.isList(map1.get('list')));

// convert Map to List
const list = map1.toList();
console.log('list', list.toJS());

// convert List to Map
const newList = Immutable.List.of(1,2,3);
const mapFromList = newList.toMap();
console.log('map', mapFromList.toJS());

// init list as map
const array = [
    1, 2, 3
];

const initedMap = Immutable.fromJS(array, (key, value) => value.toMap());
console.log('init list as map', initedMap.toJS());

// init map as list (nested)
const initedListDeep = Immutable.fromJS(data1, (key, value) => value.toList());
console.log('init map as list deep', initedListDeep.toJS());

// init map as list (nested)
const initedList = Immutable.fromJS(data1).toList();
console.log('init map as list', initedList.toJS());