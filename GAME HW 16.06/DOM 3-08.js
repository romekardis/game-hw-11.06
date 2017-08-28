






window.addEventListener('load', function () {

	var gameOver = document.querySelector('.game-over');	
	var buttonStart = document.querySelector('.game-start');
	buttonStart.addEventListener('click', function (event) {
		gameOver.style.visibility = 'hidden';
		beforeClick();
		event.stopPropagation();
	});

});


function beforeClick() {


	function addZero(a, length) {
		a = a.toString();
		var howMuch = length - a.length;
		for (var i = 0; i < howMuch; i++) {
			a = '0' + a;
		}
		return a;
	}
	function moveTarget() {
		var gfw = gameField.clientWidth;	
		var gtw = gameTarget.clientWidth;
		var gfh = gameField.clientHeight;	
		var gth = gameTarget.clientHeight;
		gameTarget.style.top = Math.random() * (gfh - gth) + 'px';
		gameTarget.style.left = Math.random() * (gfw - gtw) + 'px';
	}
	function onStopGame() {
		gameField.removeEventListener('click', funcField);
		gameTarget.removeEventListener('click', funcTarg);
		bgm.removeEventListener('timeupdate', asd);
		moveTarget();
		gameOver.style.visibility = 'visible';
		gameTarget.style.visibility = 'hidden';
		gameOverMessage.textContent = 'Ваш результат: ' + addZero(hit,4) + '/' + addZero(hitNdMissing,4); 
	};
	function onHitTarget() {
		shot.currentTime = 0
		shot.play();
		hit++;
		// hitNdMissing++;
		prev = (prev + Math.round(Math.random() * 10 + 1)) % 12;
		gameTarget.style.backgroundPositionX = (prev * 80) + 'px';
		moveTarget();
	};
	function onHitNothing() {
		shot.currentTime = 0
		shot.play();
		hitNdMissing++;
	};

	var hit = 0;
	var hitNdMissing = 0;	
	var gameTimer = document.querySelector('.game-timer');
	var gamePoints = document.querySelector('.game-points');
	var gameTarget = document.querySelector('.game-target');
	var gameOverMessage = document.querySelector('.game-over-message');	
	var gameOver = document.querySelector('.game-over');
	
	var gameField = document.querySelector('.game-field');

	var shot = document.querySelector('.game-sound-shot');	
	var bgm = document.querySelector('.game-music');
	var minutes = 0;
	
	bgm.play();

	bgm.addEventListener('timeupdate', asd) 
	function asd(event) {
		gamePoints.textContent = addZero(hit, 2) + '/' + addZero(hitNdMissing, 2);
		minutesSec();
		if (bgm.duration == bgm.currentTime) {
			onStopGame();
		}
	}

	function minutesSec() {
		var allTime = Math.floor(bgm.duration - bgm.currentTime)
		var seconds = allTime % 60;
		allTime -= seconds;
		allTime = allTime / 60;
		var minutes = allTime % 60;
		gameTimer.textContent = addZero(minutes,2) + ':' + addZero(seconds,2);
	};

	gameField.addEventListener('click', funcField);
	function funcField(event) {
		onHitNothing();
		//
	}
	gameTarget.addEventListener('click', funcTarg);
	function funcTarg(event) {
		onHitTarget();
		moveTarget();
	}
	var prev = (Math.round(Math.random() * (12 - 1) + 1));
	gameTarget.style.backgroundPositionX = (prev * 80) + 'px';
	gameTarget.style.visibility = 'visible';
	
}


	















