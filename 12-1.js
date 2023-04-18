function move(from, to) {
    console.log(`Move ${from} ${to}`)
}

function towers_of_hanoi(n, source, spare, target) {
    if (n >= 1) {
        // Move n-1 from source to spare
        towers_of_hanoi(n-1, source, target, spare)
        move(source, target)
        // Move n-1 from spare to target
        towers_of_hanoi(n-1, spare, source, target)
    }
}

towers_of_hanoi(5, source='1', spare='2', target='3')
