function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pigeonhole_sort(arr, n) {
    let min = Number(arr[0].innerHTML);
    let max = Number(arr[0].innerHTML);
    let range, i, j, index;

    for (let a = 0; a < n; a++) {
        if (Number(arr[a].innerHTML) > max)
            max = Number(arr[a].innerHTML);
        if (Number(arr[a].innerHTML) < min)
            min = Number(arr[a].innerHTML);
        arr[a].style.backgroundColor = "blue";
        arr[a].style.color = "white";
        await sleep(100);
    }
    range = max - min + 1;
    drawHoles(range);

    let phole = [];
    for (i = 0; i < n; i++)
        phole[i] = [];
    for (i = 0; i < n; i++) {
        // putInHole(Number(arr[i].innerHTML), Number(arr[i].innerHTML) - min);
        // phole[Number(arr[i].innerHTML) - min]++;
        phole[Number(arr[i].innerHTML) - min].push(Number(arr[i].innerHTML));
    }

    index = 0;
    for (i = 0; i < range; i++) {
        for (j = 0; j < phole[i].length; j++)
            arr[index++].innerHTML = phole[i][j];
    }
    console.log(arr);
}

// Driver Code
// let arr = [8, 3, 2, 7, 4, 6, 8];
// pigeonhole_sort(arr, arr.length);
// for (let i = 0; i < arr.length; i++)
//     console.log(arr[i] + " ");