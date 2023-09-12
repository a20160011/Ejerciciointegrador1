var entrada = parseInt(prompt("Ingrese el monto de la entrada: "));
var segundo = parseInt(prompt("Ingrese el monto del segundo plato: "));
var postre = parseInt(prompt("Ingrese el monto del postre: "));
var montoparcial = entrada + segundo + postre;
var igv = montoparcial * 18 / 100;
var totalfinal = montoparcial + igv;

alert("A continuación, puedes ver los resultados en la consola");
console.log("Precio de la entrada: "+entrada);
console.log("Precio del segundo plato: "+segundo);
console.log("Precio del postre: "+postre);
console.log("Monto sin IGV:" +montoparcial);
console.log("IGV:" + igv);
console.log("Total de la cuenta: "+totalfinal);