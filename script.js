var game = document.getElementById('game');
var score = document.getElementById('score');
var endscreen = document.getElementById('endscreen');
var startscreen = document.getElementById('startscreen');
var countDwn = document.getElementById('countDwn');
var count = document.getElementById('count');
var sc = document.getElementById('sc');
var tt = document.getElementById('tm')
var timin = document.getElementById('timng');
var btns = [];

btns[0] = document.getElementById('b1');
btns[1] = document.getElementById('b2');
btns[2] = document.getElementById('b3');
btns[3] = document.getElementById('b4');
btns[4] = document.getElementById('b5');
btns[5] = document.getElementById('b6');
btns[6] = document.getElementById('b7');
btns[7] = document.getElementById('b8');
btns[8] = document.getElementById('b9');

var tim = 1000;
var chek;
var mathnum;
var scorenum = 0;
var me;
var thetime;

game.addEventListener('click', function(x) {
	var div = x.target;
	var timout;
	
	if (div.tagName == 'DIV') {
		//click ...
		if (div.classList.contains('red')) {
			clearTimeout(me);
			chek = false;
			div.className = "white";
			
			//score...
			scorenum = scorenum + 1;
			score.innerHTML = scorenum;

			setTimeout(function() {
				
				var i = Math.floor((Math.random() * 9) + 0);
				mathnum = i;
				btns[i].className = "red";
				tim = tim - 10;

				chek = true;
				//lose ....
				me = setTimeout(function() {
					if (chek) {
						clearInterval(mytime);
						endscreen.className = "screen display";
						tim = 1000;
						sc.innerHTML = scorenum;
						tm.innerHTML = thetime;
						scorenum = 0;
						ms = 0;
						score.innerHTML = 0;
						timin.innerHTML = "0:0";
					}
				}, tim + 1000);

				console.log(tim + 1200);
			}, tim);

		}else {
			//lose.....
			clearTimeout(me);
			clearInterval(mytime);
			endscreen.className = "screen display";
			console.log('clicked the white');
			tim = 1000;
			sc.innerHTML = scorenum;
			tm.innerHTML = thetime;
			scorenum = 0;
			ms = 0;
			score.innerHTML = 0;
			timin.innerHTML = "0:0";
		}
	}
});

//first red function
function gg() {
	var i = Math.floor((Math.random() * 9) + 0);
	btns[i].className = "red";
};

//end and start of the game...
document.getElementById('start').addEventListener('click', function() {
	startscreen.className = "screen";
	thecountdwn();
});

document.getElementById('end').addEventListener('click', function() {
	endscreen.className = "screen";
	count.innerHTML = "";
	btns[mathnum].className = "white";
	thecountdwn();
});

//the count down
function thecountdwn() {
	countDwn.style.display = "flex";
	var numres = 4;
	//countdown.....
	var ll = setInterval(function() {
		console.log('xx');
		if (numres > 1) {
			numres = numres - 1;
			count.innerHTML = numres;

		}else if (numres = 1) {
			count.innerHTML = "GO!";
			setTimeout(function() {
				countDwn.style.display = "none";
				gg();
				xtimex();
			},1000);
			clearInterval(ll);
		}
	}, 1000);
};

//time....
var ms = 0;
var mytime;

function xtimex() {

	mytime = setInterval(function () {
		ms = ms + 1000;
		var min = Math.floor((ms/1000/60) << 0),
		sec = Math.floor((ms/1000) % 60);

		thetime = min + ':' + sec;
		timin.innerHTML = min + ':' + sec;
	}, 1000);

};