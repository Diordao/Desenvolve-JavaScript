// Função para somar dois números
// Usando arrow function: recebe num1 e num2, retorna a soma
const soma = (num1, num2) => num1 + num2;

// Função para subtrair dois números
// Retorna a diferença entre num1 e num2
const subtrai = (num1, num2) => num1 - num2;

// Função para multiplicar dois números
// Retorna o produto entre num1 e num2
const multiplica = (num1, num2) => num1 * num2;

// Função para dividir dois números
// Retorna o quociente entre num1 e num2
const divide = (num1, num2) => num1 / num2;

// Função que recebe dois números e mostra no console o resultado de todas as operações
const mostraResultado = (num1, num2) => {
    console.log(`Soma entre ${num1} e ${num2}:`, soma(num1, num2));
    console.log(`Diferença entre ${num1} e ${num2}:`, subtrai(num1, num2));
    console.log(`Produto entre ${num1} e ${num2}:`, multiplica(num1, num2));
    console.log(`Quociente entre ${num1} e ${num2}:`, divide(num1, num2));
}

// Utilizando valores fixos só como demonstração
mostraResultado(10, 2);