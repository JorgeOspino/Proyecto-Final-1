class Tema {
    constructor(codigo, nombre, precio, costo, descripcion, cursos) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
        this.costo = costo;
        this.descripcion = descripcion;
        this.cursos = cursos || [];
    }
}