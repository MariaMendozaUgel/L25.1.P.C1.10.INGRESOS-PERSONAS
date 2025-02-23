export default class Cl_vPersonas {
    constructor (){
        this.vista = document.getElementById ("personasForm");
        this.inNombre = document.getElementById ("personasForm_inNombre");
        this.inIngreso = document.getElementById ("personasForm_inIngreso");
        this.btAceptar = document.getElementById ("personasForm_btAceptar");
    }
    get nombre () {
        return this.inNombre.value;
    }
    get ingreso () {
        return +this.inIngreso.value;
    }
    mostrar () {
        this.vista.hidden = false;
    }
    ocultar () {
        this.vista.hidden = true;
    }
}