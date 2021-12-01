window.addEventListener('load', () => {

    let container = document.querySelector('.container');
    let destacado = document.querySelectorAll('p');
    let logo = document.getElementById('logoDH')
    let menu = document.getElementById('menu')
   
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
   
    logo.addEventListener('click', () => {
   // console.log('click sobre el logo')
   menu.classList.toggle('mostrar')
})
    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('mostrar')

    })


    container.style.display = 'block';
})

