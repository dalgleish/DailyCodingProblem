
/**
 * TODO:
 *  Testing
 *  Debugging
 */

function reverseList(head) {
    let prev = null;
    let curr = head;

    while(curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
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

function traverseList(head, reportNode) {
    if (head === null) {
        return;
    }
    let node = head;
    while (node !== null) {
        reportNode(node);
        node = node.next;
    }
}

function printList(head) {
    let output = '';
    traverseList(head, (node) => {
        output = `${output}→${node.value}`;
    })

    // Remove leading "→"
    output = output.slice(1)

    console.log(output);
}

function testReverseList(values) {
    let head = makeList(values);
    let newHead = reverseList(head);
    printList(newHead);
}

testReverseList([]);
testReverseList([1]);
testReverseList([1,2]);
testReverseList([1,2,3]);
testReverseList([1,2,3,4,5,6]);
testReverseList([1,2,3,4,5,6,7]);
