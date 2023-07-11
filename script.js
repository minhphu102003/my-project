window.addEventListener("load",function(){
    const menuLinks = [...document.querySelectorAll('.navigation-item-link')];
    menuLinks.forEach(item=> item.addEventListener("mouseenter",handleFunction));
    const lineBottom = document.createElement("div");
    lineBottom.className = "line-fixed";
    document.body.appendChild(lineBottom);

    function handleFunction(event){
        const {left , top , height ,width} = event.target.getBoundingClientRect();
        const marginBottom = 5;
        const paddingRight = 5;
        lineBottom.style.left = `${left}px`;
        lineBottom.style.width = `${width + paddingRight}px`;
        lineBottom.style.top = `${top+ height+marginBottom }px`;
    }

    const menu = document.querySelector('.navigation-item');
    menu.addEventListener("mouseleave",function(){
        lineBottom.style.width = 0;
    })
});

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click",function(){
    navigation.classList.toggle("active");
    menuBtn.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active"); 
    });
    slides.forEach((slide) =>{
        slide.classList.remove("active"); 
    });
    contents.forEach((content) =>{
        content.classList.remove("active"); 
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

//!thêm sự kiện vào nút tới và nút lùi

// !Thiếu sử lý set timeout cho video
// !Thiếu sử lý mở muted cho những video đang active







btns.forEach((btn, i) =>{
    btn.addEventListener("click",()=>{
        sliderNav(i);
    });
});



