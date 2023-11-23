// Clase Video
class Video {
    constructor(codigo, nombre, url, idiomaOriginal, idiomasDisponibles, subtitulosDisponibles, duracion) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.url = url;
        this.idiomaOriginal = idiomaOriginal;
        this.idiomasDisponibles = idiomasDisponibles || [];
        this.subtitulosDisponibles = subtitulosDisponibles || [];
        this.duracion = duracion || { horas: 0, minutos: 0, segundos: 0 };
    }
}

// Función para insertar un video
function insertarVideo() {
    // Obtener valores del formulario
    var codigoVideo = document.getElementById("codigoVideo");
    var nombreVideo = document.getElementById("nombreVideo");
    var urlVideo = document.getElementById("urlVideo");
    var idiomaOriginal = document.getElementById("idiomaOriginal");
    var idiomasDisponibles = obtenerValoresCheckbox("idiomasDisponibles");
    var subtitulosDisponibles = obtenerValoresCheckbox("subtitulosDisponibles");
    var duracionHoras = document.getElementById("duracionHoras");
    var duracionMinutos = document.getElementById("duracionMinutos");
    var duracionSegundos = document.getElementById("duracionSegundos");

    // Validar que los campos obligatorios no estén vacíos
    if (!codigoVideo.value || !nombreVideo.value || !urlVideo.value || !idiomaOriginal.value || !duracionHoras.value || !duracionMinutos.value || !duracionSegundos.value) {
        console.log("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Crear un objeto que represente el video
    var video = new Video(
        codigoVideo.value,
        nombreVideo.value,
        urlVideo.value,
        idiomaOriginal.value,
        idiomasDisponibles,
        subtitulosDisponibles,
        {
            horas: parseInt(duracionHoras.value) || 0,
            minutos: parseInt(duracionMinutos.value) || 0,
            segundos: parseInt(duracionSegundos.value) || 0
        }
    );

    // Guardar el video en el almacenamiento local
    var videosGuardados = JSON.parse(localStorage.getItem("videos") || "[]");
    videosGuardados.push(video);
    localStorage.setItem("videos", JSON.stringify(videosGuardados));

    // Limpiar los campos después de guardar
    codigoVideo.value = "";
    nombreVideo.value = "";
    urlVideo.value = "";
    idiomaOriginal.value = "";
    duracionHoras.value = "";
    duracionMinutos.value = "";
    duracionSegundos.value = "";

    // Actualizar el select en la página de Gestión de Cursos
    actualizarSelectVideosCursos(video.nombre, video.url);

    console.log("Video guardado:", video);
}

// Función para obtener los valores de los checkboxes
function obtenerValoresCheckbox(nombreCheckbox) {
    var checkboxes = document.getElementsByName(nombreCheckbox);
    var valoresSeleccionados = [];

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            valoresSeleccionados.push(checkbox.id);
        }
    });

    return valoresSeleccionados;
}

// Función para actualizar el select de Videos Asociados en Gestión de Cursos
function actualizarSelectVideosCursos(videoNombre, videoURL) {
    var selectVideosCursos = document.getElementById("videosAsociados");

    // Crear una nueva opción con el nombre del video y su URL
    var option = document.createElement("option");
    option.value = videoNombre;
    option.setAttribute("data-url", videoURL);
    option.text = videoNombre;

    // Agregar la nueva opción al select
    selectVideosCursos.appendChild(option);
}
