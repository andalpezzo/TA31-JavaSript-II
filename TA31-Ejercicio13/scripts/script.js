//Dependiendo del id que le pasemos por parámetro en los listeners, mostramos un mensaje u otro
const listenerParrafo = (id) => {
    //Obtenemos el id de la etiqueta <p>
    let parrafo = document.getElementById(id);

    //Event listener del la id del parrafo 
    parrafo.addEventListener("click", () => {
        window.alert("Has clicado el párrafo que esta fuera de la tabla");
    });
}

const listenerTablas = (id) => {
    //If por si clicamos a la tabla 1 o la 2
    if (id === "tabla1") {
        let p = document.getElementById(id);
        p.addEventListener("click", () => {
            window.alert("Has clicado un párrafo de la tabla 1");
        });
    } else if (id === "tabla2") {
        let p = document.getElementById(id);
        p.addEventListener("click", () => {
            window.alert("Has clicado un párrafo de la tabla 2");
        });
    }
}

// Añadimos los listeners cuando se hayan cargado los elementos HTML
document.addEventListener("DOMContentLoaded", () => {
    listenerParrafo("parrafo");
    listenerTablas("tabla1");
    listenerTablas("tabla2");
});