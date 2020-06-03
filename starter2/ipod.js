// Create your global variables below:
var tracklist = ["All We Got", "No Problem", "Summer Friends", "Blessings", "Same Drugs", "Mixtape", "Angels", "Juke Jam", "All Night", "How Great"]
var volLevels = [];
var curr_vol; 
var curr_song;




function init() {
	volLevels.push(vl0);
	volLevels.push(vl1);
	volLevels.push(vl2);
	volLevels.push(vl3);
	volLevels.push(vl4);
	volLevels.push(vl5);

	for (var i = 0; i < 3; i++){
		volLevels[i].style.backgroundColor = 'purple';
	}

	curr_vol = 2;
	curr_song = 0;
};


function volUp() {
	if (curr_vol < 5) {
		curr_vol++;
	}

	for (var i = 0; i < curr_vol + 1; i++){
		volLevels[i].style.backgroundColor = 'purple';
	}

	for (var i = curr_vol + 1; i < 6; i++){
		volLevels[i].style.backgroundColor = 'white';
	}

}


function volDown() {
	if (curr_vol >= 0) {
		curr_vol--;
	}

	for (var i = 0; i < curr_vol + 1; i++){
		volLevels[i].style.backgroundColor = 'purple';
	}

	for (var i = curr_vol + 1; i < 6; i++){
		volLevels[i].style.backgroundColor = 'white';
	}
}

function switchPlay() {
	if (document.getElementById("play_pause").innerHTML == '<i class="material-icons">play_arrow</i>') {

		// switches play to pause icon
		document.getElementById("play_pause").innerHTML = '<i class="material-icons">pause</i>';

		// every second, increment slider handle and time elapsed
		// if time elapsed reaches 3:00, go to next song
		timer = setInterval(function() {
					document.getElementById("player-time").stepUp();
					document.getElementById("time-elapsed").innerHTML = secondsToMs(document.getElementById("player-time").value);
					if (document.getElementById("player-time").value == '180') {
						nextSong();
					}
		}, 1000);

	} else {

		//  switches pause to play icon
		document.getElementById("play_pause").innerHTML = '<i class="material-icons">play_arrow</i>';

		// pauses timer, which halts progression of slider and time elapsed
		clearInterval(timer);
	}
}

function nextSong() {
	// increment song name
	// reset player and time elapsed to 0

	if (curr_song < 9) {
		document.getElementById("player-song-name").innerHTML = tracklist[curr_song + 1];
		document.getElementById("player-time").value = 0;
		document.getElementById("time-elapsed").innerHTML = 0;
		curr_song++;
	}
}

function prevSong() {
	// decrement song name
	// reset player and time elapsed to 0

	if (curr_song > 0) {
		document.getElementById("player-song-name").innerHTML = tracklist[curr_song - 1];
		document.getElementById("player-time").value = 0;
		document.getElementById("time-elapsed").innerHTML = 0;
		curr_song--;
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();