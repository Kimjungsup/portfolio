// 페이지 아래로 스크롤 시 header스타일링 주기
const header = document.querySelector('.header')

// 요소(header)의 총 높이
const headerHeight = header.offsetHeight
// console.log(headerHeight) 걍 확인한 것
document.addEventListener('scroll', () => {
    if(window.scrollY > headerHeight){
        header.classList.add('header--dark')    //헤더에 적용되는 클래스를 추가할 수 있음 (CSS를 넣었다 뺐다 할 수 있음)
    }
    else{
        header.classList.remove('header--dark') 
    }
})

// Home 섹션을 아래로 스크롤 시 투명하게 처리
const home = document.querySelector('.home__container')
const homeHeight = home.offsetHeight
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight
})


// Arrow up 버튼을 아래로 스크롤 시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowUp.style.opacity = 1
    }
    else{
        arrowUp.style.opacity = 0
    }
})


// Navbar 토글버튼 클릭 처리
const navbarMenu = document.querySelector('.header__menu')
const navbarToggle = document.querySelector('.header__toggle')
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open')     // 이 메서드는 오픈을 넣었다 뺐다가 하는 것 
})


// Navbar 메뉴 클릭 시 메뉴를 자동으로 닫아 줌
navbarMenu.addEventListener('click', () => {
    navbarMenu.classList.remove('open')
})