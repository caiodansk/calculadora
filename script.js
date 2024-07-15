document.getElementById('result').addEventListener('click', function calcular(){
    var input1 = Number(document.querySelector("input#num1").value)
    var input2 = Number(document.querySelector("input#num2").value)
    var select = document.querySelector("#operacoes").value;
    var result = document.querySelector('#area-resultado');


    if (select == "adicao") {
        result.innerHTML = `Deu soma, ${input1} + ${input2} = ${input1 + input2} `
    } else if (select == "subtracao") {
        result.innerHTML = `Deu subtração, ${input1} - ${input2} = ${input1 - input2} `
    } else if (select == "multiplicacao") {
        result.innerHTML = `Deu multiplicação, ${input1} x ${input2} = ${input1 * input2} `
    } else if (select == "divisao") {
        var divisaoresult = input1 / input2;
        result.innerHTML = `Deu divisão, ${input1} / ${input2} = ${divisaoresult} `
    } 
   
})

// select == "adicao"