let lastScrollTop = 0;
const navbar = document.getElementById('navbar'); // Replace with your navbar's ID
const mobileThreshold = 50; // Adjust this value as needed

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth > 768) { // Desktop
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-120px"; // Hide the navbar (adjust based on navbar height)
        } else {
            // Scrolling up
            navbar.style.top = "0"; // Show the navbar
        }
    } else { // Mobile
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.style.top = "-120px"; // Hide the navbar
        } else {
            // Scrolling up
            if (currentScroll < mobileThreshold) {
                // If scrolled back to the top
                navbar.style.top = "0"; // Show the navbar
            }
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
/*
    // Cursor 

const overlay = document.getElementById('overlay');
const container = document.getElementById('container');

let isMoving = false;

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlay.style.left = `${x - overlay.clientWidth / 2}px`;
    overlay.style.top = `${y - overlay.clientHeight / 2}px`;

    // Enlarge the overlay when moving
    overlay.style.width = '400px'; // Larger size
    overlay.style.height = '400px'; // Larger size

    isMoving = true;

    // Reset the size after a short delay
    clearTimeout(overlay.timer);
    overlay.timer = setTimeout(() => {
        overlay.style.width = '0px'; // Small size
        overlay.style.height = '0px'; // Small size
        isMoving = false;
    }, 200); // Adjust the delay as needed
});

// Optional: To keep the circle enlarged while the mouse is down
container.addEventListener('mousedown', () => {
    overlay.style.width = '400px'; // Larger size
    overlay.style.height = '400px'; // Larger size
});

container.addEventListener('mouseup', () => {
    overlay.style.width = '0px'; // Small size
    overlay.style.height = '0px'; // Small size
});
*/

// Cursor 

const overlay = document.getElementById('overlay');
const container = document.getElementById('container');

let isMoving = false;

// Function to check if the screen is mobile
function isMobile() {
    return window.innerWidth < 768; // Adjust the breakpoint as needed
}

container.addEventListener('mousemove', (e) => {
    if (isMobile()) return; // Skip the cursor effect on mobile

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    overlay.style.left = `${x - overlay.clientWidth / 2}px`;
    overlay.style.top = `${y - overlay.clientHeight / 2}px`;

    // Enlarge the overlay when moving
    overlay.style.width = '400px'; // Larger size
    overlay.style.height = '400px'; // Larger size

    isMoving = true;

    // Reset the size after a short delay
    clearTimeout(overlay.timer);
    overlay.timer = setTimeout(() => {
        overlay.style.width = '0px'; // Small size
        overlay.style.height = '0px'; // Small size
        isMoving = false;
    }, 200); // Adjust the delay as needed
});

// Optional: To keep the circle enlarged while the mouse is down
container.addEventListener('mousedown', () => {
    if (isMobile()) return; // Skip the cursor effect on mobile
    overlay.style.width = '400px'; // Larger size
    overlay.style.height = '400px'; // Larger size
});

container.addEventListener('mouseup', () => {
    if (isMobile()) return; // Skip the cursor effect on mobile
    overlay.style.width = '0px'; // Small size
    overlay.style.height = '0px'; // Small size
});

/*countdown*/
window.addEventListener('load', () => {
    const days = document.querySelector('.days')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')
    
    let timeLeft = {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
    }
    
    let totalSeconds;
    
    function init() {
        totalSeconds = Math.floor((new Date('01/23/2025') - new Date()) / 1000); 
        setTimeLeft();
        let interval = setInterval(() => {
            if (totalSeconds < 0) {
                clearInterval(interval);
            }
            countTime();
        }, 1000);
    }
    
    function countTime() {
        if (totalSeconds > 0) {
            --timeLeft.s;
            if (timeLeft.m >= 0 && timeLeft.s < 0) {
                timeLeft.s = 59;
                --timeLeft.m;
                if (timeLeft.h >= 0 && timeLeft.m < 0) {
                    timeLeft.m = 59;
                    --timeLeft.h;
                    if (timeLeft.d >= 0 && timeLeft.h < 0) {
                        timeLeft.h = 23;
                        --timeLeft.d;
                    }
                }
            }
        }
        --totalSeconds;
        printTime();
    }
    
    function printTime() {
        animateFlip(days, timeLeft.d);
        animateFlip(hours, timeLeft.h);
        animateFlip(minutes, timeLeft.m);
        animateFlip(seconds, timeLeft.s);
    }
    
    function animateFlip(element, value) {
        const valueInDom = element.querySelector('.bottom-back').innerText;
        const currentValue = value < 10 ? '0' + value : '' + value;
    
        if (valueInDom === currentValue) return;
    
        element.querySelector('.top-back span').innerText = currentValue;
        element.querySelector('.bottom-back span').innerText = currentValue;
    
    
        gsap.to(element.querySelector('.top'), 0.7, {
            rotationX: '-180deg',
            transformPerspective: 300,
            ease: Quart.easeOut,
            onComplete: function() {
                element.querySelector('.top').innerText = currentValue; 
                element.querySelector('.bottom').innerText = currentValue; 
                gsap.set(element.querySelector('.top'), {rotationX: 0});
            }
        });
    
        gsap.to(element.querySelector('.top-back'), 0.7, {
            rotationX: 0,
            transformPerspective: 300,
            ease: Quart.easeOut,
            clearProps: 'all'
        });
    
    }
    
    
    
    function setTimeLeft() {
        timeLeft.d = Math.floor(totalSeconds / (60 * 60 * 24));
        timeLeft.h = Math.floor(totalSeconds / (60 * 60) % 24);
        timeLeft.m = Math.floor(totalSeconds / (60) % 60);
        timeLeft.s = Math.floor(totalSeconds % 60);
    }
    
    init();
  });


  /*event container */
const eventsContainers = [...document.querySelectorAll('.events-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

eventsContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

function myFunction(x) {
    x.classList.toggle("change");
}

document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('mobile-menu');
    var icon = this;

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        menu.style.height = 'auto'; // Set to auto to get the full height
        const fullHeight = menu.scrollHeight + 'px'; // Get the full height
        menu.style.height = '0px'; // Set to 0 for animation
        setTimeout(() => {
            menu.style.height = fullHeight; // Animate to full height
        }, 10);
        icon.classList.add('open');
        myFunction(icon); // Toggle the button's class
    } else {
        menu.style.height = '0px';
        menu.addEventListener('transitionend', function() {
            menu.style.display = 'none';
        }, { once: true });
        icon.classList.remove('open');
        myFunction(icon); // Toggle the button's class
    }
});
