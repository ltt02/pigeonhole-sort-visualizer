var I = function (d) { return d; };
var data = [];
var algoTracerItems;


function importData() {
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
    var algoTracerArray = d3.select(".algo-trace-array")
    algoTracerArray.selectAll(".algo-trace-item")
        .data(data, I)
        .enter()
        .append("div")
        .classed("algo-trace-item", true)
        .classed("d-flex", true)
        .classed("justify-content-center", true)
        .classed("align-items-center", true)
        .style("width", "40px")
        .style("height", "40px")
        .style("background-color", "white")
        .style("margin-left", "8px")
        .style("margin-top", "8px")
        .style("color", "black")
        .style("border", "1px solid black")
        .text(function (d, i) { return d; });
    algoTracerItems = document.querySelectorAll('.algo-trace-item');
    var pigeonList = document.querySelectorAll(".algo-trace-item");
    for (let i = 0; i < pigeonList.length; i++) {
        pigeonList[i].classList.add(`pigeon-${Number(pigeonList[i].innerHTML)}`);
    }
}

function drawHoles(range) {
    var holes = [];
    for (var i = 0; i < range; i++) {
        holes[i] = i;
    }

    var count = 0;
    var algoTracerHoles = d3.select(".algo-trace-holes")
    algoTracerHoles.selectAll(".algo-trace-index")
        .data(holes)
        .enter()
        .append("div")
        .classed("algo-trace-hole", true)
        .classed("d-flex", true)
        .append("div")
        .classed("algo-trace-index", true)
        .classed("d-flex", true)
        .classed("justify-content-center", true)
        .classed("align-items-center", true)
        .style("width", "40px")
        .style("height", "40px")
        .style("background-color", "white")
        .style("margin-left", "8px")
        .style("margin-top", "8px")
        .style("color", "black")
        .text(function (d, i) { return d; });

    var holeList = document.querySelectorAll(".algo-trace-hole");
    for (let i = 0; i < holeList.length; i++) {
        holeList[i].classList.add(`hole-${i}`);
    }
}

function putInHole(value, holeNumber) {
    var hole = document.querySelector(`.hole-${holeNumber}`);
    var pigeon = document.querySelector(`.pigeon-${value}`);
    hole.append(pigeon);
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
            arrayList.append(holePigeon[1]);
            await sleep(500);            
        }
        // }
    }
}

async function run() {
    pigeonhole_sort(algoTracerItems, algoTracerItems.length);
}




