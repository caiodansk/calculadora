document.getElementById('result').addEventListener('click', function calcular(){
    var input1 = Number(document.querySelector("input#num1").value);
    var input2 = Number(document.querySelector("input#num2").value);
    var select = document.querySelector("#operacoes").value;
    var result = document.querySelector('#area-resultado');
    
    function soma(a, b) {
        a = input1
        b = input2
        return (a + b)
    }

    function sub(a, b) {
        a = input1
        b = input2
        return (a - b)
    }

    function multi(a, b) {
        a = input1
        b = input2
        return (a * b)
    }

    function div() {
        let a = input1
        let b = input2
        if (a < 0 || b <= 0) {
            throw new Error("Divisões por 0 ou por numeros negativos não são permitidas")
        }
        return (a / b)
        
    }
    
    try {
        div()
    } catch (erro) {
        result.innerHTML = erro.message
    }
    
    if (select == "adicao") {
        result.innerHTML = `Soma: ${soma()}`
    } else if (select == "subtracao") {
        result.innerHTML = `Soma: ${sub()}`
    } else if (select == "multiplicacao") {
        result.innerHTML = `Soma: ${multi()}`
    } else if (select == "divisao") {
        result.innerHTML = `Soma: ${div()}`
    }
});


document.querySelector(".mode").addEventListener('click', function dark(){
    document.querySelector('.mode').innerHTML = 'Light Mode'
    document.querySelector('.mode').setAttribute("class", "modelight")
    document.getElementById('light').setAttribute("id", "dark")
    
});



