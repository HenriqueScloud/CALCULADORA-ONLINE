


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


// CRIANDO O CALCULO DO IMC COM OS DADOS FORNECIDOS


function calcular(){
    const alturaInput  = document.getElementById('altura')
    const altura = alturaInput.value  // valor da altura da pessoa 

    const pesoInput   = document.getElementById('peso')
    const peso = pesoInput.value // valor do peso da pessoa 

    let  resultadoInput = document.querySelector('.resultado-imc')




    let IMC = peso / (altura*altura)
     IMC = (IMC * 10000).toFixed(1)
    resultadoInput.innerHTML=IMC
}



























