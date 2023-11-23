function Insertar() {
    var nombre = document.getElementById("nombre");
    var correoElectronico = document.getElementById("correoElectronico")
    var segundoNombre = document.getElementById("segundoNombre");
    var direccionResidencia = document.getElementById("direccionResidencia");
    var primerApellido = document.getElementById("primerApellido");
    var fechaNacimiento = document.getElementById("fechaNacimiento");
    var segundoApellido = document.getElementById("segundoApellido");
    var estudiosRealizados = document.getElementById("estudiosRealizados").value;
    var tipoIdentificacion = document.getElementById("tipoIdentificacion").value;
    var usuario = document.getElementById("usuario").value;
    var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
    var contrasena = document.getElementById("contrasena").value;
    var tipoUsuario = document.getElementById("tipoUsuario").value;

     // Validar que los campos obligatorios no estén vacíos
    if (nombre === "" || primerApellido === "" || fechaNacimiento === "" || estudiosRealizados === "" || 
    tipoUsuario === "" || tipoIdentificacion === "" || numeroIdentificacion === "" || usuario === "" || 
    contrasena === "") {
        console.log("Por favor, complete todos los campos obligatorios.");
        return;
    }

    var estudiante = new Estudiante(nombre.value, correoElectronico.value, segundoNombre.value, 
        direccionResidencia.value, primerApellido.value, fechaNacimiento.value, segundoApellido.value, estudiosRealizados, 
        tipoIdentificacion, usuario, numeroIdentificacion, contrasena, tipoUsuario);

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]");
    estudiantes.push(estudiante);

    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    console.log(estudiantes);

    // Limpiar los campos después de la inserción
    nombre.value = "";
    correoElectronico.value = "";
    segundoNombre.value = "";
    direccionResidencia.value = "";
    primerApellido.value = "";
    fechaNacimiento.value = "";
    segundoApellido.value = "";
    document.getElementById("estudiosRealizados").selectedIndex = 0;
    document.getElementById("tipoIdentificacion").selectedIndex = 0;
    usuario.value = "";
    numeroIdentificacion.value = "";
    contrasena.value = "";
    document.getElementById("tipoUsuario").selectedIndex = 0;

    // Colocar el enfoque en el primer campo
    nombre.focus();
}



function Consultar() {
    var nombre = document.getElementById("nombre");
    var correoElectronico = document.getElementById("correoElectronico");
    var segundoNombre = document.getElementById("segundoNombre");
    var direccionResidencia = document.getElementById("direccionResidencia");
    var primerApellido = document.getElementById("primerApellido");
    var fechaNacimiento = document.getElementById("fechaNacimiento");
    var segundoApellido = document.getElementById("segundoApellido");
    var estudiosRealizados = document.getElementById("estudiosRealizados");
    var tipoIdentificacion = document.getElementById("tipoIdentificacion");
    var usuario = document.getElementById("usuario");
    var numeroIdentificacion = document.getElementById("numeroIdentificacion");
    var contrasena = document.getElementById("contrasena").value;
    var tipoUsuario = document.getElementById("tipoUsuario");

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]");

    encontrado = false;

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].numeroIdentificacion == numeroIdentificacion.value) {
            nombre.value = estudiantes[i].nombre;
            correoElectronico.value = estudiantes[i].correoElectronico;
            segundoNombre.value = estudiantes[i].segundoNombre;
            direccionResidencia.value = estudiantes[i].direccionResidencia;
            primerApellido.value = estudiantes[i].primerApellido;
            fechaNacimiento.value = estudiantes[i].fechaNacimiento;
            segundoApellido.value = estudiantes[i].segundoApellido;
            estudiosRealizados.value = estudiantes[i].estudiosRealizados;
            tipoIdentificacion.value = estudiantes[i].tipoIdentificacion;
            usuario.value = estudiantes[i].usuario;
            contrasena.value = estudiantes[i].contrasena;
            tipoUsuario.value = estudiantes[i].tipoUsuario;

            encontrado = true;
        }
    }

    // Si no se encontró ningún estudiante con el número de identificación proporcionado
    if (!encontrado) {
        alert("No se encontró ningún registro con el número de identificación proporcionado.");
    }
}



function Actualizar() {
    var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;

    // Validar que el número de identificación a buscar no esté vacío
    if (numeroIdentificacion === "") {
        alert("Ingrese un número de identificación para buscar.");
        return;
    }

    // Obtener los datos almacenados en localStorage
    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]");

    // Buscar el estudiante por número de identificación
    var estudianteEncontrado = estudiantes.find(function (estudiante) {
        return estudiante.numeroIdentificacion === numeroIdentificacion;
    });

    // Validar si se encontró el estudiante
    if (estudianteEncontrado) {
        // Aquí puedes realizar las acciones para actualizar el estudiante
        // Puedes utilizar los campos del formulario o input correspondientes

        // Por ejemplo, actualizar el nombre y correo electrónico
        estudianteEncontrado.nombre = document.getElementById("nombre").value;
        estudianteEncontrado.correoElectronico = document.getElementById("correoElectronico").value;
        estudianteEncontrado.segundoNombre = document.getElementById("segundoNombre").value;
        estudianteEncontrado.direccionResidencia = document.getElementById("direccionResidencia").value;
        estudianteEncontrado.primerApellido = document.getElementById("primerApellido").value;
        estudianteEncontrado.fechaNacimiento = document.getElementById("fechaNacimiento").value;
        estudianteEncontrado.segundoApellido = document.getElementById("segundoApellido").value;
        estudianteEncontrado.estudiosRealizados = document.getElementById("estudiosRealizados").value;
        estudianteEncontrado.tipoIdentificacion = document.getElementById("tipoIdentificacion").value;
        estudianteEncontrado.usuario = document.getElementById("usuario").value;
        estudianteEncontrado.numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
        estudianteEncontrado.contrasena = document.getElementById("contrasena").value;
        estudianteEncontrado.tipoUsuario = document.getElementById("tipoUsuario").value;

        // Actualizar localStorage
        localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

        // Limpiar campos después de la actualización (puedes ajustar según tus necesidades)
        document.getElementById("nombre").value = "";
        document.getElementById("correoElectronico").value = "";
        document.getElementById("segundoNombre").value = "";
        document.getElementById("direccionResidencia").value = "";
        document.getElementById("primerApellido").value = "";
        document.getElementById("fechaNacimiento").value = "";
        document.getElementById("segundoApellido").value = "";
        document.getElementById("estudiosRealizados").value = "";
        document.getElementById("tipoIdentificacion").value="";
        document.getElementById("usuario").value="";
        document.getElementById("numeroIdentificacion").value="";
        document.getElementById("contrasena").value="";
        document.getElementById("tipoUsuario").value="";

        alert("Registro actualizado exitosamente.");
    } else {
        alert("Registro no encontrado con el número de identificación proporcionado.");
    }
}




function Eliminar() {
    var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;

    var estudiantes = JSON.parse(localStorage.getItem("estudiantes") || "[]");

    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].numeroIdentificacion == numeroIdentificacion) {
            estudiantes.splice(i, 1);
            localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
            break; // Rompe el bucle después de eliminar el elemento
        }
    }

      // Limpiar campos después de la eliminacion (puedes ajustar según tus necesidades)
    document.getElementById("nombre").value = "";
    document.getElementById("correoElectronico").value = "";
    document.getElementById("segundoNombre").value = "";
    document.getElementById("direccionResidencia").value = "";
    document.getElementById("primerApellido").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("segundoApellido").value = "";
    document.getElementById("estudiosRealizados").value = "";
    document.getElementById("tipoIdentificacion").value="";
    document.getElementById("usuario").value="";
    document.getElementById("numeroIdentificacion").value="";
    document.getElementById("contrasena").value="";
    document.getElementById("tipoUsuario").value="";

    alert("Registro eliminado exitosamente");
}


