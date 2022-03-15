let elemento = document.querySelectorAll('.load')


function scrollAnimate() {

    elemento.forEach((element, indice) => {
            
        if(elemento[indice].getBoundingClientRect().top > window.innerHeight) {

            setTimeout(function() {
                elemento[indice].style.opacity = '0';
            }, 400)

        } else if(elemento[indice].getBoundingClientRect().top < window.innerHeight) {

            setTimeout(function() {
                elemento[indice].style.opacity = '1';
            }, 400)

        } 
    })
}

window.addEventListener('scroll', scrollAnimate);

function menuAcoes() {
    if(document.querySelector('.menu-box').style.display == 'flex') {
        document.querySelector('.menu-box').style.opacity = '0';

        setTimeout(function(){
            document.querySelector('.menu-box').style.display = 'none';
        }, 500)
    } else if(document.querySelector('.menu-box').style.display == 'none') {
        document.querySelector('.menu-box').style.display = 'flex';

        setTimeout(function(){
            document.querySelector('.menu-box').style.opacity = '1';
            document.querySelector('.menu-fixed').style.opacity = '0'
        }, 100)
    } 
}
let menu = document.querySelectorAll('.acao-menu');

for(let i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', menuAcoes)
}

window.addEventListener('scroll', menufixed);

function menufixed() {
    let menufixed = window.scrollY
    if(document.querySelector('.perfil').clientWidth > 1200) {
        document.querySelector('.menu-fixed').style.display = 'none';
    } else if(menufixed > 300) {
        document.querySelector('.menu-fixed').style.display = 'flex';

        setTimeout(function(){
            document.querySelector('.menu-fixed').style.opacity = '1';
        }, 100)

    } else if(menufixed < 200) {
        document.querySelector('.menu-fixed').style.opacity = '0';

        setTimeout(function(){
            document.querySelector('.menu-fixed').style.display = 'none';
        }, 100)
    }
}


function FecharMenu() {
    document.querySelector('.menu-box').style.opacity = '0';

    setTimeout(function(){
        document.querySelector('.menu-box').style.display = 'none';
    }, 500)
}

let FecharMenus = document.querySelectorAll('.fechar-menu-container');


for(let i = 0; i <= FecharMenus.length; i++) {
    FecharMenus[i].addEventListener('click', FecharMenu)
}