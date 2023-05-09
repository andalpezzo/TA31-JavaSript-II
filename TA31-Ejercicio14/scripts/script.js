//Variables globalesnumActual
let numActual = '';
let numAnterior = '';
let operador = '';
let resuelto = false;

//Función que borra el último número insertado
function borrarUltimoNum() {
    numActual = numActual.slice(0, -1);
    actualizar(numActual);
}

//Función para borrar los numeros escritos despues de seleccionar el operador
function borrarDespuesOperacion() {
    numActual = '';
    actualizar('');
}

//Función que borra todo
function borrarTodo() {
    numActual = '';
    numAnterior = '';
    operador = '';
    resuelto = false;
    actualizar('');
}

//Función para insertar un número
function insertNum(num) {
    if (resuelto) {
        borrarTodo();
    }
    numActual += num;
    actualizar(numActual);
}

//Función para insertar un operador
function operacion(operador) {
    if (resuelto) {
        resuelto = false;
    }
    if (operador) {
        calcular();
    }
    operador = operador;
    numAnterior = numActual;
    numActual = '';
}

//Función para insertar un punto decimal
function insertDecimal() {
    numActual += '.';
    actualizar(numActual);
}

//Función para calcular el resultado
function calcular() {
    let resultado;
    switch (operador) {
        case '+':
            resultado = parseFloat(numAnterior) + parseFloat(numActual);
            break;
        case '-':
            resultado = parseFloat(numAnterior) - parseFloat(numActual);
            break;
        case '*':
            resultado = parseFloat(numAnterior) * parseFloat(numActual);
            break;
        case '/':
            resultado = parseFloat(numAnterior) / parseFloat(numActual);
            break;
        case '%':
            resultado = parseFloat(numAnterior) % parseFloat(numActual);
            break;
        case '1/x':
            resultado = 1 / parseFloat(numActual);
            break;
        case 'sqrt':
            resultado = Math.sqrt(parseFloat(numActual));
            break;
        default:
            break;
    }
    numActual = resultado.toString();
    actualizar(numActual);
    operador = '';
    numAnterior = '';
    resuelto = true;
}

//Función para actualizar la pantalla
function actualizar(num) {
    document.getElementById('resultado').value = num;
}