var I = function (d) { return d; };
var data = [];
var algoTracerItems;

function createElement(pigeon, width, height, marginLeft, marginTop, data, type) {
    pigeon.classList.add(`algo-trace-${type}`, "d-flex", "justify-content-center", "align-items-center");
    pigeon.style.width = width;
    pigeon.style.height = height;
    pigeon.style.marginLeft = marginLeft;
    pigeon.style.marginTop = marginTop;
    pigeon.textContent = data;
}

function fillElement(pigeon, backgroundColor, dataColor, border) {
    pigeon.style.backgroundColor = backgroundColor;
    pigeon.style.color = dataColor;
    pigeon.style.border = border;
}

async function importData() {
    let inputData = document.querySelector('#input-data').value;
    data = inputData.split(',').map(x => (+x));
    // var svg = d3.select("svg");
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
        createElement(pigeon, "40px", "40px", "8px", "8px", data[i], "item");
        fillElement(pigeon, "white", "black", "1px solid black");
        pigeon.classList.add(`pigeon-${data[i]}`, ".algo-trace-item");
        pigeonArray.appendChild(pigeon);
        await sleep(100);
    }

    // var algoTracerArray = d3.select(".algo-trace-array")
    // algoTracerArray.selectAll(".algo-trace-item")
    //     .data(data, I)
    //     .enter()
    //     .append("div")
    //     .classed("algo-trace-item", true)
    //     .classed("d-flex", true)
    //     .classed("justify-content-center", true)
    //     .classed("align-items-center", true)
    //     .style("width", "40px")
    //     .style("height", "40px")
    //     .style("background-color", "white")
    //     .style("margin-left", "8px")
    //     .style("margin-top", "8px")
    //     .style("color", "black")
    //     .style("border", "1px solid black")
    //     .text(function (d, i) { return d; });
    algoTracerItems = document.querySelectorAll('.algo-trace-item');
    // var pigeonList = document.querySelectorAll(".algo-trace-item");
    // for (let i = 0; i < pigeonList.length; i++) {
    //     pigeonList[i].classList.add(`pigeon-${Number(pigeonList[i].innerHTML)}`);
    // }
}

async function drawHoles(range) {
    // var holes = [];
    // for (var i = 0; i < range; i++) {
    //     holes[i] = i;
    // }

    let holes = document.querySelector('.algo-trace-holes');
    for (let i = 0; i < range; i++) {
        let hole = document.createElement("div");
        hole.classList.add(`hole-${i}`, ".algo-trace-hole", "d-flex");
        holes.appendChild(hole);

        let index = document.createElement("div");
        createElement(index, "40px", "40px", "8px", "8px", i, "index");
        fillElement(index, "white", "black");
        hole.appendChild(index);
        await sleep(100);
    }

    // var count = 0;
    // var algoTracerHoles = d3.select(".algo-trace-holes")
    // algoTracerHoles.selectAll(".algo-trace-index")
    //     .data(holes)
    //     .enter()
    //     .append("div")
    //     .classed("algo-trace-hole", true)
    //     .classed("d-flex", true)
    //     .append("div")
    //     .classed("algo-trace-index", true)
    //     .classed("d-flex", true)
    //     .classed("justify-content-center", true)
    //     .classed("align-items-center", true)
    //     .style("width", "40px")
    //     .style("height", "40px")
    //     .style("background-color", "white")
    //     .style("margin-left", "8px")
    //     .style("margin-top", "8px")
    //     .style("color", "black")
    //     .text(function (d, i) { return d; });

    // var holeList = document.querySelectorAll(".algo-trace-hole");
    // for (let i = 0; i < holeList.length; i++) {
    //     holeList[i].classList.add(`hole-${i}`);
    // }
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
    // hole.append(pigeon);
    // console.log(pigeon);
    // var hole = d3.select(`hole-${holeNumber}`)
    //     .append("div")
    //     .classed("algo-trace-index", true)
    //     .classed("d-flex", true)
    //     .classed("justify-content-center", true)
    //     .classed("align-items-center", true)
    //     .style("width", "40px")
    //     .style("height", "40px")
    //     .style("background-color", "white")
    //     .style("margin-left", "8px")
    //     .style("color", "black")
    //     .text(value);
    // console.log(hole);
}

async function sorting() {
    var arrayList = document.querySelector(".algo-trace-array");
    var holesList = document.querySelector(".algo-trace-holes");
    for (var i = 0; i < holesList.childElementCount; i++) {
        var hole = document.querySelector(`.hole-${i}`);
        // if (hole.hasChildNodes()) {
        var holePigeon = hole.children;
        var length = holePigeon.length;

        for (var j = 1; j < length; j++) {
            moveAnimate(holePigeon[1], arrayList);
            // arrayList.append(holePigeon[1]);
            await sleep(1000);
        }
        // }
    }
}

async function run() {
    pigeonhole_sort(algoTracerItems, algoTracerItems.length);
}




