const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll()

window.addEventListener("scroll",() =>{

    if( window.pageYOffset >= navbarOffsetTop){
     navbar.classList.add("sticky");
    }else{
        navbar.classList.remove("sticky");
    }
        
})