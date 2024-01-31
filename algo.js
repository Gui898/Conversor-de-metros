function calcular(){
    
    let numero = document.getElementById('numero');
    let unidade = document.getElementById('unidades');
    let resultado = document.getElementById('resultado');

    if(numero.value < 0 ){
        alert('Não existe medida negativa');
        return;
    }

    converter(numero.value, unidade);
}

function converter(numero, unidade) {
    resultado2 = numero * (10 ** Number(unidade.value.split('_')[1]));
    resultado.textContent = `${resultado2}${unidade.value.split('_')[0]}`;
}

