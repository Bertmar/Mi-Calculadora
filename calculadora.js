const display = document.getElementById("display");

function insertar(valor) {
    display.value += valor;
}

function limpiar() {
    display.value = "";
}

function borrar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}