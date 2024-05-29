let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let currentTimeElement = document.getElementById("current-time");
let durationElement = document.getElementById("duration");

song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;
    durationElement.textContent = formatTime(song.duration);
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

song.ontimeupdate = function() {
    progress.value = song.currentTime;
    currentTimeElement.textContent = formatTime(song.currentTime);
}

progress.oninput = function() {
    song.currentTime = progress.value;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
