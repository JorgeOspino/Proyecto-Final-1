var temas = [];

window.onload = function () {
    var selectTemas = document.getElementById('selectTemas');

    var temasGuardados = JSON.parse(localStorage.getItem('registrosTemas'));

    if (temasGuardados) {
        videos = temasGuardados.map(function (registro) {
            return registro.nombreTema;
        });

        videos.forEach(function (nombreTema) {
            var option = document.createElement('option');
            option.text = nombreTema;
            selectTemas.add(option);
        });
    }
};