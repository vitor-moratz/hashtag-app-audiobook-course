const btnPlayPause = document.getElementById('play-pause')
const audioCap = document.getElementById('audio-cap')
const btnNextCap = document.getElementById('next')
const btnBackCap = document.getElementById('back')
const titleCap = document.getElementById('cap')

const numCap = 10
let isPlaying = 0
let capCurrent = 1

function playTrack() {
    audioCap.play()
    btnPlayPause.classList.remove('bi-play-circle-fill')
    btnPlayPause.classList.add('bi-pause-circle-fill')
}

function pauseTrack() {
    audioCap.pause()
    btnPlayPause.classList.remove('bi-pause-circle-fill')
    btnPlayPause.classList.add('bi-play-circle-fill')
}

function playOrPause() {
    if (isPlaying === 0) {
        playTrack()
        isPlaying = 1
    } else {
        pauseTrack()
        isPlaying = 0
    }
}

function changeNameTrack() {
    titleCap.innerText = 'Capítulo ' + capCurrent
}

function nextTrack() {
    if (capCurrent === numCap) {
        capCurrent = 1
    } else {
        capCurrent = capCurrent + 1
    }
    audioCap.src = '/src/books/dom-casmurro/' + capCurrent + '.mp3'
    playTrack()
    isPlaying = 1
    changeNameTrack()
}

function backTrack() {
    if (capCurrent === 1) {
        capCurrent = numCap
    } else {
        capCurrent = capCurrent - 1
    }
    audioCap.src = '/src/books/dom-casmurro/' + capCurrent + '.mp3'
    playTrack()
    isPlaying = 1
    changeNameTrack()
}

btnPlayPause.addEventListener('click', playOrPause)
btnNextCap.addEventListener('click',  nextTrack)
btnBackCap.addEventListener('click', backTrack)