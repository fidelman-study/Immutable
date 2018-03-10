// plain array
const array = [1,2];
const newArray = array;
newArray[0] = 3;
console.log('plain JS array', array[0] === 1);

// immutable List
const immutableList = Immutable.List([1,2]);
const immutableList2 = immutableList;
immutableList2.set(0, 3);
console.log('Immutable', immutableList.get(0) === 1);