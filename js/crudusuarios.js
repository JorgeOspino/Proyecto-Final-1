function insertar() {
    var nombre1 = document.getElementById("nombre1");
    var nombre2 = document.getElementById("nombre2");
    var apellido1 = document.getElementById("apellido1");
    var apellido2 = document.getElementById("apellido2");
    var tipoID = document.getElementById("tipoID");
    var numeroID = document.getElementById("numeroID");
    var direccion = document.getElementById("direccion");
    var fechaN = document.getElementById("fechaN");
    var estudios = document.getElementById("estudios");
    var correo = document.getElementById("correo");
    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");
    var tipo = document.getElementById("tipo");


    usuarioObjeto = new Usuario(nombre1.value,nombre2.value,apellido1.value,apellido2.value,
        tipoID.value,numeroID.value,direccion.value,fechaN.value,estudios.value,correo.value,usuario.value,
        password.value, tipo.value)

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");
    usuarios.push(usuarioObjeto);

    localStorage.setItem("usuarios",
        JSON.stringify(usuarios))
    
    nombre1.value = ""   
    nombre2.value = ""
    apellido1.value = ""
    apellido2.value = ""   
    tipoID.value = ""
    numeroID.value = ""
    direccion.value = ""
    fechaN.value = ""
    estudios.value = ""
    correo.value = ""
    usuario.value = ""
    password.value = ""
    tipo.value = ""

    console.log(usuarios)
}
function actualizar() { 
    var numeroID = document.getElementById("numeroID").value;

    if (numeroID === "") {
        alert("Ingrese un número de identificación para buscar.");
        return;
    }
    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    var usuarioEncontrado = usuarios.find(function (estudiante) {
        return estudiante.numeroID === numeroID;
    });

    if (usuarioEncontrado) {
        
        usuarioEncontrado.nombre1 = document.getElementById("nombre1").value;
        usuarioEncontrado.nombre2 = document.getElementById("nombre2").value;
        usuarioEncontrado.apellido1 = document.getElementById("apellido1").value;
        usuarioEncontrado.apellido2 = document.getElementById("apellido2").value;
        usuarioEncontrado.tipoID = document.getElementById("tipoID").value;
        usuarioEncontrado.fechaN = document.getElementById("fechaN").value;
        usuarioEncontrado.numeroID = document.getElementById("numeroID").value;
        usuarioEncontrado.estudios = document.getElementById("estudios").value;
        usuarioEncontrado.direccion = document.getElementById("direccion").value;
        usuarioEncontrado.usuario = document.getElementById("usuario").value;
        usuarioEncontrado.numeroID = document.getElementById("numeroID").value;
        usuarioEncontrado.password = document.getElementById("password").value;
        usuarioEncontrado.tipo = document.getElementById("tipo").value;


        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        document.getElementById("nombre1").value = "";
        document.getElementById("nombre2").value = "";
        document.getElementById("apellido1").value = "";
        document.getElementById("apellido2").value = "";
        document.getElementById("tipoID").value = "";
        document.getElementById("fechaN").value = "";
        document.getElementById("numeroID").value = "";
        document.getElementById("estudios").value = "";
        document.getElementById("direccion").value="";
        document.getElementById("usuario").value="";
        document.getElementById("numeroID").value="";
        document.getElementById("password").value="";
        document.getElementById("tipo").value="";

        alert("Registro actualizado exitosamente.");
    } else {
        alert("Registro no encontrado con el número de identificación proporcionado.");
    }
}
function eliminar() {
    var numeroID = document.getElementById("numeroID").value;

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].numeroID == numeroID) {
            usuarios.splice(i, 1);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            break; // Rompe el bucle después de eliminar el elemento
        }
    }

      // Limpiar campos después de la eliminacion (puedes ajustar según tus necesidades)
    document.getElementById("nombre1").value = "";
    document.getElementById("nombre2").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.getElementById("tipoID").value = "";
    document.getElementById("numeroID").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("fechaN").value = "";
    document.getElementById("estudios").value="";
    document.getElementById("usuario").value="";
    document.getElementById("tipo").value="";
    document.getElementById("password").value="";
    document.getElementById("correo").value="";

    alert("Registro eliminado exitosamente");
 }
function consultar() {
    var nombre1 = document.getElementById("nombre1");
    var nombre2 = document.getElementById("nombre2");
    var apellido1 = document.getElementById("apellido1");
    var apellido2 = document.getElementById("apellido2");
    var tipoID = document.getElementById("tipoID");
    var numeroID = document.getElementById("numeroID");
    var direccion = document.getElementById("direccion");
    var fechaN = document.getElementById("fechaN");
    var estudios = document.getElementById("estudios");
    var usuario = document.getElementById("usuario");
    var correo = document.getElementById("correo");
    var tipo = document.getElementById("tipo");
    var password = document.getElementById("password").value;
   

    var usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");

    encontrado = false;

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].numeroID == numeroID.value) {
            nombre1.value = usuarios[i].nombre1;
            nombre2.value = usuarios[i].nombre2;
            apellido1.value = usuarios[i].apellido1;
            apellido2.value = usuarios[i].apellido2;
            tipoID.value = usuarios[i].tipoID;
            correo.value = usuarios[i].correo
            direccion.value = usuarios[i].direccion;
            fechaN.value = usuarios[i].fechaN;
            estudios.value = usuarios[i].estudios;
            usuario.value = usuarios[i].usuario;
           password.value = usuarios[i].password;
           tipo.value = usuarios[i].tipo;
           
            

            encontrado = true;
        }
    }

    // Si no se encontró ningún estudiante con el número de identificación proporcionado
    if (!encontrado) {
        alert("No se encontró ningún registro con el número de identificación proporcionado.");
    }
 }
function loguear() {

    var usuario = document.getElementById("usuario");
    var password = document.getElementById("password");

    var usuarios = JSON.parse(
        localStorage.getItem("usuarios") || "[]");

    var encontrado = false

    for (let i = 0; i < usuarios.length && !encontrado;
        i++) {

        if (usuarios[i].usuario == usuario.value &&
            usuarios[i].password == password.value) {

            if (usuarios[i].tipo == "admin")
                location.href = "menuadministrador.html"
            else if (usuarios[i].tipo == "instructor")
                location.href = "menuinstructor.html"
            else if (usuarios[i].tipo == "estudiante")
                location.href = "menuestudiante.html"
            
                encontrado = true   

        }
    }

    if (!encontrado)
        alert('Usuario y/o password errado')
}