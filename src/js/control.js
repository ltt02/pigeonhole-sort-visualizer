var speed = 1;
var isPaused;
var star, remaining;
var isCodeShow = false;

var speedControl = document.querySelector('#progress');
var playButton = document.querySelector('#play-btn');
var stopButton = document.querySelector('#stop-btn');
var codeToggleButton = document.querySelector('.code-toggle-btn');
var codeToggleIconUp = document.querySelector('.code-toggle-icon-up');
var codeToggleIconDown = document.querySelector('.code-toggle-icon-down');
var codeBlock = document.querySelector('#editor');

speedControl.onchange = () => {
    speed = speedControl.value;
};

playButton.onclick = async () => {    
    isPaused = false;
    stopButton.style.display = 'block';
    playButton.style.display = 'none';
    pigeonholeSort(algoTracerItems, algoTracerItems.length);
}

stopButton.onclick = () => {
    isPaused = true;
    stopButton.style.display = 'none';
    playButton.style.display = 'block';
}

codeToggleButton.onclick = () => {
    isCodeShow = !isCodeShow;
    if (isCodeShow) {
        codeBlock.style.display = 'block';
        if (window.innerWidth >= 1280) codeToggleButton.style.bottom = '448px';
        else codeToggleButton.style.bottom = '360px';
        codeToggleIconUp.style.display = 'none';
        codeToggleIconDown.style.display = 'block';
    }
    else {
        codeBlock.style.display = 'none';
        codeToggleButton.style.bottom = '47px';
        codeToggleIconUp.style.display = 'block';
        codeToggleIconDown.style.display = 'none';
    }
}

async function run() {
    if($('.algo-trace-array.active').length != 0){ // play
        $('.algo-trace-array.active').removeClass('active');
        isPaused = true;
    } else {
        isPaused = false;
    }
    pigeonholeSort(algoTracerItems, algoTracerItems.length);
}