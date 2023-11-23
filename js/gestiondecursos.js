// gestiondecursos.js

// Función para asociar un video al curso
function asociarVideoAlCurso(videoNombre, videoURL) {
    var selectVideosCursos = document.getElementById("videosAsociados");

    // Crear una nueva opción con el nombre del video y su URL
    var option = document.createElement("option");
    option.value = videoNombre;
    option.setAttribute("data-url", videoURL);
    option.text = videoNombre;

    // Agregar la nueva opción al select
    selectVideosCursos.appendChild(option);
}

// Puedes agregar más funciones relacionadas con la gestión de cursos aquí...
