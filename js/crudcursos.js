// Archivo: registro.js

var registrosCursos = JSON.parse(localStorage.getItem('registrosCursos')) ||[];

function guardarDatosCursos() {
    var codigoCurso = document.getElementById('codigoCurso').value;
    var nombreCurso = document.getElementById('nombreCurso').value;
    var selectVideosCursos = document.getElementById('selectVideosCursos').value;

    if (codigoCurso.trim() !== '') {
        var registro = {
            codigoCurso: codigoCurso,
            nombreCurso: nombreCurso,
            selectVideosCursos: selectVideosCursos
        };

        registrosCursos.push(registro);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem('registrosCursos', JSON.stringify(registrosCursos));

        // Limpiar los campos después de guardar
        limpiarCampos();
    }
}


function consultarDatosCurso() {
    var codigoConsulta = prompt('Ingrese el codigo del curso a consultar:');
    if (codigoConsulta) {
        var resultado = registrosCursos.find(function (registro) {
            return registro.codigoCurso === codigoConsulta;
        });

        if (resultado) {
            // Mostrar la información directamente en los campos de entrada
            document.getElementById('codigoCurso').value = resultado.codigoCurso;
            document.getElementById('nombreCurso').value = resultado.nombreCurso;
            document.getElementById('selectVideosCursos').value = resultado.selectVideosCursos;

        } else {
            alert('Registro no encontrado.');
        }
    }
}

function actualizarRegistroCurso() {
    var codigoConsulta = prompt('Ingrese el codigo del curso a actualizar:');
    if (codigoConsulta) {
        var indice = registrosCursos.findIndex(function (registro) {
            return registro.codigoCurso === codigoConsulta;
        });

        if (indice !== -1) {
            // Mostrar mensajes para cada campo a actualizar
            var nuevoCodigoCurso = prompt('Ingrese el nuevo codigo:');
            var nuevoNombreCurso = prompt('Ingrese el nuevo nombre:');

            // Actualizar los campos en el mensaje
            registrosCursos[indice].codigoCurso = nuevoCodigoCurso;
            registrosCursos[indice].nombreCurso = nuevoNombreCurso;

            // Mostrar mensaje con la información actualizada
            var mensaje = `Registro actualizado:\nCodigo: ${nuevoCodigoCurso}\nNombre: ${nuevoNombreCurso}`;
            alert(mensaje);

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('registrosCursos', JSON.stringify(registrosCursos));

            // Reflejar los datos en los campos de entrada
            document.getElementById('codigoCurso').value = nuevoCodigoCurso;
            document.getElementById('nombreCurso').value = nuevoNombreCurso;
        } else {
            alert('Registro no encontrado.');
        }
    }
}


function eliminarRegistroCurso() {
    var CodigoConsulta = prompt('Ingrese el codigo del curso a eliminar:');
    if (CodigoConsulta) {
        var indice = registrosCursos.findIndex(function (registro) {
            return registro.codigoCurso === CodigoConsulta;
        });

        if (indice !== -1) {
            // Eliminar el registro
            registrosCursos.splice(indice, 1);

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('registrosCursos', JSON.stringify(registrosCursos));

            alert("Se elimino exitosamente el registro");

        }
        else {
            alert('Registro no encontrado.');
        }
    }
}

function limpiarCampos() {
    document.getElementById('codigoCurso').value = '';
    document.getElementById('nombreCurso').value = '';
    document.getElementById('selectVideosCursos').value = '';

}

// Nueva función para limpiar los campos de entrada
function limpiarCamposRegistroCursos() {
    limpiarCampos();
}
