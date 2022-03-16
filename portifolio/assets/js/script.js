
function menuFixed() {

    if(window.document.body.clientWidth >= 1200) {
        document.querySelector('.menu-fixed').style.display = 'none';
    } else if(window.scrollY < 200) {
        document.querySelector('.menu-fixed').style.opacity = '0';

        setTimeout(function(){
            document.querySelector('.menu-fixed').style.display = 'none';
        }, 500)
    } else if(window.scrollY > 200) {
        document.querySelector('.menu-fixed').style.display = 'flex';

        setTimeout(function(){
            document.querySelector('.menu-fixed').style.opacity = '1';
        }, 500)
    }
}
window.addEventListener('scroll', menuFixed);

document.querySelector('.acao-menu').onclick = function() {
    window.location.href = '#inicio'
}

document.querySelector('.botao-voltar').onclick = function() {
    window.location.href = '../index.html';
}


let projetos = document.querySelectorAll('.projeto');


    for(let i = 0; i <= projetos.length; i++) {
        projetos[i].style.backgroundImage = `url('assets/imagens/portifa/projetosfinais/arte${i}.jpg')`;
        projetos[i].style.backgroundSize = `contain`;
        projetos[i].style.backgroundRepeat = 'no-repeat';
        projetos[i].style.backgroundPosition = `center`
    }


    