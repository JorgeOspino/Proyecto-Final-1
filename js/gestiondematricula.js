// Cargar matrículas desde localStorage al iniciar
var matriculas = JSON.parse(localStorage.getItem('matriculas')) || [];

function validarMatricula() {
    var fecha = document.getElementById('fecha').value;
    var tema = document.getElementById('selectTemas').value;
    var estudiante = document.getElementById('estudiante').value;
    var valor = document.getElementById('valor').value;

    if (!fecha || tema === "Seleccione un tema" || !estudiante) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    var matricula = {
        fecha: fecha,
        selectTemas: selectTemas,
        estudiante: estudiante,
        valor: valor
    };

    matriculas.push(matricula);

    // Guardar matrículas en localStorage después de cada modificación
    localStorage.setItem('matriculas', JSON.stringify(matriculas));

    alert('Matrícula registrada con éxito.');

    limpiarCampos();
}

function consultarMatricula() {
    var estudianteConsulta = prompt('Ingrese el nombre del estudiante a consultar:');
    if (estudianteConsulta) {
        var resultado = matriculas.find(function (matricula) {
            return matricula.estudiante === estudianteConsulta;
        });

        if (resultado) {
            alert('Información de Matrícula:\nFecha: ' + resultado.fecha +
                '\nTema: ' + resultado.tema +
                '\nEstudiante: ' + resultado.estudiante +
                '\nValor: ' + resultado.valor);
        } else {
            alert('Matrícula no encontrada.');
        }
    }
}

function eliminarMatricula() {
    var estudianteEliminar = prompt('Ingrese el nombre del estudiante a eliminar:');
    if (estudianteEliminar) {
        var indice = matriculas.findIndex(function (matricula) {
            return matricula.estudiante === estudianteEliminar;
        });

        if (indice !== -1) {
            matriculas.splice(indice, 1);
            alert('Matrícula eliminada correctamente.');
        } else {
            alert('Matrícula no encontrada.');
        }

        // Guardar matrículas en localStorage después de cada modificación
        localStorage.setItem('matriculas', JSON.stringify(matriculas));
    }
}

function actualizarMatricula() {
    var estudianteActualizar = prompt('Ingrese el nombre del estudiante a actualizar:');
    if (estudianteActualizar) {
        var indice = matriculas.findIndex(function (matricula) {
            return matricula.estudiante === estudianteActualizar;
        });

        if (indice !== -1) {
            var nuevaFecha = prompt('Ingrese la nueva fecha:');
            var nuevoTema = prompt('Ingrese el nuevo tema:');

            matriculas[indice].fecha = nuevaFecha || matriculas[indice].fecha;
            matriculas[indice].tema = nuevoTema || matriculas[indice].tema;

            var mensaje = 'Matrícula actualizada:\nFecha: ' + matriculas[indice].fecha +
                        '\nTema: ' + matriculas[indice].tema +
                        '\nEstudiante: ' + matriculas[indice].estudiante +
                        '\nValor: ' + matriculas[indice].valor;
            alert(mensaje);
        } else {
            alert('Matrícula no encontrada.');
        }

        // Guardar matrículas en localStorage después de cada modificación
        localStorage.setItem('matriculas', JSON.stringify(matriculas));
    }
}

function limpiarCampos() {
    document.getElementById('fecha').value = '';
    document.getElementById('selectTemas').value = 'Seleccione un tema';
    document.getElementById('estudiante').value = '';
}
