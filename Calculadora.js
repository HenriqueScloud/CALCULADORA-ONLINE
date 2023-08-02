'use strict'


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


// // CRIANDO O CALCULO DO IMC COM OS DADOS FORNECIDOS


// function calcular(){
    
//     const alturaInput  = document.getElementById('altura')
//     const altura = alturaInput.value  // valor da altura da pessoa 

//     const pesoInput   = document.getElementById('peso')
//     const peso = pesoInput.value // valor do peso da pessoa 

//     let  resultadoInput = document.querySelector('.resultado-imc')

//     const inputs = document.querySelectorAll('.inputs')
//     console.log(inputs)




//     if ( peso == '' || altura =='' || idade ==''){
//         inputs.forEach((item)=>{
//             item.classList.add("error")
//         })

//         const button = document.querySelector('.header-IMC')

//         const alert = document.createElement('p')
//         alert.innerText="Preencha todos os campos ⚠️"
//         alert.classList.add('alerta')

//         button.appendChild(alert)
        
//     }
//     else{
//         let IMC = peso / (altura*altura)
//         IMC = (IMC * 10000).toFixed(1)
//         resultadoInput.innerHTML=IMC
//         inputs.forEach((item)=>{
//             item.classList.remove("error")
//             button.appendChild(alert).remove
//         })


//     }


    
// }

function calcular() {
    const alturaInput = document.getElementById('altura');
    const altura = alturaInput.value;

    const pesoInput = document.getElementById('peso');
    const peso = pesoInput.value;

    let resultadoInput = document.querySelector('.resultado-imc');
    const inputs = document.querySelectorAll('.inputs');





    
    const alerta = document.querySelector('.alerta');
    if (alerta) {
        alerta.remove();
    }

    if (peso == '' || altura == '' || idade == '') {
    inputs.forEach((item) => {
        item.classList.add('error');
    });

    const button = document.querySelector('.header-IMC');

    const alert = document.createElement('p');
    alert.innerText = 'Preencha todos os campos ⚠️';
    alert.classList.add('alerta');

    button.appendChild(alert);
    } else {
      let IMC = peso / (altura * altura);
      IMC = (IMC * 10000).toFixed(1);
    resultadoInput.innerHTML = IMC;
    inputs.forEach((item) => {
        item.classList.remove('error');
    });
    }
}





























