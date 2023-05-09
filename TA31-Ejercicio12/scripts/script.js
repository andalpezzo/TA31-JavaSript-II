
//Funcion para validar si hay una fecha demtro de la cadena
function validarFecha(texto) {
    var fecha = /\b\d{2}\/\d{2}\/\d{4}\b/;

    if (fecha.test(texto)) {
        return "En la cadena introducida SI hay una fecha";
    } else {
        return "En la cadena introducida NO hay ningúna una fecha";
    }

}
console.log(validarFecha("Nací el 05/04/1982 en Donostia."));
console.log(validarFecha("Nací en Donostia."));

//Función que valda si el email introducido de manera correcta
function validarEmail(texto) {
    var email = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

    if (email.test(texto)) {
        return "El email introducido SI es correcto";
    } else {
        return "El email introducido NO es correcto";
    }

}
console.log(validarEmail("andalpezzo@gmail.com"));
console.log(validarEmail("andalpezzo.gmail.com"));

//Funcion que reemplaza algunos caracteres reservados por sus correspondientes entidades
function escapeHTML(text) {
    var replacements = [["&", "&amp;"], ["\"", "&quot;"], ["<", "&lt;"], [">", "&gt;"]];

    replacements.forEach(function (replace) {
        text = text.replace(replace[0], replace[1]);
    });
    return text;
}
console.log(escapeHTML("Andrea & company"));
console.log(escapeHTML("1/4 de pizza"));
console.log(escapeHTML("<section>"));

//Función que invierte el nombre y los apellidos y los seapara por una coma
function invertirNombreApellido(nombreCompleto) {
    let nombreApellidos = nombreCompleto.split(" ");
    let nombreApellidosInvertido = nombreApellidos.reverse().join(", ");
    return nombreApellidosInvertido;
}

console.log(invertirNombreApellido("Andrea Dal Pezzo"));

//Función que elimina una etiqueta potencialmente peligrosa
function eliminaEtiqueta() {
    let etiqueta = document.querySelector("script");
    etiqueta.remove();
};

document.addEventListener('DOMContentLoaded', () => {
    eliminaEtiqueta();
});
