let menuBtn = document.querySelector('.header-nav__menu-btn');
let sidebar = document.querySelector('.sidebar');
let sidebarInner = document.querySelector('.sidebar-inner');
let sidebarShade = document.querySelector('.sidebar-shade');
let headerNav = document.querySelector('.header-nav__list');




menuBtn.addEventListener('click', () => {
    sidebarInner.style.transform = 'translateX(0)';
    sidebarShade.classList.remove('hide');
    headerNav.style.transform = 'translatex(0)';
})
sidebarShade.addEventListener('click', () => {
    sidebarInner.style.transform = 'translateX(-260px)';
    sidebarShade.classList.add('hide');
    headerNav.style.transform = 'translatex(-200px)';
})