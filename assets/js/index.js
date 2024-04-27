const exercise1 = document.getElementById('exercise1');
const exercise2 = document.getElementById('exercise2');
const exercise3 = document.getElementById('exercise3');
const exercise4 = document.getElementById('exercise4');
const exercise5 = document.getElementById('exercise5');

const divResult1 = document.querySelector('#collapse1 div');
const divResult2 = document.querySelector('#collapse2 div');
const divResult3Col1 = document.querySelector('#col1');
const divResult3Col2 = document.querySelector('#col2');
const divResult4 = document.querySelector('#collapse4 div');
const divResult5 = document.querySelector('#collapse5 div');

const collapse1 = new bootstrap.Collapse('#collapse1', { toggle: false });
const collapse2 = new bootstrap.Collapse('#collapse2', { toggle: false });
const collapse3 = new bootstrap.Collapse('#collapse3', { toggle: false });
const collapse4 = new bootstrap.Collapse('#collapse4', { toggle: false });
const collapse5 = new bootstrap.Collapse('#collapse5', { toggle: false });

exercise1.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseInt(event.target.firstInput.value);
    if (!isNaN(number)) {
        const result = sum(number);
        divResult1.innerHTML = `El resultado es ${result}`;
        collapse1.show();
    } else {
        alert('Debe ingresar un número');
        collapse1.hide();
    }
});

exercise2.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseInt(event.target.secondInput.value);
    if (!isNaN(number)) {
        let result = `El número ${number} es `;
        result += isEven(number) ? 'par' : 'impar';
        divResult2.innerHTML = result;
        collapse2.show();
    } else {
        alert('Debe ingresar un número');
        collapse2.hide();
    }
});

exercise3.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseInt(event.target.thirdInput1.value);
    const amount = parseInt(event.target.thirdInput2.value);
    if (!isNaN(number) && !isNaN(amount)) {
        const multiplications = multiply(number, amount);
        let result1 = '';
        let result2 = '';

        for (let i = 0; i < multiplications.length; i++) {
            if (i <= multiplications.length / 2) {
                result1 += multiplications[i] + '<br>';
            } else {
                result2 += multiplications[i] + '<br>';
            }
        }

        divResult3Col1.innerHTML = result1;
        divResult3Col2.innerHTML = result2;
        collapse3.show();
    } else {
        alert('Debe ingresar un número');
        collapse3.hide();
    }
});

exercise4.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseInt(event.target.fourthInput1.value);
    const gender = document.getElementById('fourthInput2').value;

    if (!isNaN(number) && gender !== 'default') {
        const result = prize(number, gender);
        divResult4.innerHTML = result;
        collapse4.show();
    } else {
        alert('Debe ingresar un número');
        collapse4.hide();
    }
});

exercise5.addEventListener('submit', (event) => {
    event.preventDefault();

    const number = parseFloat(event.target.fifthInput.value);
    if (!isNaN(number)) {
        let result = getValue(number);
        divResult5.innerHTML = `El valor a pagar es ${result}`;
        collapse5.show();
    } else {
        alert('Debe ingresar un número');
        collapse5.hide();
    }
});

/*
1.  Se necesitan sumar los números del 1 a n, donde n es 
    un número que le pedimos al usuario.
*/
function sum(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    return result;
}

/*
2.  Se necesita validar si un número ingresado por el 
    usuario es par o impar.
*/
function isEven(number) {
    return number % 2 === 0;
}

/*
3.  La pizzería Pepitos requiere un algoritmo que permita 
    informarle a los usuarios si reciben o no un premio por 
    parte del negocio, se tienen las siguientes validaciones:
    *   Si es una persona menor o igual a 10 años, debe ir a 
        reclamar un jugo.
    *   Si es una persona mayor de edad (18 años) debe ir 
        a reclamar una cerveza. 
    *   Y si es una mujer, debe reclamar adicionalmente 
        una porción de pizza Hawaiana.
    *   O si es un hombre, debe reclamar adicionalmente 
        una porción de pizza tres carnes.
    *   Si no cumple ninguna de las condiciones, se le 
        debe informar que desafortunadamente, no recibe 
        ningún premio.
*/
function prize(age, gender) {
    let drink;
    let pizza;

    if (age < 0 || age > 100) return 'No le creo. No hay premio.';
    if (age > 10 && age < 18) return 'Para ti no hay premio :c.';

    if (age <= 10) drink = 'Un juguito';
    if (age >= 18) drink = 'Una cerveza';

    pizza =
        gender === 'male'
            ? 'una porción de pizza de tres carnes.'
            : 'una porción de pizza hawaiana.';

    return `Su premio es: ${drink} y ${pizza}`;
}

/*
5.  Se le debe pedir al usuario un número y mostrar la 
    tabla de multiplicar de ese número, adicionalmente, 
    se debe mostrar el total de las multiplicaciones 
    solicitadas por el mismo.
*/
function multiply(number, amount) {
    let table = [];

    if (amount < 0 || amount > 100) return ['Ingrese un valor entre 0 y 100'];

    for (let i = 0; i <= amount; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }

    return table;
}

/*
6.  Validar cuál es el valor de matrícula (1’000.000) 
    que debe pagar un estudiante, teniendo en cuenta que:
    *   Si el promedio fue menor a 3 no se le descuenta nada.
    *   Cuando el promedio sea entre 3 y 4 se le descuenta el 5%
    *   Cuando el promedio sea mayor que 4, se le descuenta 50%
*/
function getValue(average) {
    let value = 1000000;
    if (average >= 3 && average <= 4) value *= 0.95;
    if (average > 4) value *= 0.5;
    return value;
}
