export default class Cl_controlador { 
    constructor (modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }

    agregarPersonas () {
        this.modelo.procesarPersonas(this.vista.agregarPersonas ());
        this.vista.reportarPersonas(
            this.modelo.montoIngresoMenor (), 
            this.modelo.promedioIngresos ());
    }
}