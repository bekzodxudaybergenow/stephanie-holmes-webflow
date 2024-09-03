let menuBtn = document.querySelector('.header-nav__menu-btn');
let sidebar = document.querySelector('.sidebar');
let sidebarInner = document.querySelector('.sidebar-inner');
let sidebarShade = document.querySelector('.sidebar-shade');
let sidebarList = document.querySelector('.sidebar-list');
let sidebarClosebtn = document.querySelector('.sidebar-closebtn');




menuBtn.addEventListener('click', () => {
    sidebarInner.style.transform = 'translateX(0)';
    sidebarShade.classList.remove('hide');
    sidebarList.style.transform = 'translateX(0)';
    sidebarClosebtn.style.transform = 'translateX(0)';
})
sidebarShade.addEventListener('click', () => {
    sidebarInner.style.transform = 'translateX(-260px)';
    sidebarShade.classList.add('hide');
    sidebarList.style.transform = 'translatex(-200px)';
    sidebarClosebtn.style.transform = 'translateX(-250px)';
})
sidebarClosebtn.addEventListener('click', () => {
    sidebarInner.style.transform = 'translateX(-260px)';
    sidebarShade.classList.add('hide');
    sidebarList.style.transform = 'translatex(-200px)';
    sidebarClosebtn.style.transform = 'translateX(-250px)';
})