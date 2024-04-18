//Função para contar caracteres
function ContarCaracteres(string) {
  let cont = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '+' || string[i] === '-' || string[i] === '*' || string[i] === '/') {
      cont += 1;
    }
  }
  return cont;
}


//Função para limpar visor
function Limpar() {
  const visor = document.querySelector('#visor');

  visor.innerHTML = '';
}

//Função para inserir Caracteres
function Inserir(char) {
    const visor = document.querySelector('#visor')
    let valor = document.querySelector('#visor').innerHTML

    if (char === '+' || char === '-' || char === '*' || char === '/') {

      visor.innerHTML += ' ' + char + ' ';
      valor = document.querySelector('#visor').innerHTML
      if (ContarCaracteres(valor) > 1) {
        CalcularC1(char)
      }
    }
    else {
      visor.innerHTML += char
    }
}


//Calcular quando houver mais de um sinal na mesma operação

function CalcularC1(op) {
  const valor = document.querySelector('#visor').innerHTML;
  const visor = document.querySelector('#visor');
  const conta = valor.split(' ');
  const num1 = parseFloat(conta[0]);
  const operador = conta[1];
  const num2 = parseFloat(conta[2]);

  if (operador === '+') {
    visor.innerHTML = num1 + num2 + ' ' + op + ' ';
  }

  else if (operador === '-') {
    visor.innerHTML = num1 - num2 + ' ' + op + ' ';
  }
  else if (operador === '*') {
    visor.innerHTML = num1 * num2 + ' ' + op + ' ';
  }
  else if (operador === '/') {
    visor.innerHTML = num1 / num2 + ' ' + op + ' ';
  }
}


//Calcular conta

function Calcular() {
  const valor = document.querySelector('#visor').innerHTML;
  const visor = document.querySelector('#visor');
  const conta = valor.split(' ');
  const num1 = parseFloat(conta[0]);
  const operador = conta[1];
  const num2 = parseFloat(conta[2]);

  if (operador === '+') {
    visor.innerHTML = num1 + num2;
  }

  else if (operador === '-') {
    visor.innerHTML = num1 - num2;
  }
  else if (operador === '*') {
    visor.innerHTML = num1 * num2;
  }
  else if (operador === '/') {
    visor.innerHTML = num1 / num2;
  }

}
