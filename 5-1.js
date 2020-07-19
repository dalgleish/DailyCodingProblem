const map = {};
const values = [];
const MAX = 3;

function removeOldest() {
    let oldestKey = values.pop();
    delete map[oldestKey];
}
function insert(key) {
    values.unshift(key);
}

function isFull() {
    return values.length === MAX;
}

function set(key, value) {
    if (map[key]) {
        // Already in cache
        return;
    }
    if (isFull()) {
        removeOldest();
    }

    insert(key);
    map[key] = value;
}

function get(key) {
    let value = map[key];
    return value ? value : null;
}

function testSet(key, value) {
    console.log(`SET ${key}: ${value}`)
    set(key, value);
}

function testGet(...keys) {
    keys.forEach(key => {
        let value = get(key);
        console.log(`GET ${key}: ${value}`);
    });
    console.log('\n');
}


testSet('a', 1);
testGet('a');

testSet('b', 2);
testGet('a', 'b');

testSet('c', 3);
testSet('c', 3);
testGet('a', 'b', 'c');

testSet('d', 4);
testGet('a', 'b', 'c', 'd');

testSet('e', 5);
testGet('a', 'b', 'c', 'd', 'e');