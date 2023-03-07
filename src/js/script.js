function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pigeonhole_sort(arr, n) {
    let min = Number(arr[0].innerHTML);
    let max = Number(arr[0].innerHTML);
    let range, i, j, index;

    for (let i = 0; i < n; i++) {
        let pigeonValue = Number(arr[i].innerHTML);
        if (pigeonValue > max)
            max = pigeonValue;
        if (pigeonValue < min)
            min = pigeonValue;
        fillElement(arr[i], "gray", "white");
        await sleep(200);
    }

    range = max - min + 1;
    drawHoles(range);
    await sleep(100);

    // let phole = [];
    // for (i = 0; i < n; i++)
    //     phole[i] = [];
    // for (i = 0; i < n; i++) {
    //     // let pigeonValue = Number(arr[i].innerHTML);
    //     // let holeNumber = Number(arr[i].innerHTML) - min;
    //     putInHole(Number(arr[i].innerHTML), Number(arr[i].innerHTML) - min)
    //     await sleep(2000);
    //     // phole[Number(arr[i].innerHTML) - min]++;
    //     // phole[Number(arr[i].innerHTML) - min].push(Number(arr[i].innerHTML));
    // }
    // await sleep(1000);
    // sorting();
    // index = 0;
    // for (i = 0; i < range; i++) {
    //     for (j = 0; j < phole[i].length; j++)
    //         arr[index++].innerHTML = phole[i][j];
    // }
    // console.log(arr);
}

// Driver Code
// let arr = [8, 3, 2, 7, 4, 6, 8];
// pigeonhole_sort(arr, arr.length);
// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i] + " ");