var cursos = [];

window.onload = function () {
    var selectCursosTemas = document.getElementById('selectCursosTemas');

    var cursosGuardados = JSON.parse(localStorage.getItem('registrosCursos'));

    if (cursosGuardados) {
        videos = cursosGuardados.map(function (registro) {
            return registro.nombreCurso;
        });

        videos.forEach(function (nombreCurso) {
            var option = document.createElement('option');
            option.text = nombreCurso;
            selectCursosTemas.add(option);
        });
    }
};