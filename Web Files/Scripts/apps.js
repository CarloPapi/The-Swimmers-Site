function scrollToContent() {
    const startPosition = window.scrollY;
    let currentPosition = startPosition;
    const target = document.documentElement.getBoundingClientRect().bottom;
    const distance = target - currentPosition;
    const increments = 50;
    const increment = distance / increments;
    let scrollStep = () => {
        currentPosition += increment;
        window.scrollTo(0, currentPosition);
        if (currentPosition !== target) {
            setTimeout(scrollStep, 25); 
            if (currentPosition >= target) {
                scrollStep = () => {}
                scrollStep();
            }
        } 
    }
    scrollStep();
    return true;
}

function handleDownloads() {
    const audio = document.getElementById('splash-sound-effect');
    function handleMyProSwimDownloads() {
        const elements = document.querySelectorAll('.myswimpro');
        elements.forEach((element) => {
            if (element.id === 'apple_myswimpro-button') {
                element.addEventListener('click', function() {
                    audio.play()
                    const url = "https://apps.apple.com/us/app/myswimpro-1-swim-workout-app/id994386450";
                    window.open(url);
                })
            } else if (element.id === 'google_myswimpro-button') {
                element.addEventListener('click', function() {
                    audio.play()
                    const url = "https://play.google.com/store/apps/details?id=com.myswimpro.android.app&utm_source=myswimpro&utm_campaign=myswimpro.com&pli=1";
                    window.open(url);
                })
            }
        })
    }
    function handleSwimComDownloads() {
        const elements = document.querySelectorAll('.swim-com');
        elements.forEach((element) => {
            if (element.id === 'apple_swim-com-button') {
                element.addEventListener('click', function() {
                    audio.play()
                    const url = "https://apps.apple.com/us/app/swim-com-swim-tracker/id956030704";
                    window.open(url);
                })
            } else if (element.id === 'google_swim-com-button') {
                element.addEventListener('click', function() {
                    audio.play()
                    const url = "https://play.google.com/store/apps/details?id=com.spiraledge.swimapp";
                    window.open(url);
                })
            }
        })
    }
    function handleYoutubeDirection() {
        const element = document.getElementById('youtube-button');
        const url = "https://www.youtube.com/@FaresKsebati/videos";
        element.addEventListener('click', function() {
            audio.play()
            window.open(url);
        })
    }
    handleMyProSwimDownloads();
    handleSwimComDownloads();
    handleYoutubeDirection();
}

function moveHeaderDown() {
    const headerElement = document.getElementById('heading');
    const currentHeaderPos = parseInt(window.getComputedStyle(headerElement).marginTop);
    let currentPosition = currentHeaderPos;
    const targetPos = currentHeaderPos + (currentHeaderPos / 1.9);
    const distance = currentHeaderPos - targetPos;
    const increments = 50;
    const increment = distance / increments;
    function moveStep() {
        currentPosition -= increment;
        headerElement.style.marginTop = currentPosition + 'px';
        if (currentPosition < targetPos) {
            setTimeout(moveStep, 25);
        }
    }
    function adjustDescriptionsPos() { 
        const desElements = document.querySelectorAll('.descriptions');
        desElements.forEach((element) => {
            const startPos = parseInt(window.getComputedStyle(element).marginTop);
            const target = startPos + 250;
            let currentPos = startPos;
            function desMoveStep() {
                currentPos -= increment;
                element.style.marginTop = currentPos + 'px';
                if (currentPos < target) {
                    setTimeout(desMoveStep, 25);
                } 
            }
            desMoveStep();
        })
    }
    moveStep();
    setTimeout(adjustDescriptionsPos, 500);
}

function main() {
    handleDownloads();
    setTimeout(() => {
        scrollToContent();
        setTimeout(moveHeaderDown, 1250);
    }, 750)
}

document.addEventListener('DOMContentLoaded', main);