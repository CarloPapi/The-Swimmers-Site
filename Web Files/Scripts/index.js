function loadingAnimation() {
    const header = document.getElementById('heading');
    const loadingObj = document.querySelectorAll('.loading-obj');
    function animation() {
       setTimeout(() => {
        header.style.visibility = "visible"; 
       }, 1000)
            setTimeout(function() {
                loadingObj.forEach((obj) => {
                    obj.style.visibility = "visible"; 
                });
            }, 600)
            function changeLoadingObjPos() { 
                const changeAmount = 2000;
                let objIds = [];
                loadingObj.forEach((obj) => {
                    objIds.push(obj.id);
                })
                for (let i = 0; i < 2; i++) {
                    const objElement = document.getElementById(objIds[i])
                    const objStyles = window.getComputedStyle(objElement);
                    const objMargins = [
                        parseInt(objStyles.marginTop),
                        parseInt(objStyles.marginLeft),
                        parseInt(objStyles.marginRight)
                    ]
                    if (objElement.id === 'obj1') {
                        const target = objMargins[0] - changeAmount;
                        let currentPosition = objMargins[0];
                        const distance = target - currentPosition;
                        const increments = 50;
                        const increment = distance / increments;
                        function step() {
                            if (currentPosition !== target) {
                                currentPosition += increment;
                                objElement.style.marginTop = currentPosition + 'px';
                                setTimeout(step, 25);
                            }
                        }
                        step();
                    } else if (objElement.id === 'obj2') {
                        const target = objMargins[1] - changeAmount;
                        let currentPosition = objMargins[1];
                        const distance = target - currentPosition;
                        const increments = 50;
                        const increment = distance / increments;
                        function step() {
                            if (currentPosition !== target) {
                                currentPosition += increment;
                                objElement.style.marginLeft = currentPosition + 'px';
                                setTimeout(step, 25);
                            }
                        }
                        step();
                    } else if (objElement.id === 'obj3') {
                        const target = objMargins[2] - changeAmount;
                        let currentPosition = objMargins[2];
                        const distance = target - currentPosition;
                        const increments = 50;
                        const increment = distance / increments;
                        function step() {
                            if (currentPosition !== target) {
                                currentPosition += increment;
                                objElement.style.marginRight = currentPosition + 'px';
                                setTimeout(step, 25);
                            }
                        }
                        step();
                    }
                }4
            }
            setTimeout(changeLoadingObjPos, 2000)
    }
    setTimeout(animation, 2000)
}

function hideGif() {
    const headerElement = document.getElementById('heading');
    const gif = document.getElementById('loading-gif');
    if (headerElement.textContent === "The Swimmers' Site") {
        setTimeout(() => {
            gif.style.visibility = "collapse"; 
        }, 2500)
    };
    return true; 
}

function revealBackground() {
    const img = document.getElementById('background-image');
    if (hideGif()) { 
        setTimeout(() => {
            img.style.visibility = "visible";
            img.style.animation = "expandImage 1s 1"; 
        }, 4000)
    }
}

function adjustHeaderPos() {
    const headerElement = document.getElementById('heading');
    const headerStyles = window.getComputedStyle(headerElement)
    const headerPos = parseInt(headerStyles).marginTop;
    let btmTarget = headerPos + 200;
    let currentPosition = headerPos;
    const distance = btmTarget - currentPosition;
    const increments = 50;
    const amplifier = 5;
    const increment = distance / increments * amplifier;
    function moveStepDown() {
        currentPosition += increment;
        headerElement.style.marginTop = currentPosition + 'px';
        if (currentPosition !== btmTarget) {
            setTimeout(moveStepDown, 25);
        }
     }
    document.addEventListener('fullscreenchange', function() { 
        btmTarget = headerPos + 500; 
        moveStepDown(); 
    });
    moveStepDown()
}

function changeBackgroundColour() {
    setTimeout(() => {
        document.documentElement.style.backgroundColor = "rgb(0, 118, 139)"; 
    }, 4000)
}

function revealDiveImage() {
    setTimeout(() => {
        const img = document.getElementById('dive');
        img.style.visibility = "visible"; 
    }, 4500)
}

function scrollToImage() {
    const targetElement = document.getElementById('dive');
    const targetPos = parseInt(window.getComputedStyle(targetElement).marginTop);
    const target = targetPos - targetPos / 2.1; 
    const startPosition = window.scrollY;
    let currentPosition = startPosition;
    const distance = target - currentPosition;
    const increments = 50;
    const increment = distance / increments;
    let scrollStep = () => {
        currentPosition += increment;
        window.scrollTo(0, currentPosition);
        if (currentPosition !== target) {
            setTimeout(scrollStep, 25);
            if (currentPosition >= target) { 
                scrollStep = () => { 
                    return;         
                }                  
                scrollStep();
            }
        }
    }
    setTimeout(scrollStep, 5000);
}

function revealSidebar() {
    const sidebarElement = document.getElementById('buttons-container');
    sidebarElement.style.visibility = "visible"; 
    sidebarElement.style.animation = "expandSidebar 1s 1";
    function revealSidebarContent() {
        const sidebarElements = document.querySelectorAll('.content');
        sidebarElements.forEach((element) => {
            setTimeout(function() {
                element.style.visibility = "visible";
            }, 500)
        })
    }
    setTimeout(revealSidebarContent, 500);
}

let main = () =>  { 
    loadingAnimation();
    setTimeout(() => {
        hideGif();
        revealBackground();
        setTimeout(adjustHeaderPos, 4000)
        changeBackgroundColour();
        revealDiveImage();
        scrollToImage();
       setTimeout(revealSidebar, 5000);
   }, 1000)
}




document.addEventListener('DOMContentLoaded', main);


