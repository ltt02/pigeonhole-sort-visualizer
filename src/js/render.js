var data = [];
var algoTracerItems;

function createBlock(pigeon, width, height, marginLeft, marginTop, data, type) {
    pigeon.classList.add(`algo-trace-${type}`, "d-flex", "justify-content-center", "align-items-center");
    pigeon.style.width = width;
    pigeon.style.height = height;
    pigeon.style.marginLeft = marginLeft;
    pigeon.style.marginTop = marginTop;
    pigeon.textContent = data;
}

function fillBlock(pigeon, backgroundColor, dataColor, border) {
    pigeon.style.backgroundColor = backgroundColor;
    pigeon.style.color = dataColor;
    pigeon.style.border = border;
}

async function importData() {
    let inputData = document.querySelector('#input-data').value;
    data = inputData.split(',').map(x => (+x));
    // svg.selectAll("rect")
    //     .data(data, I)
    //     .enter().append("g")
    //     .append("rect")
    //     .attr("x", function (d, i) { return i * 50 + 50 })
    //     .attr("y", 100)
    //     .attr("width", 40)
    //     .attr("height", 40)
    //     .style("stroke", "black")
    //     .style("fill", "white")

    // svg.selectAll("g")
    //     .append("text")
    //     .attr("x", function (d, i) { return i * 50 + 64 })
    //     .attr("y", 125)
    //     .attr("stroke", "black")
    //     .attr("font-size", 12)
    //     .attr("text-align", "center")
    //     .text(function (d, i) { return d; });
    let pigeonArray = document.querySelector(".algo-trace-array");
    for (let i = 0; i < data.length; i++) {
        let pigeon = document.createElement("div");
        createBlock(pigeon, "40px", "40px", "8px", "8px", data[i], "item");
        fillBlock(pigeon, "white", "black", "1px solid black");
        pigeon.classList.add(`pigeon-${data[i]}`, ".algo-trace-item");
        pigeonArray.appendChild(pigeon);
        await sleep(100);
    }
    algoTracerItems = document.querySelectorAll('.algo-trace-item');
}

async function drawHoles(range) {
    let holes = document.querySelector('.algo-trace-holes');
    for (let i = 0; i < range; i++) {
        let hole = document.createElement("div");
        hole.classList.add(`hole-${i}`, ".algo-trace-hole", "d-flex");
        holes.appendChild(hole);

        let index = document.createElement("div");
        createBlock(index, "40px", "40px", "8px", "8px", i, "index");
        fillBlock(index, "white", "black");
        hole.appendChild(index);
    }
}

function moveAnimate(element, newParent,
    slideAnimationSpeed/*=800*/, spacerAnimationSpeed/*=600*/) {
    //Allow passing in either a jQuery object or selector
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

function putInHole(value, holeNumber) {
    var hole = document.querySelector(`.hole-${holeNumber}`);
    var pigeon = document.querySelector(`.pigeon-${value}`);
    moveAnimate(pigeon, hole);
}

async function takePigeon() {
    var arrayList = document.querySelector(".algo-trace-array");
    var holesList = document.querySelector(".algo-trace-holes");
    for (var i = 0; i < holesList.childElementCount; i++) {
        var hole = document.querySelector(`.hole-${i}`);
        var holePigeon = hole.children;
        var length = holePigeon.length;

        for (var j = 1; j < length; j++) {
            moveAnimate(holePigeon[1], arrayList);
            await sleep(1000);
        }
    }
}

async function run() {
    pigeonholeSort(algoTracerItems, algoTracerItems.length);
}




