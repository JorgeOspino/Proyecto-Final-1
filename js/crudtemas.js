// Archivo: registro.js

var registrosTemas = JSON.parse(localStorage.getItem('registrosTemas')) || [];

function guardarDatosTemas() {
    var codigoTema = document.getElementById('codigoTema').value;
    var nombreTema = document.getElementById('nombreTema').value;
    var precioTema = document.getElementById('precioTema').value;
    var costoTema = document.getElementById('costoTema').value;
    var descripcionTema = document.getElementById("descripcionTema").value;
    var selectCursosTemas = document.getElementById('selectCursosTemas').value;

    if (codigoTema.trim() !== '') {
        var registro = {
            codigoTema: codigoTema,
            nombreTema: nombreTema,
            precioTema: precioTema,
            costoTema: costoTema,
            descripcionTema: descripcionTema,
            selectCursosTemas: selectCursosTemas
        };

        registrosTemas.push(registro);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem('registrosTemas', JSON.stringify(registrosTemas));

        // Limpiar los campos después de guardar
        limpiarCampos();
    }
}


function consultarDatosTema() {
    var codigoConsulta = prompt('Ingrese el codigo del tema a consultar:');
    if (codigoConsulta) {
        var resultado = registrosTemas.find(function (registro) {
            return registro.codigoTema === codigoConsulta;
        });

        if (resultado) {
            // Mostrar la información directamente en los campos de entrada
            document.getElementById('codigoTema').value = resultado.codigoTema;
            document.getElementById('nombreTema').value = resultado.nombreTema;
            document.getElementById('precioTema').value = resultado.precioTema;
            document.getElementById('costoTema').value = resultado.costoTema;
            document.getElementById('descripcionTema').value = resultado.descripcionTema;
            document.getElementById('selectCursosTemas').value = resultado.selectCursosTemas;

        } else {
            alert('Registro no encontrado.');
        }
    }
}

function actualizarRegistroTema() {
    var codigoConsulta = prompt('Ingrese el codigo del curso a actualizar:');
    if (codigoConsulta) {
        var indice = registrosTemas.findIndex(function (registro) {
            return registro.codigoTema === codigoConsulta;
        });

        if (indice !== -1) {
            // Mostrar mensajes para cada campo a actualizar
            var nuevoCodigoTema = prompt('Ingrese el nuevo codigo:');
            var nuevoNombreTema = prompt('Ingrese el nuevo nombre:');
            var nuevoPrecioTema = prompt('Ingrese el nuevo precio:');
            var nuevoCostoTema = prompt('Ingrese el nuevo costo:');
            var nuevaDescripcionTema = prompt('Ingrese la nueva descripcion:');

            // Actualizar los campos en el mensaje
            registrosTemas[indice].codigoTema = nuevoCodigoTema;
            registrosTemas[indice].nombreTema = nuevoNombreTema;
            registrosTemas[indice].precioTema = nuevoPrecioTema;
            registrosTemas[indice].costoTema = nuevoCostoTema;
            registrosTemas[indice].descripcionTema = nuevaDescripcionTema;

            // Mostrar mensaje con la información actualizada
            var mensaje = `Registro actualizado:\nCodigo del tema: ${nuevoCodigoTema}\nNombre del tema: ${nuevoNombreTema}
            \nPrecio: ${nuevoPrecioTema}\nCosto: ${nuevoCostoTema}\nDescripcion del tema: ${nuevaDescripcionTema}`;
            alert(mensaje);

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('registrosTemas', JSON.stringify(registrosTemas));

            // Reflejar los datos en los campos de entrada
            document.getElementById('codigoTema').value = nuevoCodigoTema;
            document.getElementById('nombreTema').value = nuevoNombreTema;
            document.getElementById('precioTema').value = nuevoPrecioTema;
            document.getElementById('costoTema').value = nuevoCostoTema;
            document.getElementById('descripcionTema').value = nuevaDescripcionTema;
        } else {
            alert('Registro no encontrado.');
        }
    }
}


function eliminarRegistroTema() {
    var CodigoConsulta = prompt('Ingrese el codigo del tema a eliminar:');
    if (CodigoConsulta) {
        var indice = registrosTemas.findIndex(function (registro) {
            return registro.codigoTema === CodigoConsulta;
        });

        if (indice !== -1) {
            // Eliminar el registro
            registrosTemas.splice(indice, 1);

            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('registrosTemas', JSON.stringify(registrosTemas));

            alert("Se elimino exitosamente el registro");

        }
        else {
            alert('Registro no encontrado.');
        }
    }
}

function limpiarCampos() {
    document.getElementById('codigoTema').value = '';
    document.getElementById('nombreTema').value = '';
    document.getElementById('precioTema').value = '';
    document.getElementById('costoTema').value = '';
    document.getElementById('descripcionTema').value = '';
    document.getElementById('selectCursosTemas').value = '';

}

// Nueva función para limpiar los campos de entrada
function limpiarCamposRegistroTemas() {
    limpiarCampos();
}
