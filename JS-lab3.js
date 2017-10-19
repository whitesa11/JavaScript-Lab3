// Q1 a.

var arr = ['dog', 'cat', 'deer'];
var result = arr[0] + arr[2];
document.getElementById("qa1-a").innerHTML = result;
;

// Q1 b.
var girls=["cecilie","Lone"];
var boys = ["Emil", "Tobias", "Linus"];
var children = girls.concat(boys);
document.getElementById("demo").innerHTML = children;


// Q2.
var sumArray  = function(arr) {
    return arr.reduce(function(prev, current, i, arr) {
        return prev+current;
    });
};

var a = [1, 2, 3, 4, 5];
var b = [2, 3, 4, 5, 6];
var c = [3, 4, 5, 6, 7];
var d = [4, 5, 6, 7, 8];
var e = [5, 6, 7, 8, 9];
var sum = sumArray(a)+sumArray(b)+sumArray(c)+sumArray(d)+sumArray(e);
document.getElementById("sum").innerHTML = sum;


// Q3.a,b
tiles = [];

window.onload = function() {
    // var  = document.getElementById('board');
    startGame();
} 

    function startGame(){
        countUpValue = 0;
            let countText = 'Moves: ' + countUpValue;
    document.getElementById("counter").innerHTML=countText;
            startTimer();
    
    var arr = ['', '1', '2', '3', '4', '5', '6', '7', '8'];
    // shuffle
    shuffle(arr);
    var panel = document.getElementById('board');
    panel.innerHTML = "";
    
    tiles = [];

    // create div element
    for (i = 0; i < 9; i++){
        var div = document.createElement('div');
        div.className = 'tile';
        div.index = i;
        div.textContent = arr[i];
        div.onclick = click;
        div.onmouseover = mouseover;
        div.onmouseout = mouseout;
        panel.appendChild(div);
        tiles.push(div);
    }
    }

	// function for shuffle
	function shuffle(arr) {
    var n = arr.length;
    var temp, i;

    while (n) {
        i = Math.floor(Math.random() * n--);
        temp = arr[n];
        arr[n] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

	// swap textContent
	function swapContent(i, k){
        //add 1
    countUpValue++;
    //appear html
    let countText = 'Moves: ' + countUpValue;
    document.getElementById("counter").innerHTML=countText;
    	var temp = tiles[i].textContent;
    	tiles[i].textContent = tiles[k].textContent;
    	tiles[k].textContent = temp;
    
}
function mouseout(e) {
    e.target.className = "tile";
}
function mouseover(e) {
    var i = e.target.index;
    let canBeMoved = false;

    if (i <= 5 && tiles[i + 3].textContent == '' ){
        canBeMoved = true;
    }else if ( i >= 3 && tiles[i - 3].textContent == ''){
        canBeMoved = true;
    }else if (i % 3 !== 2 && tiles[i + 1].textContent == ''){
        canBeMoved = true;
    }else if (i % 3 !== 0 && tiles[i - 1].textContent == ''){
        canBeMoved = true;
    }
    if (canBeMoved) {
        e.target.className = "tile can-be-moved";
    } else {
        e.target.className = "tile cannot-be-moved";
    }
}

// Onclick
function click(e) {
    
    var i = e.target.index;

    if (i <= 5 && tiles[i + 3].textContent == '' ){
        // swap bottom
        swapContent(i, i + 3);
    }else if ( i >= 3 && tiles[i - 3].textContent == ''){
        // swap top
        swapContent(i, i - 3);
    }else if (i % 3 !== 2 && tiles[i + 1].textContent == ''){
        // swap right
        swapContent(i, i + 1);
    }else if (i % 3 !== 0 && tiles[i - 1].textContent == ''){
        // swap left
        swapContent(i, i - 1);
    }
    answer = ['', '1', '2', '3', '4', '5', '6', '7', '8'];
    if (JSON.stringify(arr)==JSON.stringify(answer)) {
        setEndTime();
    }
}

// Q13.c
//counter initial value
var countUpValue = 0;

// Q13.d
var timer1;
var startTime, nowTime;
var btnStart = document.getElementById('counter');

// start
function startTimer(){
    var re = document.getElementById('start-time');
    startTime = new Date();

    re.innerHTML = 'Start Time: ' + startTime.toTimeString().split(' ')[0];
};

function setEndTime(){
    var re = document.getElementById('end-time');
    endTime = new Date();

    re.innerHTML = 'End Time: ' + endTime.toTimeString().split(' ')[0];
};

// function setTimer(){
//     timer1 = setInterval(showSecond, 1000);
// }

// function showSecond(){
//     nowTime = new Date();

//     var elapsedTime = Math.floor((nowTime - startTime) / 1000);
//     var str = '経過秒数: ' + elapsedTime + '秒';

//     var re = document.getElementById('start-time');
//     re.innerHTML = str;
// }