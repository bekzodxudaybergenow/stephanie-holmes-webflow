let menuBtn = document.querySelector('.header-nav__menu-btn');
let sidebar = document.querySelector('.sidebar');
let sidebarInner = document.querySelector('.sidebar-inner');
let sidebarShade = document.querySelector('.sidebar-shade');
let sidebarList = document.querySelector('.sidebar-list');
let sidebarClosebtn = document.querySelector('.sidebar-closebtn');
let headerNav = document.querySelector('.header-nav');
let goTop = document.querySelector('.go-top');
let awardsItem = document.querySelectorAll('.award-list--item');
let awardsAnswer = document.querySelector('.awards-item__answer');



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


let prevScroll = window.scrollY;

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY;

    if (prevScroll < currentScroll) {
        headerNav.style = 'top: -340px';
        goTop.style = 'bottom: -60px';
    }
    else if (currentScroll == 0) {
        headerNav.style = 'box-shadow: none';
        goTop.style = 'bottom: -60px';
    }
    else {
        headerNav.style = 'top: 10px';
        headerNav.style = 'box-shadow: 0 0 3px 2px rgba(185, 35, 255, .2)';
        goTop.style = 'bottom: 35px';
    }
    prevScroll = currentScroll;
})    

awardsItem.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})
