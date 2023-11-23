function mostrarVideoSeleccionado() {
    var selectVideos = document.getElementById("selectVideosCursos");
    var selectedVideo = selectVideos.options[selectVideos.selectedIndex].value;

    // Llamada a la función en evaluacion.js para mostrar el video seleccionado
    mostrarVideoEnEvaluacion(selectedVideo);
}
