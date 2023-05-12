let locked = false;

async function pigeonholeSort(arr, n) {
    await selectedLine(1);
    await disabledLine(1);
    let min = Number(arr[0].innerHTML);
    await selectedLine(2);
    await disabledLine(2);
    let max = Number(arr[0].innerHTML);
    await selectedLine(3);
    await disabledLine(3);
    let range;
    await selectedLine(4);
    await disabledLine(4);
    for (let i = 0; i < n; i++) {
        await selectedLine(5);
        while (isPaused) await sleep(100);
        let pigeon = arr[i];
        await selectedLine(6);
        let pigeonValue = Number(pigeon.innerHTML);
        await selectedLine(7);
        if (pigeonValue > max) max = pigeonValue;
        await selectedLine(8);
        if (pigeonValue < min) min = pigeonValue;
        await selectedLine(9);
        // fillBlock(pigeon, "transparent", "white");
        if (!pigeon.classList.contains("marked")) {
            await selectedLine(10);
            pigeon.style.transform = "translateY(-3px)";
            await selectedLine(11);
            await sleep(200 / speed);
            pigeon.style.transform = "translateY(3px)";
            await selectedLine(12);
        }
        await selectedLine(13);
        pigeon.classList.add("marked");
        $('.line-14').removeClass('selected');
    } 
    $('.line-15').addClass('selected');
    await disabledLine(5);
    await disabledLine(6);
    await disabledLine(7);
    await disabledLine(8);
    await disabledLine(9);
    await disabledLine(10);
    await disabledLine(11);
    await disabledLine(12);
    await disabledLine(13);
    await disabledLine(14);
    await sleep(200);
    await selectedLine(15);
    await disabledLine(15);
    await createLabel();
    await selectedLine(16);
    await disabledLine(16);
    await getData(min, max, max - min + 1);
    await selectedLine(17);
    await disabledLine(17);
    while (isPaused) await sleep(100);
    if ($('.algo-trace-holes.created').length == 0) {
        await selectedLine(18);
        await disabledLine(18);
        range = max - min + 1;
        await selectedLine(19);
        await disabledLine(19);
        await drawHoles(range);
        await selectedLine(20);
        await disabledLine(20);
        $(".algo-trace-holes").addClass("created");
        await selectedLine(21);
        await disabledLine(21);
    }
    await selectedLine(22);
    await disabledLine(22);
    while (isPaused) await sleep(100);
    await sleep(100 / speed);
    if ($('.algo-trace-holes.filled').length == 0) {
        await selectedLine(23);
        await disabledLine(23);
        await createSelectionLabel();
        await selectedLine(24);
        await disabledLine(24);
        for (i = 0; i < n; i++) {
            await selectedLine(25);
            await disabledLine(25);
            var pigeon = arr[i];
            await selectedLine(26);
            var pigeonValue = Number(pigeon.innerHTML);
            await selectedLine(27);
            var holeNumber = Number(pigeon.innerHTML) - min;
            await selectedLine(28);
            while (isPaused) await sleep(100);
            if (!pigeon.classList.contains("in-hole")) {
                await selectedLine(29);
                await getSelection(pigeonValue, min);
                await selectedLine(30);
                putInHole(pigeon, holeNumber);
                $('.line-31').removeClass('selected');
                await sleep(2000 / speed);
            }
        }
        $('.line-32').addClass('selected');
        await disabledLine(26);
        await disabledLine(27);
        await disabledLine(28);
        await disabledLine(29);
        await disabledLine(30);
        await disabledLine(31);
        await sleep(200);
        await selectedLine(32);
        await disabledLine(32);
        await selectedLine(33);
        await disabledLine(33);
        $(".algo-trace-holes").addClass("filled");
        await selectedLine(34);
        await disabledLine(34);
    }
    await selectedLine(35);
    await disabledLine(35);
    await $('.key-selection-label').fadeOut();
    await $('.key-selection-label').addClass('d-none');
    await $('.key-selection').fadeOut();
    await $('.key-selection').addClass('d-none');
    if (!isPaused) takePigeon();
}