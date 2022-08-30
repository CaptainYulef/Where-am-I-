(function (window, document) {

})(window, document);

var health = 50;

function rhealth() {
document.getElementById("health").innerHTML = health -= 10;
}

var score = 0;
var pes = 20;
var dol = 5;
var ster = 5;

function r3ster() {
	if ( ster < 3 || dol < 1) {
document.getElementById('lowmon').style.display='block'; document.getElementById('g').style.display='none';
}
else {
	var audio=new Audio('buy.wav');audio.loop=false;audio.play();
	document.getElementById("ster").innerHTML = ster -= 3;
	document.getElementById("score").innerHTML = score += 1;
	}
	}
	
	function buyBread() {
	if ( ster < 2 ) {
document.getElementById('lowmon').style.display='block'; document.getElementById('g').style.display='none';
}
else {
	var audio=new Audio('buy.wav');audio.loop=false;audio.play();
	document.getElementById("health").innerHTML = health += 10;
	document.getElementById("ster").innerHTML = ster -= 2;
	document.getElementById("dol").innerHTML = dol -= 1;
	}
	}

function die() {
if ( health < 1 ) {
window.location.reload();
}
setTimeout(die, 100);
}