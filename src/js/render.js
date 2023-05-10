var data = [];
var algoTracerItems;

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function createBlock(pigeon, width, height, marginLeft, marginTop, marginBottom, data, type) {
    pigeon.classList.add(`algo-trace-${type}`, "d-flex", "justify-content-center", "align-items-center");
    pigeon.style.width = width;
    pigeon.style.height = height;
    pigeon.style.marginLeft = marginLeft;
    pigeon.style.marginTop = marginTop;
    pigeon.style.marginBottom = marginBottom;
    pigeon.textContent = data;
}

function fillBlock(pigeon, backgroundColor, dataColor, border) {
    pigeon.style.backgroundColor = backgroundColor;
    pigeon.style.color = dataColor;
}

async function importData() {
    let inputData = document.querySelector('#input-data').value;
    data = inputData.split(',').map(x => (+x));
    let pigeonArray = document.querySelector(".algo-trace-array");
    for (let i = 0; i < data.length; i++) {
        let pigeon = document.createElement("div");
        createBlock(pigeon, "50px", "50px", "8px", "8px", "8px", data[i], "item");
        fillBlock(pigeon, "transparent", "black", "1px solid black");
        pigeon.classList.add(`pigeon-${data[i]}`, `index-${i}`);
        pigeonArray.appendChild(pigeon);
        await sleep(100 / speed);
    }
    algoTracerItems = document.querySelectorAll('.algo-trace-item');
}

async function createLabel() {
    let maxLabel = document.querySelector(".max-label");
    let minusLabel = document.querySelector(".minus-label");
    let minLabel = document.querySelector(".min-label");
    let plusLabel = document.querySelector(".plus-label");
    let blank1Label = document.querySelector(".blank-1-label");
    let equalLabel = document.querySelector(".equal-label");
    let blankRangeLabel = document.querySelector(".blank-range-label");
    let rangeLabel = document.querySelector(".range-label");

    createBlock(maxLabel, "50px", "50px", "8px", "8px", "8px", "MAX", "blank");
    fillBlock(maxLabel, "transparent", "black", "1px solid black");
    maxLabel.style.fontWeight = 1000;
    createBlock(minusLabel, "50px", "50px", "8px", "8px", "8px", "", "blank");
    createBlock(minLabel, "50px", "50px", "8px", "8px", "8px", "MIN", "blank");
    fillBlock(minLabel, "transparent", "black", "1px solid black");
    minLabel.style.fontWeight = 1000;
    createBlock(plusLabel, "50px", "50px", "8px", "8px", "8px", "", "blank");
    createBlock(blank1Label, "50px", "50px", "8px", "8px", "8px", "", "blank");
    createBlock(equalLabel, "50px", "50px", "8px", "8px", "8px", "", "blank");
    createBlock(blankRangeLabel, "50px", "50px", "8px", "8px", "8px", "", "blank");
    createBlock(rangeLabel, "50px", "50px", "8px", "8px", "8px", "HOLES", "blank");
    fillBlock(rangeLabel, "transparent", "black", "1px solid black");
    rangeLabel.style.fontWeight = 1000;
}

async function createSelectionLabel() {
    let pigeonLabel = document.querySelector(".pigeon-selected-label");
    let minusLabel = document.querySelector(".minus-selection-label");
    let minLabel = document.querySelector(".min-selection-label");
    let equalLabel = document.querySelector(".equal-selection-label");
    let holeLabel = document.querySelector(".hole-selected-label");

    createBlock(pigeonLabel, "50px", "50px", "8px", "8px", "8px", "PIGEON", "blank");
    fillBlock(pigeonLabel, "transparent", "black", "1px solid black");
    pigeonLabel.style.fontWeight = 1000;

    createBlock(minusLabel, "50px", "50px", "8px", "8px", "8px", "", "blank");

    createBlock(minLabel, "50px", "50px", "8px", "8px", "8px", "MIN", "blank");
    fillBlock(minLabel, "transparent", "black", "1px solid black");
    minLabel.style.fontWeight = 1000;

    createBlock(equalLabel, "50px", "50px", "8px", "8px", "8px", "", "blank");

    createBlock(holeLabel, "50px", "50px", "8px", "8px", "8px", "HOLE", "blank");
    fillBlock(holeLabel, "transparent", "black", "1px solid black");
    holeLabel.style.fontWeight = 1000;
}

async function getSelection(pigeonValue, minValue) {
    let pigeonSelected = document.querySelector(".pigeon-selected");
    let minusSelection = document.querySelector(".minus-selection");
    let minSelection = document.querySelector(".min-selection");
    let equalSelection = document.querySelector(".equal-selection");
    let holeSelected = document.querySelector(".hole-selected");
    createBlock(pigeonSelected, "50px", "50px", "8px", "8px", "8px", pigeonValue, "item");
    fillBlock(pigeonSelected, "transparent", "black", "1px solid black");
    pigeonSelected.style.fontWeight = 1000;
    createBlock(minusSelection, "50px", "50px", "8px", "8px", "8px", "-", "operator");
    minusSelection.style.fontWeight = 1000;
    createBlock(minSelection, "50px", "50px", "8px", "8px", "8px", minValue, "item");
    fillBlock(minSelection, "transparent", "black", "1px solid black");
    createBlock(equalSelection, "50px", "50px", "8px", "8px", "8px", "=", "operator");
    equalSelection.style.fontWeight = 1000;
    createBlock(holeSelected, "50px", "50px", "8px", "8px", "8px", pigeonValue - minValue, "index");
    fillBlock(holeSelected, "transparent", "black", "1px solid black");
    holeSelected.style.fontWeight = 1000;
}

async function getData(minValue, maxValue, rangeValue) {
    let max = document.querySelector(".max");
    let minus = document.querySelector(".minus");
    let min = document.querySelector(".min");
    let plus = document.querySelector(".plus");
    let blank1 = document.querySelector(".blank-1");
    let equal = document.querySelector(".equal");
    let blankRange = document.querySelector(".blank-range");
    let range = document.querySelector(".range");

    createBlock(max, "50px", "50px", "8px", "8px", "8px", maxValue, "item");
    fillBlock(max, "transparent", "black", "1px solid black");
    await sleep(250);
    createBlock(minus, "50px", "50px", "8px", "8px", "8px", "-", "operator");
    minus.style.fontWeight = 1000;
    await sleep(250);
    createBlock(min, "50px", "50px", "8px", "8px", "8px", minValue, "item");
    fillBlock(min, "transparent", "black", "1px solid black");
    await sleep(250);
    createBlock(plus, "50px", "50px", "8px", "8px", "8px", "+", "operator");
    plus.style.fontWeight = 1000;
    await sleep(250);
    createBlock(blank1, "50px", "50px", "8px", "8px", "8px", 1, "blank");
    blank1.style.fontWeight = 1000;
    await sleep(250);
    createBlock(equal, "50px", "50px", "8px", "8px", "8px", "=", "operator");
    equal.style.fontWeight = 1000;
    await sleep(250);
    createBlock(blankRange, "50px", "50px", "8px", "8px", "8px", `${rangeValue} x`, "blank-range");
    blankRange.style.fontWeight = 1000;
    await sleep(250);
    createBlock(range, "50px", "50px", "8px", "8px", "8px", "", "index");
    await sleep(250);
}

async function drawHoles(range) {
    let holes = document.querySelector('.algo-trace-holes');
    for (let i = 0; i < range; i++) {
        let hole = document.createElement("div");
        hole.classList.add(`hole-${i}`, ".algo-trace-hole", "d-flex");
        holes.appendChild(hole);

        let index = document.createElement("div");
        createBlock(index, "50px", "50px", "8px", "8px", "8px", i, "index");
        fillBlock(index, "transparent", "black");
        hole.appendChild(index);
    }
}

function moveAnimate(element, newParent,
    slideAnimationSpeed/*=800*/, spacerAnimationSpeed/*=600*/) {
    //Allow passing in either a jQuery object or selector
    if (!element.classList.contains('in-hole')) {
        element = $(element);
        newParent = $(newParent);
        slideAnimationSpeed = slideAnimationSpeed || 800;
        spacerAnimationSpeed = spacerAnimationSpeed || 600;

        var oldOffset = element.offset();
        var tempOutgoing = element.clone().insertAfter(element);
        tempOutgoing.hide(); //Don't take up space yet so 'newOffset' can be calculated correctly
        element.appendTo(newParent);
        var newOffset = element.offset();

        var tempMover = element.clone().appendTo('body');
        tempMover.css({
            'position': 'absolute',
            'left': oldOffset.left,
            'top': oldOffset.top,
            'z-index': 1000,
            'margin': 0 //Necessary for animation alignment if the source element had margin
        });

        element.hide();
        element.show(spacerAnimationSpeed).css('visibility', 'hidden'); //Smoothly grow space at the target

        tempMover.animate({ 'top': newOffset.top, 'left': newOffset.left }, slideAnimationSpeed, function () {
            element.css('visibility', 'visible');
            tempMover.remove();
        });
        tempOutgoing.show().css('visibility', 'hidden');
        tempOutgoing.hide(spacerAnimationSpeed, function () { tempOutgoing.remove() }); //smoothly shrink space at the source
    }
}

function putInHole(pigeon, holeNumber) {
    var hole = document.querySelector(`.hole-${holeNumber}`);
    moveAnimate(pigeon, hole);
    pigeon.classList.add('in-hole');
}

// async function putInHole(min) {
//     if ($('.algo-trace-holes.filled').length == 0) {
//         var arrayList = document.querySelector(".algo-trace-array");
//         var pigeons = arrayList.children;
//         for (let i = 0; i < arrayList.childElementCount; i++) {
//             while (isPaused) {
//                 await sleep(100);
//             }
//             var pigeon = pigeons[i];
//             var holeNumber = Number(pigeon.innerHTML) - min;

//             if (!pigeon.classList.contains('in-hole')) {
//                 var hole = document.querySelector(`.hole-${holeNumber}`);
//                 moveAnimate(pigeon, hole);
//                 await sleep(2000 / speed);
//             }
//         }
//         $(".algo-trace-holes").addClass("filled");
//     }
// }

async function takePigeon() {
    var arrayList = document.querySelector(".algo-trace-array");
    var holesList = document.querySelector(".algo-trace-holes");
    for (var i = 0; i < holesList.childElementCount; i++) {
        var hole = document.querySelector(`.hole-${i}`);
        var holePigeon = hole.children;
        var length = holePigeon.length;

        for (var j = 1; j < length; j++) {
            while (isPaused) await sleep(100);
            holePigeon[1].classList.remove('in-hole');
            moveAnimate(holePigeon[1], arrayList);
            await sleep(2000 / speed);
        }
    }
}


async function selectedLine(lineNumber) {
    // if (!$(`.line-${lineNumber}`).hasClass('locked')) {
    $(`.line-${lineNumber}`).removeClass('selected');
    // $(`.line-${lineNumber}`).addClass('locked');
    $(`.line-${lineNumber + 1}`).addClass('selected');
    await sleep(200);
    // }
}

// async function selectedLineWith2Lock(lineNumber) {
//     if (!$(`.line-${lineNumber}`).hasClass('locked')) {
//         $(`.line-${lineNumber}`).addClass('locked');
//     }
//     if (!$(`.line-${lineNumber}`).hasClass('locked2')) {
//         $(`.line-${lineNumber}`).removeClass('selected');
//         $(`.line-${lineNumber}`).addClass('locked2');
//         $(`.line-${lineNumber + 1}`).addClass('selected');
//         await sleep(200);
//     }
// }