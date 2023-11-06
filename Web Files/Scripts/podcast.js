function playAudio() {
    const button = document.getElementById('audio-symbol');
    const audio = document.getElementById('podcast-audio');
    button.addEventListener('click', function() {
        if (audio.paused) {
            audio.play()
        } else {
            audio.pause()
        }
    })
}

document.addEventListener('DOMContentLoaded', playAudio)