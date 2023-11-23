class Curso {
    constructor(codigo, nombre, videos) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.videos = videos || [];
    }
}

var nombres = [];

window.onload = function () {
    var selectNombres = document.getElementById('selectNombres');

    var nombresGuardados = JSON.parse(localStorage.getItem('registros'));

    if (nombresGuardados) {
        nombres = nombresGuardados.map(function (registro) {
            return registro.nombre;
        });

        nombres.forEach(function (nombre) {
            var option = document.createElement('option');
            option.text = nombre;
            selectNombres.add(option);
        });
    }
};

