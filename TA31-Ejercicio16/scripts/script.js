
function actualizarReloj() {
    var reloj = document.getElementById("reloj");
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes().toString().padStart(2, '0');
    var segundos = fecha.getSeconds().toString().padStart(2, '0');
    
    var horaString = horas + ':' + minutos + ':' + segundos;
    reloj.innerHTML = horaString;
  }

  setInterval(actualizarReloj, 1000);