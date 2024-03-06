const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const songName = document.getElementById('song-name');
const progressBar = document.getElementById('progress');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');

let currentTrack = 0;
const playlist = [
    { name: 'Cuerno Azulado', source: 'cancion1.mp3' },
    { name: 'Antonio Montana', source: 'cancion2.mp3' },
    { name: 'Carlitos', source: 'cancion3.mp3' },
    { name: 'Mas Altas Que Bajadas', source: 'cancion4.mp3' },
    { name: 'Como es arriba es abajo', source: 'cancion5.mp3' },
    { name: 'Amg 2', source: 'cancion6.mp3' },
    { name: 'Proyecto X', source: 'cancion7.mp3' },
    { name: 'todavia no pongo de la 8 en adelante', source: 'cancion8.mp3' },
    { name: 'Canción 9', source: 'cancion9.mp3' },
    { name: 'Canción 10', source: 'cancion10.mp3' },
    { name: 'Canción 11', source: 'cancion11.mp3' },
    { name: 'Canción 12', source: 'cancion12.mp3' },
    { name: 'Canción 13', source: 'cancion13.mp3' },
    { name: 'Canción 14', source: 'cancion14.mp3' },
    { name: 'Canción 15', source: 'cancion15.mp3' }
];

function playTrack(trackIndex) {
    audio.src = playlist[trackIndex].source;
    songName.textContent = playlist[trackIndex].name;
    audio.play();
}

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = '||';
    } else {
        audio.pause();
        playPauseButton.textContent = '▶';
    }
});

previousButton.addEventListener('click', () => {
    currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
    playTrack(currentTrack);
});

nextButton.addEventListener('click', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    playTrack(currentTrack);
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';

    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    currentTime.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

audio.addEventListener('durationchange', () => {
    const minutes = Math.floor(audio.duration / 60);
    const seconds = Math.floor(audio.duration % 60);
    duration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
});

audio.addEventListener('ended', () => {
    currentTrack = (currentTrack + 1) % playlist.length;
    playTrack(currentTrack);
});

playTrack(currentTrack);