
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

function test(str){
    const stack = [];
    let index = 0;
    let length = str.length
    while(index < length){
        let char = str[index];
        
    }
}

testValid("{}");
testValid("[]");
testValid("()");
testValid("([{}])");
testInvalidValid("())");
testInvalidValid("(()");
testInvalidValid("[}]");
testInvalidValid("{[()][]{}");