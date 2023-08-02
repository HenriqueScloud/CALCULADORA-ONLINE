


// criando o btn do sexo para escolha do usuário
function btnSexo(){

    const sexo = document.querySelectorAll('.btnSexo') // pegando o elemento do btn

    sexo.forEach((item) => {
        item.addEventListener('click', function(){
            sexo.forEach((item) =>{
                item.classList.remove('sexo-ativo')
            })
            item.classList.add('sexo-ativo')
        } )
    })

}
btnSexo();