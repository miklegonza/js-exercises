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
    let fullValue = 1000000;
    if (average >= 3 && average <= 4) fullValue *= 0.95;
    if (average > 4) fullValue *= 0.5;
    return fullValue;
}
