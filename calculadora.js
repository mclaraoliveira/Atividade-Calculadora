var num1 = parseFloat(prompt("Insira o primeiro número"));
var num2 = parseFloat(prompt("Insira o segundo número"));
var ope = prompt("Qual operação você vai realizar? Digite o símbolo de acordo com a operação: Soma (+), Subtração (-), Divisão (/), Multiplicação (*)");

switch (ope) {
    case '+':
        resultado = num1 + num2;
        break;
    case '-':
        resultado = num1 - num2;
        break;
    case '/':
        resultado = num1 / num2;
        sobra = num1 % num2;
        break;
    case '*':
        resultado = num1 * num2;
        break;
}

if (ope == "+" || ope == "-" || ope == "*") {
    alert(`Seu resultado é ${resultado}`)
} else if (ope == "/") {
    alert(`Seu resultado é ${resultado} e a sobra é ${sobra}`)
} else {
    alert("Operação inválida");
}