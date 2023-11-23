var videos = [];

window.onload = function () {
    var selectVideosCursos = document.getElementById('selectVideosCursos');

    var videosGuardados = JSON.parse(localStorage.getItem('registros'));

    if (videosGuardados) {
        videos = videosGuardados.map(function (registro) {
            return registro.urlVideo;
        });

        videos.forEach(function (urlVideo) {
            var option = document.createElement('option');
            option.text = urlVideo;
            selectVideosCursos.add(option);
        });
    }
};

