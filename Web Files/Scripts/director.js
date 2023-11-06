function pageDirector() {
    const audio = document.getElementById('splash-sound-effect');
    const directToHome = () => {
        window.open('index.html');
        audio.play()
    };
    const directToApps = () => {
        window.open('apps.html');
        audio.play()
    };
    const directToTedTalk = () => {
        window.open('tedtalk.html');
        audio.play()
    };
    const directToPodcast = () => {
        window.open('podcast.html');
        audio.play()
    }
    const directToBlog = () => {
        window.open('blog.html');
        audio.play()
    };
    const directToShop = () => {
        window.open('shop.html');
        audio.play()
    };
    function handleDirections() {
        const elements = document.querySelectorAll('.content');
        elements.forEach((element) => {
            if (element.id !== 'logo') {
                if (element.id === 'home-btn') {
                    element.addEventListener('click', directToHome);
                } else if (element.id === 'apps-btn') {
                    element.addEventListener('click', directToApps);
                } else if (element.id === 'tedtalk-btn') {
                    element.addEventListener('click', directToTedTalk);
                } else if (element.id === 'podcast-btn') {
                    element.addEventListener('click', directToPodcast);
                } else if (element.id === 'blog-btn') {
                    element.addEventListener('click', directToBlog);
                } else if (element.id === 'shop-btn') {
                    element.addEventListener('click', directToShop);
                }
            }
        })
    };
    handleDirections();
}

document.addEventListener('DOMContentLoaded', pageDirector)