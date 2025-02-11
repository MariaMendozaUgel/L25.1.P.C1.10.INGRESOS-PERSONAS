/*/Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso 
menor y el ingreso promedio. 
Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150), 
(José, 135), (Carlos, 160), (Pedro, 75)*/
import Cl_grupo from "./Cl_grupo.js";
import Cl_personas from "./Cl_personas.js";

let persona1 = new Cl_personas("Mary", 150);
let persona2 = new Cl_personas("Jose", 135);
let persona3 = new Cl_personas("Carlos", 160);
let persona4 = new Cl_personas("Pedro", 75);

let grupo = new Cl_grupo();

grupo.procesarPersonas(persona1);
grupo.procesarPersonas(persona2);
grupo.procesarPersonas(persona3);
grupo.procesarPersonas(persona4);

alert("El monto del ingreso menor es: $" + grupo.montoIngresoMenor());
alert("El ingreso promedio es: $" + grupo.promedioIngresos());