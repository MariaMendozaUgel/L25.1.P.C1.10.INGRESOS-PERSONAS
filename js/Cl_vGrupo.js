import Cl_vPersonas from "./Cl_vPersonas.js";
import Cl_mPersonas from "./Cl_mPersonas.js";

export default class Cl_vGrupo  {
    constructor () {
        
        this.controlador = null;
        this.mPersonas = null;
        this.vPersonas = new Cl_vPersonas();
        this.vista = document.getElementById ("mainForm");
        this.tabla = document.getElementById ("mainForm_tabla");
        this.btAgregar = document.getElementById ("mainForm_btAgregar");
        this.lblIngresoMenor = document.getElementById ("mainForm_lblIngresoMenor");
        this.lblPromedioIngresos = document.getElementById ("mainForm_lblPromedioIngresos");
        this.btAgregar.onclick = () => this.ocultar();
        this.vPersonas.btAceptar.onclick = () => this.controlador.agregarPersonas();
    }
    agregarPersonas() {
        this.mPersonas = new Cl_mPersonas ({
            nombre: this.vPersonas.nombre,
            ingreso: this.vPersonas.ingreso,
        });
        this.mostrar();
        return this.mPersonas;  
    }
    mostrar() {
        this.vista.hidden = false;
        this.vPersonas.ocultar();
    }
    ocultar () {
        this.vista.hidden = true;
        this.vPersonas.mostrar();
    }
    reportarPersonas (ingresoMenor, promedioIngresos) {
        this.tabla.innerHTML += `
        <tr>
        <td>${this.vPersonas.ingresoMenor}</td>
        <td>${this.vPersonas.promedioIngresos}</td></tr>`;
        this.lblIngresoMenor.innerHTML = ingresoMenor;
        this.lblPromedioIngresos.innerHTML = promedioIngresos;
    }
}