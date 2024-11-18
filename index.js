let modal = document.getElementById('myModal');

let closeModal = document.querySelector('.closeModal');

let openModal = document.getElementById('openModal');

let search = document.querySelector('.search');

let menu = document.getElementById('menu');

let hamburger = document.querySelector('.hamburger');

let closeMenu = document.getElementById('closeMenu');

let Connect = document.querySelector('.Connect');





openModal.onclick = function(){
    modal.style.display = 'flex'
}

closeModal.onclick = function(){
    modal.style.display = 'none'
}

Connect.onclick = function(){
    modal.style.display = 'flex'
}

search.onclick = function(){
    modal.style.display = 'flex'
}

hamburger.onclick = function(){
    menu.style.display = 'flex'
}

closeMenu.onclick = function(){
    menu.style.display = 'none'
}

menu.onclick = function(e){
    if(e.target == menu){
        menu.style.display = 'none'
    }
}


window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = 'none'
    }
}




