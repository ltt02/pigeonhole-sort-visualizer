function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pigeonholeSort(arr, n) {
    let min = Number(arr[0].innerHTML);
    let max = Number(arr[0].innerHTML);
    let range, i, j, index;

    for (let i = 0; i < n; i++) {
        let pigeonValue = Number(arr[i].innerHTML);
        if (pigeonValue > max)
            max = pigeonValue;
        if (pigeonValue < min)
            min = pigeonValue;
        fillBlock(arr[i], "gray", "white");
        await sleep(200);
    }

    range = max - min + 1;
    drawHoles(range);
    await sleep(100);

    for (i = 0; i < n; i++) {
        let pigeonValue = Number(arr[i].innerHTML);
        let holeNumber = Number(arr[i].innerHTML) - min;
        putInHole(pigeonValue, holeNumber);
        await sleep(2000);
    }
    takePigeon();
}