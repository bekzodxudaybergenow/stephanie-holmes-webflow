let menuBtn = document.querySelector('.header-nav__menu-btn');
let sidebar = document.querySelector('.sidebar');
let sidebarInner = document.querySelector('.sidebar-inner');
let sidebarShade = document.querySelector('.sidebar-shade');




menuBtn.addEventListener('click', () => {
    sidebarInner.style.transform = 'translateX(0)';
    sidebarShade.classList.remove('hide');
})
sidebarShade.addEventListener('click', () => {
    sidebarInner.style.transform = 'translateX(-260px)';
    sidebarShade.classList.add('hide');
})