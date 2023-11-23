// Cargar temas desde localStorage al iniciar
var registrosTemas = JSON.parse(localStorage.getItem('registrosTemas')) || [];

function guardarDatosTemas() {
    var selectCursosTemas = document.getElementById('selectCursosTemas').value;

    if (selectCursosTemas.trim() !== '') {
        var registro = {
            selectCursosTemas: selectCursosTemas
        };

        registrosTemas.push(registro);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem('registrosTemas', JSON.stringify(registrosTemas));

        alert('Se guardó correctamente.');

        // Limpiar los campos después de guardar
        limpiarCampos();
    } else {
        alert('Seleccione un curso antes de guardar.');
    }
}

function consultarDatosTemas() {
    var resultado = registrosTemas[registrosTemas.length - 1];

    if (resultado) {
        alert('Último curso seleccionado:\nCurso: ' + resultado.selectCursosTemas);
    } else {
        alert('No hay cursos registrados.');
    }
}

function limpiarCampos() {
    document.getElementById('selectCursosTemas').value = '';
}
