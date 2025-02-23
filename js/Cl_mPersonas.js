export default class Cl_mPersonas {
    constructor ({nombre, ingreso}) { 
        this.nombre = nombre;
        this.ingreso = ingreso;
    }

    set nombre (nombre) {
        this._nombre = nombre;
    }

    get nombre () {
        return this._nombre.toUpperCase (); 
    }

    set ingreso (ingreso) {
        this._ingreso = +ingreso;
    }

    get ingreso () {
        return this._ingreso;
    }
}