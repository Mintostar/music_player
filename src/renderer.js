const playPauseBtn = document.getElementById('playPauseBtn');
const progressBar = document.getElementById('progress');
const fileInput = document.getElementById('fileInput');
let audio = new Audio();
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        audio.src = URL.createObjectURL(file);
        audio.load();
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    }
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
});
