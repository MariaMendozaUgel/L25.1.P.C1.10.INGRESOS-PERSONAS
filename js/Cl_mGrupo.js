import Cl_mPersonas from "./Cl_mPersonas.js";
export default class Cl_mGrupo {
    constructor() {
        this.acumIngresos = 0;
        this.contPersonas = 0;
        this.ingresoMenor = +1000;
    }
    procesarPersonas (p) {
        this.acumIngresos += p.ingreso;
        this.contPersonas++;
        if (p.ingreso < this.ingresoMenor) {
            this.ingresoMenor = p.ingreso;
        }
    }

    montoIngresoMenor () {
        return this.ingresoMenor;
    }

    promedioIngresos () {
        return this.acumIngresos / this.contPersonas;
    }
}