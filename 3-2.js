
/**
 * TODO:
 *  Testing
 *  Debugging
 */

function toString(list) {
    let head = list;
    let str = '';

    while (head !== null) {
        str = `${head.value}${str}`;
        head = head.next;
    }
    return str;
}

function sumLists(list1, list2) {
    let num1 = parseInt(toString(list1), 10);
    let num2 = parseInt(toString(list2), 10);

    return num1 + num2;
}

function makeList(values = []) {
    let current = {
        value: values.shift(),
        next: null
    };

    const head = current;

    values.forEach(value => {
        next = {
            value,
            next: null
        }
        current.next = next;
        current = next;
    });

    return head;
}

function testSumLists(values1, values2) {
    let list1 = makeList(values1);
    let list2 = makeList(values2);
    let sum = sumLists(list1, list2);
    console.log(sum);
}


testSumLists([1], [2]); // 3
testSumLists([1,2], [2,1]); // 33
testSumLists([1,2,3], [4,5]); // 375
