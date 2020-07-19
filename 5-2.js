function minimumCuts(wall = []) {
    let brickIndex = {};
    wall.forEach(row => {
        let rowIndex = 0;
        let brickLengths = row.slice(0, -1);
        
        brickLengths.forEach(length => {
            rowIndex += length;
            if (brickIndex[rowIndex]) {
                brickIndex[rowIndex] += 1;
            } else {
                brickIndex[rowIndex] = 1;
            }
        });
    });

    let maxCracks = 0;

    Object.values(brickIndex).forEach(crackNumber => {
        maxCracks = Math.max(maxCracks, crackNumber);
    });

    return wall.length - maxCracks;
}

function testMinimumCuts(wall) {
    let cuts = minimumCuts(wall);
    console.log(`${cuts} cuts`);
}

testMinimumCuts([
    [3, 5, 1, 1],
    [2, 3, 3, 2],
    [5, 5],
    [4, 4, 2],
    [1, 3, 3, 3],
    [1, 1, 6, 1, 1]
]);