function handleDirections() {
    const audio = document.getElementById('splash-sound-effect');
    const links = [
        "https://www.amazon.ca/Speedo-Team-Pull-Training-Black/dp/B0172GZWIE/ref=sr_1_6?crid=RNJI21M893ZL&keywords=Swim%2BGear&qid=1699135836&sprefix=swim%2Bgear%2Caps%2C82&sr=8-6&th=1&psc=1",
        "https://www.amazon.ca/Arena-Kickboard-Orange-One-Size/dp/B00G04S458/ref=sr_1_7?crid=FKH90PDI1ZS7&keywords=Swim%2BGear&qid=1699137913&sprefix=swim%2Bgear%2caps%2C86&sr=8-7&th=1&psc=1",
        "https://www.amazon.ca/Speedo-Vanquisher-Goggles-Clear-Size/dp/B011PLS00O/ref=sr_1_4?crid=10F9U1Z8D6EXK&keywords=speedo%2Bvanquisher%2B2.0%2Bswim%2Bgoggle&qid=1699197916&sprefix=speedo%2Bvan%2Caps%2C99&sr=8-4&th=1",
        "https://www.crocs.ca/classic-clog/10001,en_CA,pd.html?cgid=men-footwear&cid=6SW"
    ];
    const buttons = document.querySelectorAll('.buy-buttons');
    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            audio.play()
            window.open(links[index]);
        })
    })
}

function scroll() {
    const targetELement = document.documentElement.getBoundingClientRect().bottom;
    const target = targetELement + (targetELement / 0.5);
    const startPosition = window.scrollY;
    let currentPosition = startPosition;
    const distance = target - currentPosition;
    const increments = 50;
    const increment = distance / increments;
    let scrollStep = () => {
        currentPosition += increment;
        window.scrollTo(0, currentPosition);
        if (currentPosition < target) {
            setTimeout(scrollStep, 25);
        }
    }
    setTimeout(scrollStep, 1000)
}

function main() {
    handleDirections();
    scroll();
}

document.addEventListener('DOMContentLoaded', main);


