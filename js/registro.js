class Estudiante {
    constructor(nombre, correoElectronico, segundoNombre, direccionResidencia, primerApellido, 
        fechaNacimiento, segundoApellido, estudiosRealizados, tipoIdentificacion, usuario, numeroIdentificacion, 
        contrasena, tipoUsuario) {
        this.nombre = nombre;
        this.correoElectronico = correoElectronico;
        this.segundoNombre = segundoNombre;
        this.direccionResidencia = direccionResidencia;
        this.primerApellido = primerApellido;
        this.fechaNacimiento = fechaNacimiento;
        this.segundoApellido = segundoApellido;
        this.estudiosRealizados = estudiosRealizados;
        this.tipoIdentificacion = tipoIdentificacion;
        this.usuario = usuario;
        this.numeroIdentificacion = numeroIdentificacion;
        this.contrasena = contrasena;
        this.tipoUsuario = tipoUsuario;
    }
}

class Tema {
    constructor(codigoTema, nombreTema, precioTema, costoTema, descripcionTema, cursosAsociados) {
        this.codigoTema = codigoTema;
        this.nombreTema = nombreTema;
        this.precioTema = precioTema;
        this.costoTema = costoTema;
        this.descripcionTema = descripcionTema;
        this.cursosAsociados = cursosAsociados;
    }
}

// Clase para representar la información de Cursos
class Curso {
    constructor(codigoCurso, nombreCurso, videosAsociados) {
        this.codigoCurso = codigoCurso;
        this.nombreCurso = nombreCurso;
        this.videosAsociados = videosAsociados;
    }
}

// Clase para representar la información de Videos
class Video {
    constructor(codigo, nombre, url, idiomaOriginal, idiomasDisponibles, subtitulosDisponibles, duracion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.url = url;
        this.idiomaOriginal = idiomaOriginal;
        this.idiomasDisponibles = idiomasDisponibles;
        this.subtitulosDisponibles = subtitulosDisponibles;
        this.duracion = duracion;
    }
}
