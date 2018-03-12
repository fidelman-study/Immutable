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
    }
};

const data2 = {
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

const data3 = {
    user1: {
        name: 'Andrei',
        surname: 'Fidelman'
    },
    user2: {
        name: 'Karina',
        surname: 'Anisimova'
    }
};

const map1 = Immutable.fromJS(data1);
const map2 = Immutable.fromJS(data2);
const map3 = Immutable.fromJS(data3);

// plain comparison
console.log('plain comparison', map1 === map2);
// Immutable.is comparison
console.log('Immutable.is comparison', Immutable.is(map1, map2));
// Subset comparison
console.log('Subset', map3.isSubset(map1));
// Superset comparison
console.log('Superset', map1.isSuperset(map3));