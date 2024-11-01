const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const trackTitle = document.getElementById('track-title');

// List of audio tracks
const tracks = [
  { title:'بودكاست تخليد لذكري جدي' ,src: 'track1.mp3' },
  { title: ' السيدة خديجة رضي الله عنها',src: 'track2.mp3' },
  { title: 'اعلان غير رسمي بالفصحي',src: 'track3.mp3' },
  {title: 'اعلان غير رسمي بالعامية',src:'track4.mp3' },
  {title: 'ملخص رواية',src: 'track5.mp3' },
  {title: 'وثائقي (عز الدين القسام)',src: 'track6.mp3'},
  {title: 'رد آلي',src: 'track7.mp3' }

];

let currentTrack = 0;
let isPlaying = false;
let isShuffle = false;

// Load the current track
function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  trackTitle.textContent = track.title;
}

// Play or Pause the audio
function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = '▶️';
  } else {
    audio.play();
    playPauseBtn.textContent = '⏸️';
  }
  isPlaying = !isPlaying;
}

// Move to the previous track
function playPrev() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = '⏸️';
  isPlaying = true;
}

// Move to the next track
function playNext() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playPauseBtn.textContent = '⏸️';
  isPlaying = true;
}

// Shuffle the track order
function toggleShuffle() {
  isShuffle = !isShuffle;
  shuffleBtn.style.backgroundColor = isShuffle ? '#ff6347' : '#666';
  if (isShuffle) {
    currentTrack = Math.floor(Math.random() * tracks.length);
    loadTrack(currentTrack);
    audio.play();
    playPauseBtn.textContent = '⏸️';
    isPlaying = true;
  }
}

// Event Listeners
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', playPrev);
nextBtn.addEventListener('click', playNext);
shuffleBtn.addEventListener('click', toggleShuffle);

// Load the first track initially
loadTrack(currentTrack);