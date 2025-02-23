/*/Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso 
menor y el ingreso promedio. 
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150), 
(José, 135), (Carlos, 160), (Pedro, 75)*/
import Cl_vGrupo from "./Cl_vGrupo.js";
import Cl_mGrupo from "./Cl_mGrupo.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
    constructor () {
       let vista = new Cl_vGrupo (); 
       let modelo = new Cl_mGrupo (); 
       let controlador = new Cl_controlador (modelo, vista);
       vista.controlador = controlador;

    }
}

