// create Map from an object
const data = {
    todo1: {
        name: 'Todo 1',
        value: 'Make it happen'
    },
    todo2: {
        name: 'Todo 2',
        value: 'Make it happer'
    }
};

const map = Immutable.Map(data);

console.log('todo1', map.get('todo1'));
console.log('todo2', map.get('todo2'));