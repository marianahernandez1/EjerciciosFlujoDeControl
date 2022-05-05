var signos = prompt(
    "Seleccione una opcion del 1 al 12" +
      "\n" +
      " 1. 22 de Diciembre a 20 de Enero" + 
      " 2. 21 de Enero a 19 de Febrero" +
      " 3. 20 de Febrero a 20 de Marzo" +
      " 4. 21 de Marzo a 20 de Abril" + 
      " 5. 21 de Abril a 20 de Mayo" +
      " 6. 21 de Mayo a 21 de Junio" +
      " 7. 22 de Junio a 21 de Julio" +
      " 8. 22 de Julio a 23 de Agosto" +
      " 9. 24 de Agosto a 23 de Septiembre" +
      " 10. 24 de Septiembre a 23 de Octubre" +
      " 11. 24 de Octubre a 22 de Noviembre" + 
      " 12. 23 de Noviembre a 21 de Diciembre"
);

switch(signos){
    case "1":
        console.log("Su signo es Capricornio");
        break;
    case "2":
        console.log("Su signo es Acuario");
        break;
    case "3":
        console.log("Su signo es Piscis");
        break;
    case "4":
        console.log("Su signo es Aries");
        break;
    case "5":
        console.log("Su signo es Tauro");
        break;
    case "6":
        console.log("Su signo es Geminis");
        break;
    case "7":
        console.log("Su signo es Cancer");
        break;
    case "8":
        console.log("Su signo es Leo");
        break;
    case "9":
        console.log("Su signo es Virgo");
        break;
    case "10":
        console.log("Su signo es Libra");
        break;
    case "11":
        console.log("Su signo es Escorpio");
        break;
    case "12":
        console.log("Su signo es Sagitario");
        break;
    default:
        alert("Opcion invalida");
        break;
}
