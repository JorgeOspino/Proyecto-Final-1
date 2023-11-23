function iniciarSesion() {
    // Obtiene los valores de usuario y contraseña
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Verifica si los campos están vacíos
    if (usuario === "" || contrasena === "") {
        alert("Por favor, ingrese usuario y contraseña.");
        return;
    }

    // Obtiene los datos almacenados en localStorage
    var estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

    // Verifica si el usuario y la contraseña coinciden con algún registro
    var usuarioEncontrado = estudiantes.find(function (estudiante) {
        return estudiante.usuario === usuario && estudiante.contrasena === contrasena;
    });

    if (usuarioEncontrado) {
        // Realiza la redirección según el tipo de usuario
        switch (usuarioEncontrado.tipoUsuario) {
            case "estudiante":
                window.location.href = "catalogoprincipalestudiantes.html";
                break;
            case "administrador":
                window.location.href = "catalogoprincipaladministrador.html";
                break;
            case "instructor":
                // Redirige a la página correspondiente para instructores
                break;
            default:
                // Manejo por defecto (puedes agregar más casos según tus necesidades)
                break;
        }
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
