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
