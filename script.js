const menuBars = document.getElementById('menu-bars');
const overly = document.getElementById('overly');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
    // Toggle: Menu bar open/close
    menuBars.classList.toggle('change');

    // Toggle: Menu Active
    overly.classList.toggle('overly-active');
    if (overly.classList.contains('overly-active')) {
        // Animate In - Overly
        overly.classList.remove('overly-slide-left');
        overly.classList.add('overly-slide-right');
    } else {
        overly.classList.remove('overly-slide-right');
        overly.classList.add('overly-slide-left');
    }
}

menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);