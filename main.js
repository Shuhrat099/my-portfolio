let contact = document.querySelector(".contact-btn")
let modal = document.querySelector(".modal-cont")
let close_btn = document.querySelector(".close-btn")
let tanirovka = document.querySelector(".tanirovka")

contact.addEventListener('click', ()=>{
    modal.classList.remove("modal-hidden")
    tanirovka.classList.remove("tanirovka-hidden")

})

close_btn.addEventListener('click', ()=>{
    modal.classList.add("modal-hidden")
    tanirovka.classList.add("tanirovka-hidden")
})

tanirovka.addEventListener('click', ()=>{
    modal.classList.add("modal-hidden")
    tanirovka.classList.add("tanirovka-hidden")
})


let menuIcon = document.querySelector(".fa-bars")
let menu = document.querySelector(".menu")

menu.style.maxHeight = '0px'

menuIcon.addEventListener('click', ()=>{
    if(menu.style.maxHeight == '0px'){
        menu.style.maxHeight = '550px'
    }else{
        menu.style.maxHeight = '0px'
    }
})