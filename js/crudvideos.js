// Archivo: registro.js

var registros = JSON.parse(localStorage.getItem('registros')) || [];

function guardarDatos() {
    var codigoVideo = document.getElementById('codigoVideo').value;
    var nombreVideo = document.getElementById('nombreVideo').value;
    var urlVideo = document.getElementById('urlVideo').value;
    var idiomaOriginal = document.getElementById('idiomaOriginal').value;

    // Obtener idiomas disponibles seleccionados
    var idiomas = [];
    var checkboxIdiomasDisponibles = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxIdiomasDisponibles.forEach(function (checkbox) {
        idiomas.push(checkbox.value);
    });

     // Obtener subtitulos seleccionados
    var subtitulos = [];
    var checkboxSubtitulosDisponibles = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxSubtitulosDisponibles.forEach(function (checkbox) {
        subtitulos.push(checkbox.value);
    });

    var duracionHoras = document.getElementById('duracionHoras').value;
    var duracionMinutos = document.getElementById('duracionMinutos').value;
    var duracionSegundos = document.getElementById('duracionSegundos').value;

    if (codigoVideo.trim() !== '') {
        var registro = {
            codigoVideo: codigoVideo,
            nombreVideo: nombreVideo,
            urlVideo: urlVideo,
            idiomaOriginal: idiomaOriginal,
            idiomas: idiomas,
            subtitulos: subtitulos,
            duracionHoras: duracionHoras,
            duracionMinutos: duracionMinutos,
            duracionSegundos: duracionSegundos
        };

        registros.push(registro);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem('registros', JSON.stringify(registros));

        // Limpiar los campos después de guardar
        limpiarCampos();
    }
}


function consultarDatos() {
    var codigoConsulta = prompt('Ingrese el codigo del video a consultar:');
    if (codigoConsulta) {
        var resultado = registros.find(function (registro) {
            return registro.codigoVideo === codigoConsulta;
        });

        if (resultado) {
            // Mostrar la información directamente en los campos de entrada
            document.getElementById('codigoVideo').value = resultado.codigoVideo;
            document.getElementById('nombreVideo').value = resultado.nombreVideo;
            document.getElementById('urlVideo').value = resultado.urlVideo;
            document.getElementById('idiomaOriginal').value = resultado.idiomaOriginal;

            // Marcar los deportes seleccionados
            var checkboxIdiomasDisponibles = document.querySelectorAll('input[type="checkbox"]');
            checkboxIdiomasDisponibles.forEach(function (checkbox) {
                checkbox.checked = resultado.idiomas.includes(checkbox.value);
            });

             // Marcar los deportes seleccionados
            var checkboxSubtitulosDisponibles = document.querySelectorAll('input[type="checkbox"]');
            checkboxSubtitulosDisponibles.forEach(function (checkbox) {
                checkbox.checked = resultado.subtitulos.includes(checkbox.value);
            });

            document.getElementById('duracionHoras').value = resultado.duracionHoras;
            document.getElementById('duracionMinutos').value = resultado.duracionMinutos;
            document.getElementById('duracionSegundos').value = resultado.duracionSegundos;

        } else {
            alert('Registro no encontrado.');
        }
    }
}

function actualizarRegistro() {
    var codigoConsulta = prompt('Ingrese el codigo del video a actualizar:');
    if (codigoConsulta) {
        var indice = registros.findIndex(function (registro) {
            return registro.codigoVideo === codigoConsulta;
        });

        if (indice !== -1) {
            // Mostrar mensajes para cada campo a actualizar
            var nuevoCodigo = prompt('Ingrese el nuevo codigo:');
            var nuevoNombre = prompt('Ingrese el nuevo nombre:');
            var nuevaUrl = prompt('Ingrese la nueva url:');
            var nuevoIdiomaOriginal = prompt('Ingrese el nuevo idioma original:');
            var nuevoDuracionHora = prompt('Ingrese la nueva duracion en horas:');
            var nuevoDuracionMinuto = prompt('Ingrese la nueva duracion en minutos:');
            var nuevoDuracionSegundo = prompt('Ingrese la nueva duracion en segundos:');

            // Actualizar los campos en el mensaje
            registros[indice].codigoVideo = nuevoCodigo;
            registros[indice].nombreVideo = nuevoNombre;
            registros[indice].urlVideo = nuevaUrl;
            registros[indice].idiomaOriginal = nuevoIdiomaOriginal;
            registros[indice].duracionHoras = nuevoDuracionHora;
            registros[indice].duracionMinutos = nuevoDuracionMinuto;
            registros[indice].duracionSegundos = nuevoDuracionSegundo;

            // Mostrar mensaje con la información actualizada
            var mensaje = `Registro actualizado:\nCodigo: ${nuevoCodigo}\nNombre: ${nuevoNombre}\nUrl: ${nuevaUrl}
            \nIdioma Original: ${nuevoIdiomaOriginal}\nDuracion en horas: ${nuevoDuracionHora}
            \nDuracion en minutos: ${nuevoDuracionMinuto}\nDuracion en segundos: ${nuevoDuracionSegundo}`;
            alert(mensaje);

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('registros', JSON.stringify(registros));

            // Reflejar los datos en los campos de entrada
            document.getElementById('codigoVideo').value = nuevoCodigo;
            document.getElementById('nombreVideo').value = nuevoNombre;
            document.getElementById('urlVideo').value = nuevaUrl;
            document.getElementById('idiomaOriginal').value = nuevoIdiomaOriginal;
            document.getElementById('duracionHoras').value = nuevoDuracionHora;
            document.getElementById('duracionMinutos').value = nuevoDuracionMinuto;
            document.getElementById('duracionSegundos').value = nuevoDuracionSegundo;
        } else {
            alert('Registro no encontrado.');
        }
    }
}

function actualizarIdiomasDisponibles() {
    var codigoConsulta = prompt('Ingrese el codigo para actualizar idiomas disponibles:');
    if (codigoConsulta) {
        var indice = registros.findIndex(function (registro) {
            return registro.codigoVideo === codigoConsulta;
        });

        if (indice !== -1) {
            // Obtener deportes actualizados
            var nuevosIdiomasDisponibles = [];
            var checkboxIdiomasDisponibles = document.querySelectorAll('input[type="checkbox"]:checked');
            checkboxIdiomasDisponibles.forEach(function (checkbox) {
                nuevosIdiomasDisponibles.push(checkbox.value);
            });

            // Actualizar los deportes del registro
            registros[indice].idiomas = nuevosIdiomasDisponibles;

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('registros', JSON.stringify(registros));
        } else {
            alert('Registro no encontrado.');
        }
    }
}

function eliminarRegistro() {
    var CodigoConsulta = prompt('Ingrese el nombre a eliminar:');
    if (CodigoConsulta) {
        var indice = registros.findIndex(function (registro) {
            return registro.codigoVideo === CodigoConsulta;
        });

        if (indice !== -1) {
            // Eliminar el registro
            registros.splice(indice, 1);

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('registros', JSON.stringify(registros));

            alert("Se elimino exitosamente el registro");

        }
        else {
            alert('Registro no encontrado.');
        }
    }
}

function limpiarCampos() {
    document.getElementById('codigoVideo').value = '';
    document.getElementById('nombreVideo').value = '';
    document.getElementById('urlVideo').value = '';
    document.getElementById('idiomaOriginal').value = '';

    // Desmarcar checkboxes de deportes
    var checkboxIdiomasDisponibles = document.querySelectorAll('input[type="checkbox"]');
    checkboxIdiomasDisponibles.forEach(function (checkbox) {
        checkbox.checked = false;
    });

     // Desmarcar checkboxes de deportes
    var checkboxSubtitulosDisponibles = document.querySelectorAll('input[type="checkbox"]');
    checkboxSubtitulosDisponibles.forEach(function (checkbox) {
        checkbox.checked = false;
    });

    document.getElementById('duracionHoras').value = '';
    document.getElementById('duracionMinutos').value = '';
    document.getElementById('duracionSegundos').value = '';

}

// Nueva función para limpiar los campos de entrada
function limpiarCamposRegistro() {
    limpiarCampos();
}
